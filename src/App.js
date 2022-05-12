import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ServiceA from "./Components/ServiceA";
import ServiceB from './Components/ServiceB'
function App() {
  return (
    <div className="App">
    

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sundayservice" element={<ServiceA/>}></Route>
          <Route path="/upcomingevents" element={<ServiceB/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
