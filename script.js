function validateForm() {
    let x = document.forms["form1"]["name"].value;
    if (x == "") {
        alert("Please fill the information")    
        return false;
    }
    else {
        alert("message send")
        return true;
    }
}

/*window.onscroll = function() {scrollfunction()};

function scrollfunction() {
    if(document.documentElement.scrollTop > 200) {
        document.getElementById("boxAnimated").className = "slide-animation";
    } else {
        document.getElementById("boxAnimated").className = "";
    }
}*/

// const menuToggle = document.querySelector(".menu-toggle input");
// const nav = document.querySelector("nav ul");

// menuToggle.addEventListener('click', function() {
//     nav.classList.toggle("slide");
// })

