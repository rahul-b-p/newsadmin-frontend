import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import TextEditor from './pages/TextEditor';
import Dashboard from './pages/Dashboard';
import DetailedNewsView from './pages/DetailedNewsView';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const location = useLocation();

  // Determine whether to show the search input based on the route
  const showSearch = location.pathname === '/dashboard';

  return (
    <>
      <Header showSearch={showSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor' element={<TextEditor />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newsview' element={<DetailedNewsView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
