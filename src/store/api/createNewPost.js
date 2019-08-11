import config from "../../config.js";
const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

let user = JSON.parse(localStorage.getItem("user"));

export default function createNewPost(store,action) {

    let url = `${config.url}/parse/UserPosts`;

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            owner: action.data.owner,
            postedOnFacebook:false,
            postedOnInstagram:false,
            postedOnTwitter:false,
            postIdFacebook:'',
            postIdTwitter: '',
            postIdInstagram:'',
            caption : action.data.caption  
        })
    })
    .then(data => data.json())
    .then(result => {
       store.dispatch({
        type:"POST_CREATED",
        data:result
       })
    })
    .catch(err => console.log(err));

}