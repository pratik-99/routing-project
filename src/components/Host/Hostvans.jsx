import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
export default function Hostvan(){

    const[vans,setVans]=useState([])

    useEffect(()=>{
        async function getData(){
            const res= await fetch("/api/host/vans")
            const data = await res.json()
            setVans(data.vans)
        }
        getData()
    },[])
    console.log(vans)
    return(<>
    <h1>Your Listed Vans</h1>
    <Link to=""></Link>
    </>
    )
}