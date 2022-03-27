import { combineReducers } from "redux";
import { Authentication } from "./Authentication";
import { Setting } from "./settting";

const CreateReducer = (asyncreducers) => {
  return combineReducers({
    Auth: Authentication,
    Setting,
    ...asyncreducers,
  });
};
export default CreateReducer;
