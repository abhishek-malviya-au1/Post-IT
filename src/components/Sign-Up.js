import React from "react";
import {Link, Redirect} from 'react-router-dom';
import { store,stateMapper } from "../store/store.js";
import {connect} from "react-redux";
var signedUp;

class SignUpComponent extends React.Component {
    state = {
        formState: {
            isFormValid: true,
            isNameValid: true,
            isEmailValid: true,
            isPasswordValid:true
        }
    };


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    

    validateInput() {
        let initialState = {
            isFormValid: true,
            isNameValid: true,
            isEmailValid: true,
            isPasswordValid:true
        };

       

        if (!this.state.name) {
            initialState.isFormValid = false;
            initialState.isNameValid = false;
        }

        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!this.state.email || reg.test(this.state.email) === false)  {
            initialState.isFormValid = false;
            initialState.isEmailValid = false;
        }

        if (!this.state.password) {
            initialState.isFormValid = false;
            initialState.isPasswordValid = false;
        }

        this.setState({
            formState: initialState
        })

        return initialState.isFormValid;
    }
    doRedirect(){
        if(signedUp===true){
            return <Redirect to='/login'/>
        }
    }

    handleSubmit = e => {  
        if(!this.validateInput()) {return;}

        store.dispatch({
            type:"SIGNUP_USER",
            data:this.state
        })
       signedUp=true;
    }

    render() {
        return (
   
<React.Fragment>
        <div className='landing'>
            <nav className='hnavbar'>
                    <div class='hrow'>
                        <img src='./Logo.png.ico' alt='POST IT' class='hlogo'/>
                        <ul class="hmain-nav">
                        <li><Link className='hnav-ani' to='/'>Home</Link></li>
                        <li><Link className='hnav-ani' to='/'>About</Link></li>
                        <li><Link className='hbtn hbtn-full' to='/Login'>Login</Link></li>
                        </ul>
                    </div>
            </nav>
        </div>
        
      <div className="row animated fadeInUp" style={{marginTop : 250}}>
          <div className="offset-md-4 col-md-4">
            
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    {!this.state.formState.isFormValid &&
                            <div>
                                <h3>
                                    <span className="badge badge-pill badge-danger">
                                        Please Fill All The Input Boxes.
                                    </span>
                                </h3>
                            </div>}
                    {this.props.useraccount.error && (
                      <div>
                        <h3>
                          <span className="badge badge-pill badge-danger">
                            {this.props.useraccount.error}
                          </span>
                        </h3>
                      </div>
                )}
                        <label>Name</label>
                        <input onChange={this.handleChange}  name="name" type="text" className={`form-control ${!this.state.formState.isNameValid && "is-invalid"}`}  placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input onChange={this.handleChange}  name="email" type="email" className={`form-control ${!this.state.formState.isEmailValid && "is-invalid"}`}  placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.handleChange}  name="password" type="password" className={`form-control ${!this.state.formState.isPasswordValid && "is-invalid"}`}  placeholder="Password"/>
                    </div>
                    <button onClick={this.handleSubmit}  type="button" className="btn btn-primary">Sign-Up</button>
                </form>
          </div>
          { this.doRedirect()}
      </div>      
 </React.Fragment>          
        );
    }
}

let SignUp = connect(stateMapper)(SignUpComponent);

export default SignUp;