const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

export default function deletePost(store,action) {
    let url = `http://localhost:1337/parse/classes/UserPosts/${action.data}`;

    fetch(url, {
        method: "delete",
        headers: HEADERS
    })
    .then(data => data.json())
    .catch(err => console.log(err));
}
