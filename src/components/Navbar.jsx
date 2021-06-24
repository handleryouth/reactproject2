import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <img className="navbar-img" src="/images/logo.svg" alt="Logo" />
      </div>
      <div>
        <button className="pinkButtonNavbar">Try it free</button>
      </div>
    </div>
  );
}


export default Navbar;
