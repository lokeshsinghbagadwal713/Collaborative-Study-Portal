import React, { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'
//import {useNavigate} from 'react-router-dom'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  //const navigate = useNavigate()

  useEffect(() => {
    const savedLogedIn = localStorage.getItem('isLoggedIn') === 'true';
    const savedAccessToken = localStorage.getItem('accessToken');
    
    if(savedLogedIn && savedAccessToken){
      // const decodedToken = jwtDecode(savedAccessToken)
      // if(decodedToken.exp * 1000 < Date.now()){
      //   //token has expired
      //   logout();
      //   //navigate('/login');
      // } else{
        setIsLoggedIn(true);
        setAccessToken(savedAccessToken);
    //  }
    } 
  }, []);

  const login = (token) => {
    //console.log('1ST DEBUG setting access token:', token); //debug

    setIsLoggedIn(true);
    setAccessToken(token);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('accessToken', token);
    
  };


  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

 // console.log('AuthContext :', {isLoggedIn, accessToken});

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
