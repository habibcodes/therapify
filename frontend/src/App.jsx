
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Dashboard from './components/dashboard'
import Background from './components/background';
import PracDash from './components/Prac-dashboard'
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    
    <BrowserRouter>
    <CssBaseline enableColorScheme />
    <div>
    

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
