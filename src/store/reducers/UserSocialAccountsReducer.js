import {store} from '../store.js';
import fetchSocialAccounts from "../api/fetchUserSocialAccounts.js";


export default function UserSocialAccountsReducer(accounts = {},action) {

  let user = JSON.parse(localStorage.getItem("user"));

  if (action.type === "FETCH_ACCOUNTS") {
     fetchSocialAccounts(store,action);
  }

  if (action.type === "ACCOUNTS_FETCHED") {
    if (!action.data.error) {
      localStorage.setItem("social", JSON.stringify(action.data.results[0]));
    }
    action.data.results[0].name = user.name
    return action.data.results[0];
  }

  return accounts;
}