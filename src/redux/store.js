import { createStore } from "redux";
import rootReducer from "./reducers/books";


const store = createStore(rootReducer);

export default store;
