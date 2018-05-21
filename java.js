$(window).on("load", startAnim);

function startAnim() {
    console.log("hjul kommer ind");
    $("#bikep").hide();
    document.querySelector("#motorp").style.visibility = "hidden";
    $("#blinkenbike").addClass("bike_in");


    $("#blinkenbike").fadeIn();
    $("#blinkenbike").fadeIn("slow");
    $("#blinkenbike").fadeIn(7000);

    //    $("#background_sound")[0].play();

    //    $("#hand_container").on("animationend", handOneIn);
    setTimeout(textIn, 2000);
}

function textIn() {
    console.log("tekst kommer ind");
    $("#biketext").addClass("btext_in");
    $("#biketext").fadeIn();
    $("#biketext").fadeIn("slow");
    $("#biketext").fadeIn(7000);

    $("#bikep").addClass("");
    $("#bikep").fadeIn();
    $("#bikep").fadeIn("slow");
    $("#bikep").fadeIn(7000);

    setTimeout(myFunction, 1000);
}

window.onscroll = function () {

    myFunction()
};

function myFunction() {

    console.log("motor kommer ind");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myImg").className = "slideUp";
        document.getElementById("motorp").className = "slideUp";
        document.querySelector("#motorp").style.visibility = "visible";

    }
}


window.onscroll = function () {

    myFunctionLygte()
};

function myFunctionLygte() {

    console.log("sadel kommer ind");

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myLygte").className = "lygteUp";
        document.getElementById("lygtep").className = "lygteUp";
        document.querySelector("#lygtep").style.visibility = "visible";
    }
}
