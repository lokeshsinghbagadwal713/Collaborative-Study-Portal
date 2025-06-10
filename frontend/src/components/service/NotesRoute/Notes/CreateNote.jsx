import React, { useState, useEffect, useRef } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import TextEditor from '../UI/TextEditor';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../authContest/AuthContext.jsx';

function CreateNote({ onSave, note }) {
  const [content, setContent] = useState(null);  // Start with `null` to avoid premature state changes
  const [title, setTitle] = useState(note ? note.title : '');
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    isMounted.current = true;
    if (note && note.content) {
      setContent(EditorState.createWithContent(convertFromRaw(note.content)));  // Handle content conversion correctly
    } else {
      setContent(EditorState.createEmpty());  // Empty editor for creating a new note
    }
    return () => {
      isMounted.current = false;
    };
  }, [note]);

  const handleSave = () => {
    if (isMounted.current && title.trim() && content) {
      const contentRaw = convertToRaw(content.getCurrentContent());
      onSave({ ...note, title, content: contentRaw });
      alert('Note saved successfully!');
      navigate('/services/notes');
    }
  };

  return (
    <div className="create-note p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{note ? 'Edit Note' : 'Create a New Note'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 mb-4 border rounded"
      />
      {content && (  // Ensure the editor is only rendered after content initialization
        <TextEditor value={content} onEditorStateChange={setContent} />
      )}
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        {note ? 'Update Note' : 'Save Note'}
      </button>
    </div>
  );
}

export default CreateNote;
