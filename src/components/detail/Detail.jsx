import React, { useEffect, useContext } from "react";
import NumberFormat from "react-number-format";

//* Context
import SearchContext from "./../../context/search/searchContext";

//* Components
import SEO from "../seo/Seo";
import Layout from "../layout/Layout";
import Breadcrumb from "./../breadcrumb/Breadcrumb";

//* Styles
import "./detail.scss";

const Detail = (props) => {
  const id = props.match.params.id;

  const searchContext = useContext(SearchContext);

  const { getItem, itemInfo } = searchContext;

  useEffect(() => {
    getItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Layout>
        <Breadcrumb />
        <div className="container justify-content-md-center">
          <div className="detail d-flex col-10 offset-1 p-3 gap-3">
            {itemInfo ? (
              <>
                <SEO title={`${itemInfo.title} | Mercado Libre`} description={itemInfo.description} url={props.location.pathname} product={itemInfo} /> 
                <div className="img col-8 col-md-12">
                  <img src={itemInfo.picture} alt="" />
                </div>
                <div className="info col-3 col-md-12">
                  <p className="mt-4 mb-3">
                    {itemInfo.condition}
                    {itemInfo.sold_quantity > 0
                      ? ` - ${itemInfo.sold_quantity} vendidos`
                      : null}{" "}
                  </p>
                  <h1 className="mb-4">{itemInfo.title}</h1>
                  <h2 className="mb-4">
                    <NumberFormat
                      value={itemInfo.price.decimals}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"$"}
                    />
                    <sup>00</sup>
                  </h2>
                </div>
                <div className="description col-9">
                  <h3 className="mt-3 mb-4 ml-4">Descripción del porducto</h3>
                  <p className="mb-4 ml-4">{itemInfo.description}</p>
                </div>
              </>
            ) : (
              <h1 className="loading d-flex justify-content-center align-items-center">
                Cargando...
              </h1>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Detail;
