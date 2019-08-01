import React from "react";
import TwitterLogin from "react-twitter-auth";
import { connect } from "react-redux";
import { store, stateMapper } from "../store/store.js";
import{Link} from 'react-router-dom'

let social = JSON.parse(localStorage.getItem("social"));

class TwitterAuthComponent extends React.Component {
  componentDidMount() {
    store.dispatch({
      type: "FETCH_ACCOUNTS"
    });
  }

  callback(data) {
    let initialState = Object.assign({}, this.props.usersocialaccounts);
    data.json().then(d => {
      initialState.isTwitterConnected = true;
      initialState.twitterData = d;
      store.dispatch({
        type: "CONNECT_TWITTER",
        data: initialState
      });
    });
  }

  handleUnlink() {
    store.dispatch({
      type: "REMOVE_TWITTER",
      objectId: social.objectId
    });
  }

  renderTwitterInfo() {
    if (!this.props.usersocialaccounts.isTwitterConnected) {
      return (
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Connect Your Twitter Account</h5>
              <p className="card-text">
               <TwitterLogin
                        loginUrl="http://localhost:4444/auth/twitter/login"
                        requestTokenUrl="http://localhost:4444/auth/twitter/request"
                        onFailure={this.callback}
                        onSuccess={this.callback}  
                      /> 
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Twitter Connected</h5>
              <button onClick={this.handleUnlink} className="btn btn-primary">
                Remove Twitter
              </button>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
    <div>
      {this.renderTwitterInfo()}
      <Link to='/dashboard'>Go back</Link>
    </div>
    )
  }
}

let TwitterAuth = connect(stateMapper)(TwitterAuthComponent);

export default TwitterAuth;
