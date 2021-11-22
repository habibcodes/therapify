
import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import Background from './components/background';
import PracDash from './components/Prac-dashboard'

function App() {
  return (
    
    <BrowserRouter>
    <div>
    <CssBaseline />

      <Navbar />
      <Background />
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pracdash" element={<PracDash/>} />

      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
