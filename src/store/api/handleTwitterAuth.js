const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


function connectTwitter(store,action) {
    
    let owner = action.data.objectId;
    console.log(owner)
    let url = `http://localhost:1337/parse/classes/SocialAccounts/${owner}`;
    
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
    
    let owner = action.objectId;
    let url = `http://localhost:1337/parse/classes/SocialAccounts/${owner}`;

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