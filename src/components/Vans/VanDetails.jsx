import React from "react"
import {Link, useParams} from "react-router-dom"
import { useEffect, useState } from "react"

export default function VanDetails(){
    const [van, setVan]= useState(null)
    const params = useParams()  
    useEffect(()=>{

        async function showVanDetail(){
            const response = await fetch(`/api/vans/${params.id}`)
            const data = await response.json()       
            setVan(data.vans)   
        }
        showVanDetail()
    },[params.id]
    )
    
    return(
        <div className="van-detail-container">
            {van ? 
                (<div className="van-detail">
                    <Link to="/vans" style={{textDecoration:"none", color:"black"}}>Back to all vans</Link>
                    <img src={van.imageUrl}></img>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>) 
                : <h2>Loading...</h2>
            }
        </div>
    )
}

