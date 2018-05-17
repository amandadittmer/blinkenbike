$(window).on("load", startAnim);

function startAnim() {
    $("#bikep").hide();
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
