import api from "../../providers/api";
import { SEARCH_BOOKS } from "./types";

export const searchBookResults = searchResults => ({
  type: SEARCH_BOOKS,
  searchResults
});

export const search = ({ query }) => () =>
  api.books.search(query);

export const searchBooks = query => dispatch => {
console.log("books");
api.books.search(query).then(books => {
    console.log(books);
    dispatch(searchBookResults(books))
  });}