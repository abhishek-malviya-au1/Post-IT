import React from "react";
import { store, stateMapper} from "../store/store.js";
import { css } from '@emotion/core';
import {connect} from "react-redux";
import {PacmanLoader} from 'react-spinners';
import {Route , Link ,BrowserRouter as Router,Redirect} from 'react-router-dom';
var user;

const override = css`
display: block;
margin:25px 25px 25px 200px;
border-color: red;
`;


class ViewPostsComponent extends React.Component{
  state = {
    loading:true
  }

 
    componentDidMount() {
        user=localStorage.getItem('user');
        if(user){
          store.dispatch({
            type: "FETCH_POSTS"
          });
        }
        store.dispatch({
          type : 'CLEAR_ONE_POST'
        })
     
      setTimeout(()=> this.setState({loading:!this.state.loading}),3000)
       
      }
      renderPosts(){
         return this.props.Posts.map( p =>{
            let url=`/dashboard/managepost/${p.objectId}`
            return(
                <div className="animated slideInUp" key={p.objectId} style={{marginLeft:25, marginBottom : 20}}>
                   <div className="card" style={{width:220, padding: 15}}>
                        <div className="card-body">
                        <h5 className="card-title">{p.Caption}</h5>
                            {p.postedOnTwitter?<p className='card-text'>Posted On Twitter</p>:null}
                            <Link to={url} className="card-link">Open</Link>
                        </div>
                    </div>
                </div>
            )
         })
       
      }
    
    render(){
      if(this.state.loading) {
       return (
         <div className="col-md-9">
           <div className="row">
          <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={60}
          color={'#123abc'}
          loading={this.state.loading}
        />
        <h3 className="animated slideInRight" style={{marginLeft:230, marginTop:70}}>Loading Posts</h3>
        </div>
        </div>)
      } else if(!this.props.Posts.length){
        return <h3 style={{marginLeft:230, marginTop:70}}>Please Create Some Posts</h3>
      } else {
        return(
            <div className='col-md-9'>
              <div className='row'>
                {this.renderPosts()}
              </div>
              </div>
        )
      }
    }
}

let ViewPosts=connect(stateMapper)(ViewPostsComponent);

export default ViewPosts;