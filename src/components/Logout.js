import React from "react";
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';



class LogoutComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
    }
    logout(){
        store.dispatch({
            type : 'LOGOUT'
        })
        return <Redirect to='/'/>
    }
    
    render(){
       return   (
           <div>
               { this.logout()}
           </div>
       )
    }
    
}

let Logout=connect(stateMapper)(LogoutComponent);

export default Logout;