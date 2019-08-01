import {store} from '../store.js';
import fetchSocialAccounts from "../api/fetchUserSocialAccounts.js";


export default function UserSocialAccountsReducer(accounts = {},action) {

  if (action.type === "FETCH_ACCOUNTS") {
     fetchSocialAccounts(store,action);
  }

  if (action.type === "ACCOUNTS_FETCHED") {
    if (!action.data.error) {
      localStorage.setItem("social", JSON.stringify(action.data.results[0]));
    }
    return action.data.results[0];
  }

  return accounts;
}