// NAV BURGER MENU
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DESKTOP NAV
document.addEventListener("DOMContentLoaded", headerHidden);

function headerHidden() {
    document.querySelector("#header").style.visibility = "hidden";
}

window.onscroll = function () {
    headerScrollDown()
};

function headerScrollDown() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector("#header").style.visibility = "visible";
        document.querySelector("#splash_logo").style.visibility = "hidden";
        document.getElementById("header").className = "w3-animate-top";
    } else {
        document.querySelector("#header").style.visibility = "hidden";
        document.querySelector("#splash_logo").style.visibility = "visible";

    }
}



//// Get the modal
//var modal = document.getElementById('myModal');
//
//// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById('myImg');
//
//var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
//img.onclick = function () {
//    modal.style.display = "block";
//    modalImg.src = this.src;
//    captionText.innerHTML = this.alt;
//}
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function () {
//    modal.style.display = "none";
//}
