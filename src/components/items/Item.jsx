import React from "react";
import NumberFormat from "react-number-format";
import { NavLink } from "react-router-dom";

//* Images
import IconShipping from "./../../assets/images/ic_shipping.png";

import "./item.scss";
const Item = ({ author, item }) => {
  const { lastname, name } = author;
  const {
    id,
    title,
    free_shipping,
    price: { decimals },
    picture,
  } = item;
  return (
    <>
      <div className="item d-flex justify-content-start justify-content-md-center gap-3 py-3">
        <div className="img">
          <NavLink to={`/items/${id}`}>
            <img src={picture} alt="" />
          </NavLink>
        </div>
        <div className="description">
          <div className="item-header d-flex align-items-center pt-2">
            <h2 className="col-7 col-lg-6 col-md-12 mb-3">
              <NavLink to={`/items/${id}`}>
                <NumberFormat
                  value={decimals}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"$"}
                />
              </NavLink>
              {free_shipping ? <img src={IconShipping} alt="" /> : null}
            </h2>
            <span className="col-4 col-lg-5 col-md-12 offset-1 mb-3">{`${name} ${lastname}`}</span>
          </div>
          <div className="item-body">
            <p className="col-8 col-md-auto">
              <NavLink to={`/items/${id}`}>{title}</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
