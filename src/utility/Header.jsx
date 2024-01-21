import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function Header(){

    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink className= {({isActive})=>isActive? "selected": ""}  to="/host" >
            Host
          </NavLink>
          <NavLink className= {({isActive})=>isActive? "selected": ""}to="/about">
            About
          </NavLink>
          <NavLink className= {({isActive})=>isActive? "selected": ""}to="/Vans">
            Vans
          </NavLink>
        </nav>
      </header>
    )
}