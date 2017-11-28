import { createSelector } from "reselect";
import { SEARCH_BOOKS } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      console.log(action.searchResults);
      return action.searchResults;
    default:
      return state;
  }
};

// SELECTORS

export const booksSelector = state => state.books;

export const allBooksSelector = createSelector(booksSelector, booksHash =>
  Object.values(booksHash)
);
