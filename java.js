$(window).on("load", startAnim);

function startAnim() {
    $("#blinkenbike").addClass("bike_in");



    //    $("#background_sound")[0].play();

//    $("#hand_container").on("animationend", handOneIn);
    setTimeout(textIn, 2000);
}

function textIn() {

    $("#biketext").addClass("btext_in");
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
