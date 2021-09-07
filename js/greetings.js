const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutBTN = document.querySelector(".logout-btn");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // Storage 저장
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 저장 값 saved~에 넣기

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)

} else{
    paintGreetings(savedUsername);
}

//////////////////////////////////////////////////////////////////
logoutBTN.addEventListener("click", logout)
function logout(){
    localStorage.removeItem(USERNAME_KEY);
    location.reload(true);
}