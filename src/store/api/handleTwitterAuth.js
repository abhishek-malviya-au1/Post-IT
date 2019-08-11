import config from "../../config.js";
const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


function connectTwitter(store,action) {
let social = JSON.parse(localStorage.getItem("social"));
    
    let owner = action.data.objectId;

    let url = `${config.url}/parse/classes/SocialAccounts/${social.objectId}`;
    
    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            isTwitterConnected:true,
            twitterData:Object.assign({},action.data.twitterData)
        })
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"TWITTER_STATUS",
            data:result
        })
    })
    .catch(err => console.log(err));
}

function removeTwitter(store,action) {
    
    let user = JSON.parse(localStorage.getItem("social"));
    let owner = user.objectId;
    let url = `${config.url}/parse/classes/SocialAccounts/${owner}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            isTwitterConnected:false,
            twitterData:{}
        })
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"TWITTER_STATUS",
            data:result
        })
    })
    .catch(err => console.log(err));
}

export {connectTwitter,removeTwitter};