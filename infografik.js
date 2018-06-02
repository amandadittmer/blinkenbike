  document.addEventListener("DOMContentLoaded", runProgram);

  let selected;
  let selectedID;
  let color;
  let active;
  let infotekst;
  let sadel_tekst;
  let stel_tekst;
  let skrue_tekst;
  let hjul_tekst;
  let bg;


  async function runProgram() {

      let mySvg = await fetch("infografik/infografikcykel.svg");
      let svg = await mySvg.text();

      document.querySelector("#map").innerHTML = svg;


      sadel_tekst = document.querySelector("#map #sadel_tekst");
      stel_tekst = document.querySelector("#map #stel_tekst");
      skrue_tekst = document.querySelector("#map #skrue_tekst");
      hjul_tekst = document.querySelector("#map #hjul_tekst");
      bg = document.querySelector("#map #baggrund");


      sadel_tekst.style.visibility = "hidden";
      stel_tekst.style.visibility = "hidden";
      skrue_tekst.style.visibility = "hidden";
      hjul_tekst.style.visibility = "hidden";

      //3. skift farve ved klik, og vis tekst //
      document.querySelector("#map #prikker").addEventListener("mouseover", function (e) {
          over(e);
      });
      document.querySelector("#map #prikker").addEventListener("mouseout", function (e) {
          out(e);
      });
  }
  //funktion clicked
  function over(e) {
      bg.style.opacity = "1";
      console.log(over);
      if (infotekst != undefined) {
          infotekst.style.visibility = "hidden";
      }

      //find det klikkede element
      selected = e.target;

      //find det klikkede elementets ID
      selectedID = selected.getAttribute("id");

      //find det klikkede elements fillfarve
      color = selected.getAttribute("fill");

      // vis infobokse
      if (selectedID === "prik_1") {
          hjul_tekst.style.visibility = "visible";
          infotekst = hjul_tekst;
          document.getElementById("cykel").style.opacity = "0.3";
          document.getElementById("stel").style.opacity = "0.3";
          document.getElementById("sadel").style.opacity = "0.3";
          document.getElementById("skrue").style.opacity = "0.3";
      }

      if (selectedID === "prik_2") {
          stel_tekst.style.visibility = "visible";
          infotekst = stel_tekst;
          document.getElementById("cykel").style.opacity = "0.3";
          document.getElementById("hjul").style.opacity = "0.3";
          document.getElementById("sadel").style.opacity = "0.3";
          document.getElementById("skrue").style.opacity = "0.3";
      }
      if (selectedID === "prik_3") {
          sadel_tekst.style.visibility = "visible";
          infotekst = sadel_tekst;
          document.getElementById("cykel").style.opacity = "0.3";
          document.getElementById("hjul").style.opacity = "0.3";
          document.getElementById("skrue").style.opacity = "0.3";
          document.getElementById("stel").style.opacity = "0.3";
      }
      if (selectedID === "prik_4") {
          skrue_tekst.style.visibility = "visible";
          infotekst = skrue_tekst;
          document.getElementById("cykel").style.opacity = "0.3";
          document.getElementById("hjul").style.opacity = "0.3";
          document.getElementById("sadel").style.opacity = "0.3";
          document.getElementById("stel").style.opacity = "0.3";
      }
  }

  function out(e) {
      bg.style.opacity = "1";
      if (infotekst != undefined) {
          infotekst.style.visibility = "hidden";
      }
      document.getElementById("cykel").style.opacity = "1";
      document.getElementById("hjul").style.opacity = "1";
      document.getElementById("sadel").style.opacity = "1";
      document.getElementById("stel").style.opacity = "1";
      document.getElementById("skrue").style.opacity = "1";

      console.log(out);
  }
