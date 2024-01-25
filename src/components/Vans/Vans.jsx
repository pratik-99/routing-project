import React,{useState} from "react"
import { Link, useSearchParams } from "react-router-dom"



export default function Vans(){
const [vans, setVans]= useState([])
const [searchParams, setSearchParams]= useSearchParams()
const typefilter= searchParams.get("type")
React.useEffect(()=>{
    fetch("api/vans").
    then(res=>res.json()).
    then(data=>setVans(data.vans))
},[])

const filteredVans= typefilter? vans.filter(van=>van.type.toLowerCase()===typefilter):vans

const vanElements=filteredVans.map(van=>(
    <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
        </div>
))
return (
<div className="van-list-container">
    <h1>Explore our van options</h1>
    <div className="van-list-filter-buttons">
        <button onClick={()=>setSearchParams({type:"simple"})} className="van-type simple">simple</button>
        <button onClick={()=>setSearchParams({type:"rugged"})} className="van-type rugged">rugged</button>
        <button onClick={()=>setSearchParams({type:"luxury"})} className="van-type luxury">luxury</button>
        <button onClick={()=>setSearchParams({})} className="van-type clear-filters">clear filter</button>

    </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
{/* <Link to="." className="van-type clear-filters">clear filter</Link> */}