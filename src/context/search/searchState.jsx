import React, { useReducer } from "react";

import SearchContext from "./searchContext";
import SearchReducer from "./searchReducer";

import itemAxios from "./../../config/axios";

import { SEARCH_ITEMS, SHOW_ITEMS, SHOW_ITEM_INFO } from "./../../types/index";

const SearchState = ({ children }) => {
  const initialState = {
    searchdata: "",
    items: null,
    author: null,
    categories: null,
    itemInfo: null,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  //* Stores the search parameter temporarily
  const handleSearch = (search) => {
    dispatch({
      type: SEARCH_ITEMS,
      payload: search,
    });
  };

  //* Consult the articles related to the search parameter, and store the results temporarily
  const getItems = async (search) => {
    if (search) {
      const res = await itemAxios.get(`/api/items?q=${search}`);
      let items = [];
      for (let index = 0; index < res.data.items.length; index++) {
        if (index > 3) {
          break;
        }
        items.push(res.data.items[index]);
      }
      dispatch({
        type: SHOW_ITEMS,
        payload: {
          author: res.data.author,
          items,
          categories: res.data.categories,
        },
      });
    }
  };

  //* Check the information and description of an item, and store the results temporarily
  const getItem = async (id) => {
    if (id) {
      const res = await itemAxios.get(`/api/items/${id}`);
      dispatch({
        type: SHOW_ITEM_INFO,
        payload: { author: res.data.author, itemInfo: res.data.itemInfo },
      });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchdata: state.searchdata,
        items: state.items,
        author: state.author,
        categories: state.categories,
        itemInfo: state.itemInfo,
        handleSearch,
        getItems,
        getItem,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
