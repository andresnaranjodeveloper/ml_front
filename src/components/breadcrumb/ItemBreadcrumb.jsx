import React from "react";
import { NavLink } from "react-router-dom";

const ItemBreadcumb = ({ text, search }) => {
  return (
    <>
      <li>
        <NavLink to={`/items?search=${search}`}>{text}</NavLink>
        <svg
          className="chevron"
          viewBox="0 0 9 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            fillRule="evenodd"
            d="M1 1.343L6.657 7 1 12.657"
          ></path>
        </svg>
      </li>
    </>
  );
};

export default ItemBreadcumb;
