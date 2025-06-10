import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../../../authContest/AuthContext'

function NotesHome() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition-all hover:scale-105">
        <h1 className="text-4xl font-semibold mb-6 text-center">Notes</h1>
        
        {isLoggedIn ? (
          <>
            <p className="text-gray-700 mb-4">Create and manage your notes easily. You can create new notes and view all your saved notes with just a click.</p>
            <button
              className="w-full mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
              onClick={() => navigate('/services/notes/create')}
            >
              Create Note
            </button>
            <p className="text-gray-700 mb-4">View all your saved notes in one place. Keep track of your thoughts and ideas effortlessly.</p>
            <button
              className="w-full mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
              onClick={() => navigate('/services/notes/list')}
            >
              See Your Notes
            </button>
          </>
        ) : (
          <div className="text-red-500 font-semibold">Please log in to manage your notes.</div>
        )}

        <button
          className="w-full mt-4 px-4 py-2 bg-gray-500 hover:bg-orange-700 text-white rounded transition-all"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotesHome;
