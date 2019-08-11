import config from "../../config.js";
const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

export default function loginUser(store,action) {

    let username = action.data.email;
    let password = action.data.password;

    let params = encodeURI(`username=${username}&password=${password}`);
    let url = `${config.url}/parse/login?${params}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"LOGIN_STATUS",
            data:result
        })
    })
    .catch(err => console.log(err));

}