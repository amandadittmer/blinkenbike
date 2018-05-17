$(window).on("load", startAnim);

function startAnim() {
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


    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("myImg").className = "slideUp";
        document.getElementById("motorp").className = "slideUp";
        document.querySelector("#motorp").style.visibility = "visible";
    }
}



//function laptopIpadIn() {
//    console.log("laptop kommer ind");
//
//    $("#vidersend").removeClass("v_knap");
//    $("#finger_klik").removeClass("f_klik");
//
//    $("#comp").addClass("desktop");
//    $("#ipad").addClass("ipad_in");
//    $("#ipad").addClass("ipad_in");
//    $("#ipad_s").addClass("ipad_in_sort");
//
//    $("#button_sound")[0].play();
//
//    setTimeout(billedeIn, 4000);
//}
