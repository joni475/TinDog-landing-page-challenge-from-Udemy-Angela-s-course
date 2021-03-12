const hamburger = document.querySelector(".fas");
const ul = document.querySelector(".hamburger-ul");
const layover = document.querySelector(".nav-layover");
const hamburgerClose = document.querySelector(".fa-window-close");
hamburger.addEventListener("click",()=>{
 ul.classList.add("show");
 layover.style.display="block";
 hamburger.style.display = "none";
 hamburgerClose.style.display ="block";
});
hamburgerClose.addEventListener("click",()=>{
 ul.classList.remove("show");
 layover.style.display="none";
 hamburger.style.display="block";
 hamburgerClose.style.display="none";
});

// slides

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("slideDiv");
    if(n > x.length) {slideIndex = 1}
    if(n < 1){slideIndex = x.length};
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
     x[slideIndex-1].style.display = "block";
}

