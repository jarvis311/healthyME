import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { SignUpUser } from './components/SignUpUser';
import { Navbar } from './components/Navbar';
import { SignInUser } from './components/SignInUser';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/ >
          <Route path="/signup" element={<SignUpUser/>}/ > 
          <Route path="/signin" element={<SignInUser/>}/ > 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
