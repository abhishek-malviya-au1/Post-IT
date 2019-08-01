import {store} from '../store.js';
import {removeTweet, sendTweet} from '../api/handleTwitterPosting.js';
import {twitterPostUpdateId,twitterPostDeleteId} from '../api/handleTwitterPostsUpdate';


export default function TwitterPostsReducer(twitterPosts={},action){
    if(action.type==="POST_TO_TWITTER"){
       sendTweet(store,action);
    }
    if(action.type==="POSTED_TO_TWITTER"){
        twitterPosts=action.data;
        return twitterPosts;
    }
    if(action.type==='UPDATE_TWITTER_ID'){
        twitterPostUpdateId(store,action);
    }
    
    if(action.type==='DELETE_FROM_TWITTER'){
        removeTweet(store,action);
    }
    if(action.type==='TWEET_DELETED'){
        twitterPostDeleteId(store,action);
    }
    if(action.type==='CLEAR_TWITTER_POSTS'){
        twitterPosts={};
    }

    return twitterPosts;
}

