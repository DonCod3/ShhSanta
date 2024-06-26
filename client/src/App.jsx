import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import Home  from './pages/Home.jsx'
import Register from './pages/register.jsx'
import Dashboard from './pages/dashboard.jsx'
import Login from './pages/login.jsx'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
