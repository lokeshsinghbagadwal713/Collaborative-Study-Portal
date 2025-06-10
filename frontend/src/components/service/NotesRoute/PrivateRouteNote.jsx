import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../authContest/AuthContext.jsx'; // Import the auth context

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();

  // console.log('PrivateRoute: isLoggedIn =', isLoggedIn);    // for debugging.

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
