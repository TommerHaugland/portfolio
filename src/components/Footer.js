import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-auto flex justify-between bg-red-700 text-white">
      <div className="footer-meta container mx-auto flex">
        <p className="mr-2">All rights reserved Tommer Haugland</p>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
