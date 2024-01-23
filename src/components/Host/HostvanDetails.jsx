import React, {useEffect, useState}from "react"
import {useParams, Link, NavLink, Outlet} from "react-router-dom"
export default function HostvanDetails(){

    const params= useParams()
    const [hostVan, setHostVan]= useState([])
    useEffect(()=>{
        async function getDetail(){
            const res= await fetch(`/api/host/vans/${params.id}`)
            const data= await res.json()
            setHostVan(data.vans)
        }
        getDetail()
    },[])
    const navstyle ={
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
    
    if (!hostVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".." //the double dot leads to the previous parent route
                relative="path" //If you add this statement then the double dots will lead to one step back in the
                // relative path of the link and not to the parent route
                className="back-button"
            >&larr; <span>Back </span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={hostVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${hostVan.type}`}
                        >
                            {hostVan.type}
                        </i>
                        <h3>{hostVan.name}</h3>
                        <h4>${hostVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                <NavLink to="." end style={({isActive})=>isActive?navstyle:null} >
                    Info
                </NavLink>
                <NavLink to="price" style={({isActive})=>isActive?navstyle:null}>
                    Pricing
                </NavLink>
                <NavLink to="photos" style={({isActive})=>isActive?navstyle:null}>
                    Photos
                </NavLink>
                </nav>
                <Outlet context={{hostVan}}/>
            </div>
        </section>
    )
}