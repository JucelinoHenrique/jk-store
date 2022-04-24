import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/formLogin.css"
import {login,setPassword,setUser } from "../features/login/loginSlice";

 const FormLogin = ()=> {
    const {user,password,errorMessage,isAuthenticated} = useSelector((state)=> state.login)
    const dispatch = useDispatch()

    const hadlesUser = (e)=> dispatch(setUser(e.target.value))
    const handlePassword = (e)=> dispatch(setPassword(e.target.value))

    const loginUser = ()=>{
    dispatch(login())
    
    }


    return(
        <div className="container-form">
            <div className="container-icon">
                <h1>Clothes Store</h1>
            </div>
             <form className="formulary">
                 <input type="email" value={user} onChange={hadlesUser} placeholder="Digite o seu e-mail"/>
                 <input type="password" value={password} onChange={handlePassword} placeholder="Digite sua senha"/>
             </form>
             <div className="container-button">
                 <button className="btn-send" type="button" onClick={loginUser}>Entrar</button>
             </div>
             <div className="erroMessage">
                 {errorMessage}
             </div>
        </div>
    )
}


export default FormLogin;