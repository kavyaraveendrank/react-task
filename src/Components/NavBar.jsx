import React from "react";
import "../Styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}><h2>My Shopping </h2>
           {/* <span><i className="fas fa-cart-plus"></i></span> */}
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          {/* <span>
           
          </span> */}
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;