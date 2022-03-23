import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { SignUpUser } from './components/Authantication/SignUpUser';
import { SignInUser } from './components/Authantication/SignInUser';
import { InfoProduct } from './components/pages/InfoProduct';
import { DashBoard } from './components/pages/DashBoard';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpUser />} />
          <Route path="/signin" element={<SignInUser />} />
          <Route path="/dashbord" element={<DashBoard/>} />
          <Route path="/infoproduct/:_id" element={<InfoProduct/>} />
   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
