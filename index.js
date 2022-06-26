const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function login() {
    document.getElementById('login').style.display = "none";
    document.getElementById('signup').style.display = "block";
}

function signup() {
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "block";
}


signup();


var emailArray = [];
var passwordArray = [];
var usernameArray = [];



function register() {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cpassword").value;
    var emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

      
    if (username == "") {
        alert("Name required.");
        return;
    }
    
    else if (email == "") {
        alert("Email required.");
        return;
    }
    

    
    else if (password == "") {
        alert("Password required.");
        return;
    }
   
    else if (confirmPassword == "") {
        alert("Confirm Password required.");
        return;
    }
    // // compares if confirm password matches password 
    else if (password != confirmPassword) {
        alert("Password don't match retype your Password.");
        return;
    }


    
    else if (emailArray.indexOf(email) == -1) {
        usernameArray.push(username);
        emailArray.push(email);
        passwordArray.push(password);

        alert("Signup succesful. \nLogin Now");
        //open login form
        signup();

        
        document.getElementById('username').value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpassword").value = "";
    }
    //if email is used
    else {
        alert(email + "it is already registered to an account");
        return;
    }
}

//log in submit button function

function signin() {
    event.preventDefault();
    //get input fields values from the form
    var email = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
    
    var i = emailArray.indexOf(email);

    

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";
        return;
    }
    
    else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";;
        return;
    }
    //veri true
    else {
        alert(email + " Login Successful.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";
        
        window.location.href="./index.html.html";
        return;
    }

}