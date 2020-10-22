import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userList from './userList/reducers'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    userList
  });
