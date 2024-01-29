import './App.css';
import { 
  Route, createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Vans from "./components/Vans/Vans"
import VanDetails from "./components/Vans/VanDetails"
import Dashboard from "./components/Host/Dashboard"
import Income from "./components/Host/Income"
import Hostvans from "./components/Host/Hostvans"
import Reviews from "./components/Host/Reviews"
import Layout from "./utility/Layout"
import HostLayout from "./utility/HostLayout"
import "./server"
import HostvanDetails from './components/Host/HostvanDetails';
import HostVanInfo from './components/Host/HostVanInfo';
import HostVanPricing from './components/Host/HostVanPricing';
import HostVanPhotos from './components/Host/HostVanPhotos';
import NotFound from './components/Notfound';

function App() {

  const router =createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
          <Route path="*" element={<NotFound/>}/>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vans" element={<Vans />} />
          <Route path="/Vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="vans" element={<Hostvans/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vans/:id" element={<HostvanDetails/>}>
              <Route index element={<HostVanInfo/>}/>
              <Route path='price' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>
          </Route>

        </Route>

  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
