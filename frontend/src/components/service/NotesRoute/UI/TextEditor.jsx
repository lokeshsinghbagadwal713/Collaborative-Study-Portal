import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function TextEditor({ value, onEditorStateChange }) {
  return (
    <Editor
      editorState={value}
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
        inline: { options: ['bold', 'italic', 'underline'] },
      }}
      editorClassName="bg-white p-4 rounded shadow"
    />
  );
}

export default TextEditor;
