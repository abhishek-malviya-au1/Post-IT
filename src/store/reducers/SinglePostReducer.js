import {store} from '../store.js';
import fetchOnePost from '../api/fetchOnePost.js';


export default function SinglePostReducer(singlePost={},action){

if (action.type === "FETCH_ONE_POST") {
    fetchOnePost(store,action);
 }
 if(action.type==='CLEAR_ONE_POST'){
   singlePost=[];
   return singlePost;
 }
 if (action.type === "ONE_POST_FETCHED") {
   singlePost=action.data.results[0]
   console.log(singlePost);
 }
return singlePost;

}