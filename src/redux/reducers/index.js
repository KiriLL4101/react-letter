import { combineReducers } from "redux";

import books from "./books";
import filter from "./filter"
import card from './card'

export default combineReducers({
  books,
  filter,
  card
});
