import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import GradeEvaluation from './pages/GradeEvaluation';
import PasswordChecker from './pages/PasswordChecker';
import ElectricityBill from './pages/ElectricityBill';
import AttendanceChecker from './pages/AttendanceChecker';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/act1-login" element={<Login />} />
        <Route path="/act2-grade-evaluation" element={<GradeEvaluation />} />
        <Route path="/act3-password-checker" element={<PasswordChecker />} />
        <Route path="/act4-electricity-bill" element={<ElectricityBill />} />
        <Route path="/act5-attendance-checker" element={<AttendanceChecker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App