import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import TextEditor from './pages/TextEditor';
import Dashboard from './pages/Dashboard'
import DetailedNewsView from './pages/DetailedNewsView';
import Footer from './components/Footer';



function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/editor' element={<TextEditor/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/newsview' element={<DetailedNewsView/>} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
