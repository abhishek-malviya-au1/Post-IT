const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


export default function createSchema(store,action) {
    let url = "http://localhost:1337/parse/classes/SocialAccounts";

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            owner: action.data.objectId,
            isFacebookConnected:false,
            isTwitterConnected:false,
            isInstagramConnected:false,
            twitterData:{},
            instagramData:{},
            facebookData:{}
        })
    })
    .then(data => data.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
}