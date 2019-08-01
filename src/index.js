import React from "react";
import ReactDOM from "react-dom";
import {Route , Link ,BrowserRouter as Router} from 'react-router-dom';
import Login from "./components/Login.js";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {ManageAccounts} from "./components/Manage-Accounts.js";
import TwitterAuth from "./components/TwitterAuth.js";
import SignUp from "./components/Sign-Up.js";
import LandingPage from './components/LandingPage.js';
import Dashboard from './components/Dashboard.js'
import CreatePost from './components/CreatePost';
import ViewPosts from './components/ViewPosts.js';
import Logout from './components/Logout.js'



class Home extends React.Component {

  render() {
    return (
      <Provider store={store}>
         <Router>
          <Route exact path='/' component={LandingPage}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login'  component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/twitterauth' component={TwitterAuth}/>
            <Route path='/logout' component={Logout}/>
          </Router>
      </Provider>
     
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
