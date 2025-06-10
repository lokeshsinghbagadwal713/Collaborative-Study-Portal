import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Update with your API endpoint
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
        navigate('/login'); // Redirect if user is not authenticated
      }
    };
    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        {user ? (
          <div>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Joined On:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ) : (
          <p>User data not found.</p>
        )}
        <div className="mt-6">
          <a href="/" className="text-blue-500">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
