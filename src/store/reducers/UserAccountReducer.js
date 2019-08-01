import {store} from '../store.js';
import signupUser from "../api/signupUser.js";
import loginUser from "../api/loginUser.js";
import createSchema from "../api/createSocialAccountsSchema.js"


export default function UserAccountReducer(account={},action) {

  if (action.type === "SIGNUP_USER") {
     signupUser(store,action);
  }

  if (action.type === "SIGNUP_STATUS") { 
      if(action.data.error){
        action.data.error="Account already exists for this email";
      }
      if(!action.data.error) {
        createSchema(store,action);
      }
      return action.data;
  }

  if (action.type === "LOGIN_USER") {
    loginUser(store,action);
  }

  if (action.type === "LOGIN_STATUS") {
    if(!action.data.error) {
      localStorage.setItem("user", JSON.stringify({owner:action.data.objectId}));
    }
    return action.data;
  }

  if(action.type==='LOGOUT'){
    localStorage.removeItem('user');
    localStorage.removeItem('social');
  }



  return account;
}