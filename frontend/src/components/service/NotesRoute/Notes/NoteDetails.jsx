import React from 'react'
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate } from 'react-router-dom';

function NoteDetails({note}) {
  const navigate = useNavigate();
  if(!note){
    return <div>No note Selected</div>;
  }

  // Convert raw content back to EditorState 
  const contentState = convertFromRaw(note.content); 
  const editorState = EditorState.createWithContent(contentState);

  //const contentString = JSON.stringify(note.content, null, 2);
  return (
    <div className='note-details p-4 border rounded shadow'>
      <h3 className='text-xl font-bold mb-2'>{note.title}</h3>
      {/* <pre>{contentString}</pre> */}
      <Editor 
        editorState={editorState} 
        readOnly
        toolbarHidden 
        editorClassName="bg-white p-4 rounded shadow"
      />
      <button 
        onClick={() => navigate(-1)}
        className='mt-4 px-4 py-2 bg-blue-600 text-white rou hover:bg-blue-700'
        >
          Back
        </button>
    </div>
  );
}

export default NoteDetails


// NoteDetails.jsx
// import React from 'react';
// function NoteDetails({ note }) {
//   if (!note) return <div>No note selected</div>;
//   const renderContent = (content) => {
//     return content.blocks.map((block, index) => {
//       return (
//         <p key={index}> {block.text} </p>);
//     });
//   }; return (<div className="note-details p-4 border rounded shadow"> <h3 className="text-xl font-bold mb-2">{note.title}</h3> <div>{renderContent(note.content)}</div> </div>);
// } export default NoteDetails;