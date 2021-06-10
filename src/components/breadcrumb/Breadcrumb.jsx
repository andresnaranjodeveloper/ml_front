import React, { useContext } from "react";

//* Context
import SearchContext from "../../context/search/searchContext";

//* Components
import ItemBreadcumb from "./ItemBreadcrumb";

//* Styles
import "./breadcrumb.scss";

const Breadcrumb = () => {
  const searchContext = useContext(SearchContext);

  const { categories, searchdata } = searchContext;

  let listCategories = categories
    ? categories
    : JSON.parse(localStorage.getItem("categories"));
  let dataSearch = searchdata
    ? searchdata
    : JSON.parse(localStorage.getItem("searchdata"));

  return (
    <>
      <div className="container py-3 justify-content-md-center">
        <ol className="col-11 offset-1 breadcrumb">
          {listCategories
            ? listCategories.map((category, index) => (
                <ItemBreadcumb
                  key={index}
                  text={category}
                  search={dataSearch}
                />
              ))
            : null}
        </ol>
      </div>
    </>
  );
};

export default Breadcrumb;
