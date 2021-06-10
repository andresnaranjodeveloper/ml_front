import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

//* Context
import SearchContext from "./../../context/search/searchContext";

//* Styles
import "./form.scss";

const Form = () => {
  const searchContext = useContext(SearchContext);

  const { handleSearch } = searchContext;

  let history = useHistory();

  const [search, setSearch] = useState("");

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    handleSearch(search);
    history.push(`/items?search=${search}`);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmitSearch}>
        <div className="container search">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={handleChangeSearch}
          />
          <button type="submit">
            <div className="icon-search"></div>
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
