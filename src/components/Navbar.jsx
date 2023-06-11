import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
  console.log("adel",state)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container">
          
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark ms-2">
               <i className="fa fa-sign-in me-1"></i>  1 Login </NavLink>
            </div>
            <div className="buttons">
              <NavLink to="/register" className="btn btn-outline-dark ms-2 ">
               <i className="fa fa-user-plus me-1"></i>  Register </NavLink>
            </div>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-cart-plus me-1"></i>  Cart({state.length-1}) 
                </NavLink>
            </div>
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
