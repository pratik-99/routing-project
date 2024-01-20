import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans/Vans"
import VanDetails from "./components/Vans/VanDetails"
import Layout from "./utility/Layout"

import "./server"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
