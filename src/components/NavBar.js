import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar shadow-xl">
      <Link to="/" className="nav-logo">
        T
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Hjem
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            Om meg
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/project" className="nav-link" onClick={closeMenu}>
            Prosjekter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
