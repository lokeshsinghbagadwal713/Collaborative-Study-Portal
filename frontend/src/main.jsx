import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './authContest/AuthContext.jsx';

import Layout from './Layout/Layout.jsx';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Services from './components/pages/Services.jsx';
import Login from './components/auth/Login.jsx';
import Registration from './components/auth/Registration.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import UserProfile from './components/auth/UserProfile.jsx';
import NotesContainer from './components/service/NotesRoute/Notes/NotesContainer.jsx';
import YoutubeHome from './components/service/Youtube/YoutubeHome.jsx';
import WebHome from './components/service/webSearch/WebHome.jsx';
import CHome from './components/service/calculator/calPage/CalHome.jsx';

import Dictionary from './components/service/Dictionary/Dictionary.jsx';
import BooksPage from './components/service/Books/BooksPage.jsx';

import TodoApp from './components/service/Todo/TodoApp.jsx';


import CreateNote from './components/service/NotesRoute/Notes/CreateNote.jsx';
import NotesList from './components/service/NotesRoute/Notes/NotesList.jsx';
import PrivateRoute from './components/service/NotesRoute/PrivateRouteNote.jsx';  // Private route for protecting routes
import ScientificCalculatorPage from './components/service/calculator/calPage/ScientificCalPage.jsx';
import UnitConverterPage from './components/service/calculator/calPage/UnitCalPage.jsx';
import ComplexCalculator from './components/service/calculator/ComplexCalculator.jsx';
import BookDetails from './components/service/Books/BookDetails.jsx';
import HomeworkDashboard from './components/service/homework/HomeworkDashbord.jsx';
import AddHomework from './components/service/homework/AddHomework.jsx';
import HomeworkDetails from './components/service/homework/HomeworkDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
      <Route path='reset-password' element={<ForgotPassword />} />
      <Route path='services' element={<Services />} />
      <Route path='profile' element={<UserProfile />} />

      {/* Private Routes (requires authentication) */}
      <Route path='services/notes/*' element={<PrivateRoute element={<NotesContainer />} />}>
        <Route path='create' element={<CreateNote />} />
        <Route path='list' element={<NotesList />} />
      </Route>

      <Route path='services/youtube' element={<PrivateRoute element={<YoutubeHome/>} />} />

      <Route path='services/calculator/*' element={<PrivateRoute element={< CHome/>} />} />
      <Route path='scientific' element={<ScientificCalculatorPage />} />
      <Route path='unit-convertor' element={<UnitConverterPage />} />
      <Route path='complex' element={<ComplexCalculator />} />

      <Route path='services/dict' element={<PrivateRoute element={<Dictionary />} />} />
  
      <Route path='services/book' element={<PrivateRoute element={<BooksPage />} />} />
      <Route path='services/book-details/:id' element={<PrivateRoute element={<BookDetails />} />} />



      <Route path='services/todo' element={<PrivateRoute element={<TodoApp />} />} />
      <Route path='services/web-search' element={<PrivateRoute element={<WebHome />} />} />
      
      
      <Route path='services/homework' element={<PrivateRoute element={<HomeworkDashboard />} />} />
      
      <Route path='services/homework/add' element={<PrivateRoute element={<AddHomework />} />} />
      <Route path='services/homework/:id' element={<PrivateRoute element={<HomeworkDetails/>} />} />
      
     
      
    </Route>
  )
);

const App = () => {
  const {isLoggedIn, logout}  = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/login')
    }
  }, [isLoggedIn, navigate]);

  return(
    <RouterProvider router={router}/>
  );  
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
         <App/>
      </RouterProvider>
      
    </AuthProvider>
  </StrictMode>
);
