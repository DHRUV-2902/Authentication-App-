import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import About from './Components/About';
import ForgotPassword from './Components/ForgotPassword';
import ChangePassword from './Components/ChangePassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/fp" element={<ForgotPassword/>}/>
        <Route path="/cp" element={<ChangePassword/>}/>

        <Route path="*" element={<Home/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
