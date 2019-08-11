import React from 'react';
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import TwitterLogin from "react-twitter-auth";
import config from "../config.js";
import {HashLoader} from 'react-spinners';
import { css } from '@emotion/core';
let social = JSON.parse(localStorage.getItem("social"));

const override = css`
display: block;
margin:0 auto;
border-color: red;
`;

class SideBarComponent extends React.Component{
    state={loading:true};
    componentDidMount() {
        store.dispatch({
          type: "FETCH_ACCOUNTS"
        });

       setTimeout(()=> this.setState({loading:false}),2000) ;
      }
      handleUnlink = () => {
        store.dispatch({
          type: "REMOVE_TWITTER"
        });
        this.setState({loading:true})
        setTimeout(()=> this.setState({loading:false}),2500) ;
      }
      constructor(props){
        super(props);
       
        this.twitterLoginComponent=this.twitterLoginComponent.bind(this);
      }
    
      callback = (data) => {
        let initialState=Object.assign({}, social);
        data.json().then(d => {
          initialState.isTwitterConnected = true;
          initialState.twitterData = d;
          store.dispatch({
            type: "CONNECT_TWITTER",
            data: initialState
          });
        });
        this.setState({loading:true})
        setTimeout(()=> this.setState({loading:false}),2500) ;
      }
      twitterLoginComponent(){
       return (<TwitterLogin className='btn btn-primary btn-lg'
        loginUrl={config.loginUrl}
        requestTokenUrl={config.tokenUrl}
        onFailure={this.callback}
        onSuccess={this.callback}  
      />)
      }
    render(){
      if(this.state.loading) {
        return (
          <div className="col-md-3 hsidebar">
           <HashLoader
           css={override}
           sizeUnit={"px"}
           size={170}
           color={'#123abc'}
           loading={this.state.loading}
         />
         <h6 style={{marginLeft:60,marginTop:25 }}>Loading Connected Accounts</h6>
         </div>)
       } else {
        return(
            <div className='animated slideInLeft landing col-md-3 hsidebar'>
                <div className='row' style={{paddingBottom : 6}}>
                   <button className='btn btn-primary btn-lg'> Connect Facebook</button>
                </div>
                <div className='row' style={{paddingBottom : 6}}>
                <button className='btn btn-primary btn-lg'>Connect Instagram</button>
                </div>
                <div className='row' style={{paddingBottom : 50}}>
                    {(this.props.usersocialaccounts&& !this.props.usersocialaccounts.isTwitterConnected)?
                        this.twitterLoginComponent()
                    :<button className='hbtnfb btn  btn-primary btn-lg' onClick={this.handleUnlink}><i><ion-icon name="logo-twitter"></ion-icon></i>{this.props.usersocialaccounts.twitterData.screen_name}</button>}
                   
                </div>
            </div>
        );
         }
    }
}

let SideBar=connect(stateMapper)(SideBarComponent);

export default SideBar;