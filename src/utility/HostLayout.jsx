import React from "react"
import {NavLink, Outlet} from "react-router-dom"

export default function HostLayout(){

    return (
        <>
        <nav className="host-nav">
            <NavLink 
            className={({isActive})=>isActive?"selected":""} end to="/host"> 
{/* over here the end keyword is used to stop multiple selection of link at a single time */}
                Dashboard
            </NavLink>
            <NavLink 
            className={({isActive})=>isActive?"selected":""} to="/host/income">
                Income
            </NavLink>
            <NavLink 
            className={({isActive})=>isActive?"selected":""} to="/host/reviews">
                Reviews
            </NavLink>
        </nav>
        <Outlet/>
        </>
    )
}