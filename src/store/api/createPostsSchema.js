const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


export default function createPostsSchema(store,action) {
    let url = "http://localhost:1337/parse/classes/UserPosts";

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            owner: action.data.userObjectId,
            postedOnFacebook:false,
            postedOnInstagram:false,
            postedOnTwitter:false,
            postIdFacebook:'',
            postIdTwitter: '',
            postIdInstagram:'',
            Caption : action.data.caption
        })
    })
    .then(data => data.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
}