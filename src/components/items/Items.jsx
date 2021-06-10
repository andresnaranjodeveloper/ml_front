import React, { useEffect, useContext } from "react";

//* Context
import SearchContext from "./../../context/search/searchContext";

//* Components
import Item from "./Item";

//* Styles
import "./items.scss";

const Items = () => {
  const searchContext = useContext(SearchContext);

  const { searchdata, getItems, items, author } = searchContext;

  useEffect(() => {
    getItems(searchdata);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchdata]);

  return (
    <>
      <div className="container justify-content-md-center">
        <div className="items col-10 offset-1 p-3">
          {items ? (
            items.map((item) => (
              <Item key={item.id} author={author} item={item} />
            ))
          ) : (
            <h1 className="loading d-flex justify-content-center align-items-center">
              Cargando...
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Items;
