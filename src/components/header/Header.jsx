import React from "react";
import { NavLink } from "react-router-dom";

//* Components
import Form from "../form/Form";

import Logo from "./../../assets/images/Logo_ML.png";
//* Styles
import "./header.scss";
const Header = () => {
  return (
    <>
      <header>
        <div className="container pt-3 justify-content-md-center">
          <div className="col-1 col-md-10 offset-1 d-flex align-items-center justify-content-start justify-content-md-center mb-3">
            <NavLink to="/">
              <img src={Logo} alt="Logo_ML" />
            </NavLink>
          </div>
          <div className="col-9 col-md-10 d-flex align-items-center mb-3">
            <Form />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
