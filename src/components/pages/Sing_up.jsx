import React from "react";
import '../pages/Sing_up.css'

export const Sing_up= () => {


  return (
    <>
    <h1 className="titulo">Registrarse </h1>
    <div className="formulario">
      <label htmlFor="nombres">Nombres </label>
      <input
      type="Text"
      id="nombres"
      name="nombres"
      required
      />
    </div>

    <div className="formulario_1">
      <label htmlFor="apellidos">Apellidos </label>
      <input
      type="Text"
      id="apellidos"
      name="apellidos"
      required
      />
    </div>

    <div className="formulario_2">
      <label htmlFor="username">Username </label>
      <input
      type="Text"
      id="username"
      name="username"
      required
      />
    </div>

    <div className="formulario_3">
      <label htmlFor="email">Email </label>
      <input
      type="email"
      id="email"
      name="email"
      required
      />
    </div>

    <div className="formulario_4">
      <label htmlFor="password">Password  </label>
      <input
      type="Text"
      id="password"
      name="password"
      required
      />
    </div>

    <div className="formulario_5">
      <label htmlFor="comfir password">Confi-password </label>
      <input
      type="Text"
      id="comfir password"
      name="c                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      0.omfir password"
      required
      />
    </div>
    <button className="button">Registrarse</button>
    </>
  )
  
};