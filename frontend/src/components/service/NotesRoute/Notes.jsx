import React from 'react';
import NotesContainer from './Notes/NotesContainer.jsx';

function NotesPage() {
  return (
    <div className="notes-page">
      <h1 className="text-4xl font-bold text-center mb-6">Notes</h1>
      <NotesContainer />
    </div>
  );
}

export default NotesPage;
