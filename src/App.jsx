import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans/Vans"
import VanDetails from "./components/Vans/VanDetails"
import Dashboard from "./components/Host/Dashboard"
import Income from "./components/Host/Income"
import Reviews from "./components/Host/Reviews"
import Layout from "./utility/Layout"
import HostLayout from "./utility/HostLayout"

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
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
