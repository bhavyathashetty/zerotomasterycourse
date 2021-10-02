// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

const user = {
    username: "John",
    password: "1235"
};
// 2. Create an array which contains the object you have made above and name the array "database".
const database = [{
    username: "John",
    password: "1235"
},
{
    username: "Johny",
    password: "1111"
}]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
const newsfeed = [
    {
        username: "Bhavya",
        timeline: " Amazing"
    },
    {
        username: "andy",
        timeline: "Javascript is coool"
    },
    {
        username: "jess",
        timeline: "Goodnight!!"
    },
]

const userNameprompt = prompt("whats your username?");
const passwordprompt = prompt("whats your Password?");

function userValid(username, password) {
    for (var i = 0; i < database.length; i++) {

        if (username === database[i].username && password === database[i].password) {
            return true
        }
        else {
            return false
        }
    }

}
function signIn(username, password) {
    if (userValid(username,password)) {
        console.log(newsfeed)
    }
    else {
        alert("Invalid username or password!try again....")
    }
}
signIn(userNameprompt,passwordprompt)