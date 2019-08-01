import React from 'react';
import { store, stateMapper} from "../store/store.js";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


class CreatePostComponent extends React.Component{
   constructor(props){
       super(props);
       this.state={
           isPostCreated : false
       }
       this.createPostAction=this.createPostAction.bind(this);
       this.doRedirect=this.doRedirect.bind(this);
   } 
  
   
    createPostAction(){ 
        store.dispatch({
            type : 'CREATE_POST',
            data : this.props.CurrentState
        });
        this.setState({isPostCreated:true});
    }
    doRedirect = () =>{
        if(this.state.isPostCreated){
            return <Redirect to='/dashboard/viewposts'/>
            
        } 
      } 
    render(){
       
        return(
            <div className='col-md-9 hcreatepost'>
                <p>Hey <strong>{this.props.useraccount.name}</strong></p>
                
               <textarea className='form-control'
                        rows='7'
                        onChange={this.props.changeCaption}
                        placeholder="What's on your mind today?">
                </textarea>
                <br></br>
               <button className='btn btn-primary' onClick={this.createPostAction}>Create Post</button>
               {this.doRedirect()}
            </div>           
        )
    }
}

let CreatePost=connect(stateMapper)(CreatePostComponent);
export default CreatePost;