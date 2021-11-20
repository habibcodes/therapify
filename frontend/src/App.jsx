
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Dashboard from './components/dashboard'

function App() {
  return (
    <BrowserRouter>
    <div>

      <Navbar />
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
