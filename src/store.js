import { createStore } from "redux";
import counterReducer from "./components/Reducer/CounterReducer";

const store=createStore(counterReducer)

export default store;