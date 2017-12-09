import { createSelector } from "reselect";
import { SEARCH_BOOKS, BOOKS_FETCHED, BOOK_CREATED, BOOK_DELETED } from "../actions/types";

// Methods

const deleteProperty = (key, obj) => {
  const { [key]: deletedItem, ...rest } = obj;
  return rest;
}

// Reducer

export default (state = {}, action) => {
  switch (action.type) {
    case BOOKS_FETCHED:
    case BOOK_CREATED:
      return { ...state, ...action.results.entities.books };
    case BOOK_DELETED:
      return deleteProperty(action.results, state);
    case SEARCH_BOOKS:
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
