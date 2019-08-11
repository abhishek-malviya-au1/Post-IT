import config from "../../config.js";
const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


export default function fetchSocialAccounts(store,action) {

    let User = JSON.parse(localStorage.getItem("user"));

    let params = encodeURI(`where={"owner": "${User.owner}"}`);
    let url = `${config.url}/parse/classes/SocialAccounts?${params}`;

    fetch(url, {
        method: "get",
        headers: HEADERS
    })
    .then(data => data.json())
    .then(result => {
        store.dispatch({
            type:"ACCOUNTS_FETCHED",
            data:result
        })
    })
    .catch(err => console.log(err));
}