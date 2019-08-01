const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

export default function signupUser(store,action) {

    let url = "http://localhost:1337/parse/users";
    

    fetch(url, {
        method: "post",
        headers: HEADERS,
        body: JSON.stringify({
            username:action.data.email,
            name: action.data.name,
            email: action.data.email,
            password: action.data.password  
        })
    })
    .then(data => data.json())
    .then(result => {
       store.dispatch({
        type:"SIGNUP_STATUS",
        data:result
       })
    })
    .catch(err => console.log(err));

}