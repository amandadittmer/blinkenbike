// DESKTOP NAV
document.addEventListener("DOMContentLoaded", headerHidden);

function headerHidden() {
    document.querySelector("#header").style.visibility = "hidden"
};

window.onscroll = function () {
    headerScrollDown()
};

function headerScrollDown() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector("#dekstop_nav").style.visibility = "visible";
        document.querySelector("#splash_logo").style.visibility = "hidden";
        document.getElementById("dekstop_nav").className = "w3-animate-top";
    } else {
        document.querySelector("#dekstop_nav").style.visibility = "hidden";
        document.querySelector("#splash_logo").style.visibility = "visible";

    }
}
