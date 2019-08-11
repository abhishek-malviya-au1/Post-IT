import config from "../../config.js";
const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

export default function deletePost(store,action) {
    let url = `${config.url}/parse/classes/UserPosts/${action.data}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
    .then(data => data.json())
    .catch(err => console.log(err));
}
