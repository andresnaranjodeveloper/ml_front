import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//* Context
import SearchContext from "./../../context/search/searchContext";

//* Components
import Layout from "../layout/Layout";
import Breadcrumb from "./../breadcrumb/Breadcrumb";
import Items from "./../items/Items";

const Search = ({ location }) => {
  const searchContext = useContext(SearchContext);

  const { searchdata, handleSearch, categories } = searchContext;

  let history = useHistory();

  const dataSearch = location.search.split("=")[1];

  !dataSearch && history.push(`/`);

  useEffect(() => {
    if (!searchdata) {
      handleSearch(dataSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSearch, dataSearch]);

  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("searchdata", JSON.stringify(searchdata));
  return (
    <>
      <Layout>
        <Breadcrumb />
        <Items />
      </Layout>
    </>
  );
};

export default Search;
