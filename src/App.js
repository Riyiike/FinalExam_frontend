import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from  './components/BookList'
import BookForm from './components/BookForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create-book" element={<BookForm />} />
          <Route path="/edit-book/:id" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
