import React from 'react';
import NoteCard from './NoteCard';
import { useNavigate } from 'react-router-dom';

function NotesList({ notes, onEdit, onDelete, onView }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow container mx-auto p-8">
        <div className="notes-list grid grid-cols-1 md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onEdit={() => onEdit(note)}
              onDelete={() => onDelete(note._id)}
              onView={() => onView(note)}
            />
          ))}
        </div>
      </main>
      <div className="flex justify-center mb-4">
        <button 
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-orange-700 transition-all"
        >
          Go Back
        </button>
      </div>
     
    </div>
  );
}

export default NotesList;
