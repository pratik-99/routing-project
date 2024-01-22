import React, {useEffect, useState}from "react"
import {useParams, Link} from "react-router-dom"
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
    
    if (!hostVan) {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

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
            </div>
        </section>
    )
}