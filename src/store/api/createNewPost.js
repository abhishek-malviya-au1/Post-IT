const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

export default function createNewPost(store,action) {

    let url = "http://localhost:1337/parse/UserPosts";
    

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