import {store} from '../store.js';
import createNewPost from "../api/createNewPost.js";
import createPostsSchema from '../api/createPostsSchema.js';
import fetchPosts from '../api/fetchPosts';
import deletePost from '../api/deletePost.js';
import fetchOnePost from '../api/fetchOnePost.js';


export default function PostsReducer(posts=[],action) {

    if(action.type==='CREATE_POST'){
        createPostsSchema(store,action);
    }
    if(action.type==='FETCH_POSTS'){
       fetchPosts(store,action);
    }
    if(action.type==='CLEAR_POSTS'){
        posts=[];
        return posts;
    }
    if (action.type === "POSTS_FETCHED") {
       posts=action.data.results;
    }
    if (action.type === "DELETE_POST") {
        deletePost(store,action);
     }
    return posts;
}