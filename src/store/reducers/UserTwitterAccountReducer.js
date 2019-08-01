import {store} from '../store.js';
import {connectTwitter,removeTwitter} from "../api/handleTwitterAuth.js";
import fetchSocialAccounts from "../api/fetchUserSocialAccounts.js";

export default function UserTwitterAccountReducer(twitter={},action) {

  if (action.type === "CONNECT_TWITTER") {
     connectTwitter(store,action);
  }

  if (action.type === "REMOVE_TWITTER") {
    removeTwitter(store,action);
 }

  if (action.type === "TWITTER_STATUS") {
      fetchSocialAccounts(store,action)
      return action.data;
  }


  return twitter;
}