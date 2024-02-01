import React,{useState} from "react"


export default function Login(){

    const [loginData, setLoginData]= useState({email:"",password:""})

    function onHandleChange(event){

        setLoginData(
            prev=>
            {return {...prev,[event.target.name]:event.target.value}
        })

    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(loginData.email, loginData.password)
    }
console.log(loginData)
    return(
    <div className="login-container">
    <h1>Sign in to your account</h1>

    <form onSubmit={handleSubmit} className="login-form">
        <input placeholder="Email addres" onChange={onHandleChange} name="email"></input>
        <input placeholder="Password" onChange={onHandleChange} name="password"></input>

        <button>Log in</button>
    </form>
    </div>
    )
}