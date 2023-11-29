import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/createBook';
import DisplayBook from './pages/displayBook';
import DeleteBook from './pages/deleteFile';
import EditBook from './pages/EditBook';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/create'
          element={<CreateBook />}
        />

        <Route
          path='/display/:id'
          element={<DisplayBook />}
        />

        <Route
          path='/delete/:id'
          element={<DeleteBook />}
        />
        <Route
          path='/edit/:id'
          element={<EditBook />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
