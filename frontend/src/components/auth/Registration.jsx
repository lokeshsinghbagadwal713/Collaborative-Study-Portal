import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {

  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:2000/api/user/register', {
        name,
        userName,
        email,
        password,
        phoneNumber,
      });

      if (response.data.success) {
        setSuccess('Registration successful');
        navigate('/login');
        // Optionally redirect or clear the form
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
        <div className="w-full max-w-lg p-8 space-y-6 bg-gradient-to-r from-purple-200 to-blue-300 rounded-lg shadow-2xl md:shadow-xl transform md:scale-110">
            <h2 className="text-3xl font-bold text-center text-gray-700">Create a New Account</h2>
            <form onSubmit={onRegisterSubmit} className="space-y-6">
                
                {/* First Row: Name and Username */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs px-1 text-gray-600">Username</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Second Row: Email and Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Third Row: Confirm Password and Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Phone Number</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-3 mt-2 text-gray-700  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
                
          {/* Error and Success Messages */}
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}

                {/* Register Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Register
                    </button>
                </div>
            </form>

            <div className="mt-4 text-sm text-center text-gray-500">
                Already have an account? <a href="/login" className="text-blue-600 hover:text-blue-500">Login</a>
            </div>
        </div>
    </div>
);
}

export default Registration