import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

function NoteCard({ note, onEdit, onDelete, onView }) {
  const contentPreview = note.content && note.content.blocks
    ? note.content.blocks.map(block => block.text).join(' ').substring(0, 10)
    : 'No content available';

  return (
    <div className="note-card p-4 border rounded-lg shadow-md bg-white transform transition-all hover:scale-105">
      <h3 className="text-lg font-bold mb-2 text-purple-600">{note.title}</h3>
      <p className="text-gray-700 mb-4">{contentPreview}...</p>
      <div className="flex justify-between items-center">
        <button onClick={onView} className="flex items-center text-blue-600 hover:text-blue-800">
          <FaEye className="mr-1" /> View
        </button>
        <button onClick={onEdit} className="flex items-center text-green-600 hover:text-green-800">
          <FaEdit className="mr-1" /> Edit
        </button>
        <button onClick={onDelete} className="flex items-center text-red-600 hover:text-red-800">
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
