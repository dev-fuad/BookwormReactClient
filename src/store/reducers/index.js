import { combineReducers } from "redux";
import user from "./users";
import books from "./books";

export default combineReducers({
  user,
  books
});