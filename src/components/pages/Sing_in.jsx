import React from "react";
import '../pages/Sing_in.css'

export const Sing_in = () => {


  return (
    <>
    <h1 className="titulo">Inicio de sesión</h1>
    <div className="formulario">
      <label htmlFor="username">Username </label>
      <input
      type="Text"
      id="username"
      name="username"
      required
      />
    </div>

    <div className="formulario_1">
      <label htmlFor="password">Password </label>
      <input 
      type="Text"
      id="password"
      name="password"
      required
      />
    </div>
    <button className="button" >Inicio</button>
    <button className="buton">Registro</button>
    </>
  )
  
};
