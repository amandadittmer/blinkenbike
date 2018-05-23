$(window).on("load", start);

function start() {
    console.log("start");

    $("#bikep").hide();
    $("#blinkenbike").hide();

    document.querySelector("#motorp").style.visibility = "hidden";






    //    $("#background_sound")[0].play();

    //    $("#hand_container").on("animationend", handOneIn);
    setTimeout(textIn, 1000);


    window.onscroll = function () {
        console.log(document.documentElement.scrollTop);

        if (document.querySelector("body").scrollTop > 250 || document.documentElement.scrollTop > 250) {
            console.log("sadel kommer ind");
            document.getElementById("myMotor").className = "slideUp";
            document.getElementById("motorp").className = "slideUp";
            document.querySelector("#motorp").style.visibility = "visible";
        }


        if (document.querySelector("body").scrollTop > 500 || document.documentElement.scrollTop > 500) {
            console.log("sadel start");
            document.getElementById("myLygte").className = "lygteUp";
            document.getElementById("lygtep").className = "lygteUp";
            document.querySelector("#lygtep").style.visibility = "visible";
        }
    }
}

function textIn() {
    console.log("tekst kommer ind");
    $("#blinkenbike").addClass("bike_in");
    $("#blinkenbike").fadeIn();
    $("#blinkenbike").fadeIn("slow");
    $("#blinkenbike").fadeIn(4000);
    $("#biketext").addClass("btext_in");
    $("#biketext").fadeIn();
    $("#biketext").fadeIn("slow");
    $("#biketext").fadeIn(4000);

    $("#bikep").addClass("");
    $("#bikep").fadeIn();
    $("#bikep").fadeIn("slow");
    $("#bikep").fadeIn(4000);

    setTimeout(myFunction, 1000);
}







function myFunctionLygte() {}





// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}
