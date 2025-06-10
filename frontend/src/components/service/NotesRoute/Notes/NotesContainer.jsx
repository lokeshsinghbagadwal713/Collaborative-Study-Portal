import React, { useState, useEffect } from 'react';
import { json, Route, Routes, useNavigate } from 'react-router-dom';
import NotesHome from './NotesHome';
import CreateNote from './CreateNote';
import NotesList from './NotesList';
import NoteDetails from './NoteDetails.jsx';
import PrivateRoute from '../PrivateRouteNote';
import useApi from '../../../../ApiServices/Api.jsx';
import { useAuth } from '../../../../authContest/AuthContext.jsx';


function NotesContainer() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const navigate = useNavigate();
  const api = useApi(); // Use the custom hook here
  const {accessToken} = useAuth();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get('/getNote');
        const notesWithParsedContent = response.data.data.map(note => ({
          ...note,
          content : JSON.parse(note.content)
        }));

         const notesId = new Set();
         const duplicates = notesWithParsedContent.filter(note => notesId.has(note._id) ? true :notesId.add(note._id));
        //console.log("Duplicates notes:", duplicates);
       // console.log("FETCHED NOTES:", notesWithParsedContent) // debug line
        setNotes(notesWithParsedContent);
      } catch (error) {
        console.log('Error fetching notes:', error.response?.data?.message || error.message);
      }
    };
    fetchNotes();
  }, [api]);


  const handleSave = async (noteData) => {
    const stringifiedContent = JSON.stringify(noteData.content);
    const noteDataWithStringifiedContent = {...noteData, content: stringifiedContent};
    console.log("Sending Note Data", noteDataWithStringifiedContent);
    try {
      const response = await api.post('/createNote', noteDataWithStringifiedContent, {
        headers: {
           'Content-Type': 'application/json', 
          'Authorization': `Bearer ${accessToken}`, // Add auth token if required 
        }
      });
      //console.log("Response Data", response.data);
      setNotes((prevNotes) => [...prevNotes, response.data.data]);
      navigate('/services/notes/list');
    } catch (error) {
      console.log('Error saving note:', error.response?.data?.message || error.message);
    }
  };


  const handleUpdate = (note) => {
    setCurrentNote(note);
    navigate(`/services/notes/edit/${note._id}`);
  };


  const handleEdit = async (noteData) => {
    const stringifiedContent = JSON.stringify(noteData.content);
    const noteDataWithStringifiedContent = {...noteData, content : stringifiedContent};

    try {
      const response = await api.put(`/update/${noteData._id}`, noteDataWithStringifiedContent, {
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${accessToken}`,
        }
      });
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === noteData._id ? response.data.data : note))
      );
      setCurrentNote(null);
      navigate('/services/notes/list');
    } catch (error) {
      console.error('Error updating note:', error.response?.data?.message || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/delete/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.log('Error deleting note:', error.response?.data?.message || error.message);
    }
  };

  const handleView = (note) => {
    setCurrentNote(note);
    navigate(`/services/notes/details/${note._id}`);
  };

  return (
    <div className="notes-container">
      <Routes>
        <Route path="/" element={<NotesHome />} />
        <Route path="/create" element={<PrivateRoute element={<CreateNote onSave={handleSave} note={currentNote} />} />} />
        <Route path="/list" element={<PrivateRoute element={<NotesList notes={notes} onEdit={handleUpdate} onDelete={handleDelete} onView={handleView} />} />} />
        <Route path="/details/:id" element={<NoteDetails note={currentNote} />} />
        <Route path='/edit/:id' element={<CreateNote onSave={handleEdit} note={currentNote}/>}/>
      </Routes>
    </div>
  );
}

export default NotesContainer;
