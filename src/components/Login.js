import React from "react";
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class LoginComponent extends React.Component {
  state = {
    formState: {
      isFormValid: true,
      isEmailValid: true,
      isPasswordValid: true
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validateInput() {
    let initialState = {
      isFormValid: true,
      isEmailValid: true,
      isPasswordValid: true
    };

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      initialState.isFormValid = false;
      initialState.isEmailValid = false;
    }

    if (!this.state.password) {
      initialState.isFormValid = false;
      initialState.isPasswordValid = false;
    }

    this.setState({
      formState: initialState
    });

    return initialState.isFormValid;
  }

  

  handleSubmit = e => {
    if (!this.validateInput()) {
      return;
    }

    store.dispatch({
      type:"LOGIN_USER",
      data:this.state
    }) 

  };
  
  doRedirect = () =>{
    if(localStorage.getItem('user')){
        return <Redirect to='/dashboard'/>
    }
    else{
        return <Redirect to='/login'/>
    }
  } 
  

  render() {
    return(
      <React.Fragment>
      <div className='landing'>
        <nav className='hnavbar'>
                <div className='hrow'>
                    <img src='./Logo.png.ico' alt='POST IT' className='hlogo'/>
                    <ul className="hmain-nav">
                      <li><Link className='hnav-ani' to='/'>Home</Link></li>
                      <li><Link className='hnav-ani' to='/'>About</Link></li>
                      <li><Link className='hbtn hbtn-full' to='/signup'>Signup</Link></li>
                    </ul>
                  </div>
         </nav>
        </div>
        
            
        <div className="row animated fadeInUp" style={{marginTop : 250}}>
          <div className="offset-md-4 col-md-4">
           
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {!this.state.formState.isFormValid && (
                  <div>
                    <h3>
                      <span className="badge badge-pill badge-danger">
                        Please Fill All The Input Boxes.
                      </span>
                    </h3>
                  </div>
                )}

                {this.props.useraccount.error && (
                      <div>
                        <h3>
                          <span className="badge badge-pill badge-danger">
                            {this.props.useraccount.error}
                          </span>
                        </h3>
                      </div>
                )}
                <label>Email</label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  className={`form-control ${!this.state.formState
                    .isEmailValid && "is-invalid"}`}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className={`form-control ${!this.state.formState
                    .isPasswordValid && "is-invalid"}`}
                  placeholder="Password"
                />
              </div>
              <button
                onClick={this.handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Login
              </button>
              {this.doRedirect()}
            </form>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

let Login = connect(stateMapper)(LoginComponent);
export default Login;
