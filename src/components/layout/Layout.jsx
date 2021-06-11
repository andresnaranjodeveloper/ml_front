import React from "react";

//* Components
import Header from "../header/Header";
import SEO from "../seo/Seo";

//* Styles
import "./layout.scss";

const Layout = ({ children }) => {
  const seo = {
    title: "Mercado Libre",
    description: "La comunidad de compra y venta online más grande de América Latina.",
  }
  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Header />
      {children}
    </>
  );
};

export default Layout;
