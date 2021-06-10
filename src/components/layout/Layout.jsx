import React from "react";

//* Components
import Header from "../header/Header";

//* Styles
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
