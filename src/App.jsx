import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import TextEditor from './pages/TextEditor';
import Dashboard from './pages/Dashboard'
import DetailedNewsView from './pages/DetailedNewsView';



function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/editor' element={<TextEditor/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/newsview' element={<DetailedNewsView/>} />
     </Routes>
    </>
  )
}

export default App
