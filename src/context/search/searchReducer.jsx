import { SEARCH_ITEMS, SHOW_ITEMS, SHOW_ITEM_INFO } from "./../../types/index";

const SearchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_ITEMS:
      return {
        ...state,
        searchdata: action.payload,
      };
    case SHOW_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        author: action.payload.author,
        categories: action.payload.categories,
      };
    case SHOW_ITEM_INFO:
      return {
        ...state,
        itemInfo: action.payload.itemInfo,
        author: action.payload.author,
      };
    default:
      return state;
  }
};

export default SearchReducer;
