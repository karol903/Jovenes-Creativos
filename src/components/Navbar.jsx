import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Recuerdame
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/sobre_nosotros">Sobre_nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contactanos">Contactanos</NavLink>
        </li>
        <li>
          <NavLink to="/sing_in">Sing_in</NavLink>
        </li>
        <li>
          <NavLink to="/sing_up">Sing_up</NavLink>
        </li>
      </ul>
    </nav>
  );
};