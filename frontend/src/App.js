import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { SignUpUser } from './components/Authantication/SignUpUser';
import { SignInUser } from './components/Authantication/SignInUser';
import { AdminDashbord } from './components/AdminDashbord';
import { InfoProduct } from './components/InfoProduct';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/signin" element={<SignInUser />} />
          <Route path="/dashbord" element={<AdminDashbord />} />
          <Route path="/infoproduct/:_id" element={<InfoProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
