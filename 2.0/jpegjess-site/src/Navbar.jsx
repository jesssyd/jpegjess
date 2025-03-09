import React from "react";

export default function Navbar() {
  return (
   
    <nav className="page-container columns lg:mt-8 md:mt-6 mt-4">
        <p>JT</p>
        <div className="lg:col-span-6 lg:col-start-7 md:col-span-3 md:col-start-4 md:flex justify-between hidden">
            <a href="#about">about</a>
            <a href="#gallery">gallery</a>
            <a href="#education">education</a>
            <a href="#contact">contact</a>
        </div>
    </nav>
  );
}
