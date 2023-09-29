
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
function App() {

  return (
 

           <div>
      <Navbar />
      <Routes>
      <Route exact path="/"  element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/logout" element={<Logout/>} />

      </Routes>
      <Footer/>
      </div>

  
  );
}

export default App;
