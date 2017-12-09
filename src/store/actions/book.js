import { normalize } from 'normalizr';
import api from "../../providers/api";
import { SEARCH_BOOKS, BOOKS_FETCHED, BOOK_CREATED, BOOK_DELETED } from "./types";
import { bookSchema } from '../../utilities/schemas';

const searchBookResults = searchResults => ({
  type: SEARCH_BOOKS,
  searchResults
});

const booksFetched = results => ({
  type: BOOKS_FETCHED,
  results
});

const bookCreated = results => ({
  type: BOOK_CREATED,
  results
});

const bookDeleted = results => ({
  type: BOOK_DELETED,
  results
});

export const search = ({ query }) => () => api.books.search(query);

export const searchBooks = query => dispatch => {
  api.books.search(query).then(books => {
    dispatch(searchBookResults(books));
  });
};

export const fetchBooks = () =>  dispatch =>
  api.books.fetchAll()
    .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));

export const createBook = data => dispatch =>
  api.books.create(data)
    .then(book => dispatch(bookCreated(normalize(book, bookSchema))));

export const deleteBook = data => dispatch =>
  api.books.delete(data)
    .then(() => dispatch(bookDeleted(data)));
