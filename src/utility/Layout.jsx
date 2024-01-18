import {Outlet, outlet} from "react-router-dom"
import Header from "./Header"

export default function Layout(){

    return(
    <>
        <Header/>
        <Outlet/>
    </>
    )
}