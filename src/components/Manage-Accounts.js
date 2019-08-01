import React from "react";
import {connect} from "react-redux";
import {store,stateMapper} from "../store/store.js";
import TwitterAuth from "./TwitterAuth.js";

class ManageAccountsComponent extends React.Component {

  render() {
    return (
      <div className="row">
        <TwitterAuth />
      </div>
    );
  }
}

let ManageAccounts  = connect(stateMapper)(ManageAccountsComponent);

export {ManageAccounts};