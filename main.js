/* DOM */
const welcome = document.getElementById("welcome");
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const link = document.getElementById("loglink");

const wlc = document.querySelector(".wlcbtn");
const sign = document.querySelector(".signbtn");
const log = document.querySelector(".logbtn");

const theme = document.querySelector(".theme");

/* Functions for main buttons */
wlc.addEventListener("click", function(){
    welcome.style.display ="none";
    signup.style.display = "block";
});

link.addEventListener("click", function(){
    login.style.display = "block";
    welcome.style.display ="none";
});

sign.addEventListener("click", function(){
    signup.style.display = "none";
    welcome.style.display = "block";
});

log.addEventListener("click", function(){
    login.style.display = "none";
    welcome.style.display = "block";
});


/* Functions for theme change */
function redbutton(){
    welcome.setAttribute("id", "welcome");
    signup.setAttribute("id", "signup");
    login.setAttribute("id", "login");  
    btn.setAttribute("tag", "button:hover");
    link.setAttribute("id", "loglink");
    
};

function greenbutton(){
    welcome.setAttribute("id", "welcomegreen");
    signup.setAttribute("id", "signupgreen");
    login.setAttribute("id", "logingreen");
};

function bluebutton(){
    welcome.setAttribute("id", "welcomeblue");
    signup.setAttribute("id", "signupblue");
    login.setAttribute("id", "loginblue");
};



