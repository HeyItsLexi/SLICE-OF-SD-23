
function doThis(id) {
    var x = document.getElementById("hey");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function transition(button, section) {
    button.addEventListener("click", transition);
      var q = document.getElementById("overlay");
      document.body.style.overflowY = "hidden";
      q.addEventListener("animationend",  () => switchSection(section))
      q.classList.remove('fadeOut');
        void q.offsetWidth
      q.classList.add('fadeIn');
      
}

function switchSection(section) {
  console.log("ANIMATION END");
    //REPLACING THE ACTIVE SECTION WITH THE SECTION THE BUTTON RETURNED
    var previous = document.getElementsByClassName("active")[0];
    var sect = document.getElementById(section);
    var q = document.getElementById("overlay");
    previous.classList.remove("active");
    sect.classList.add("active");
    //Triggering FADE OUT
    q.classList.remove('fadeIn')
    q.classList.add('fadeOut')
    document.body.style.overflowY = "auto";
}

function slideTo(button, user) {
    var a = document.getElementById(button);
  
    if (a.innerHTML == "&gt;") {
      console.log("INFOGRAPHIC");

      //HIDING PREVIOUS
      var prev = document.getElementById(user + "-commercial")
      prev.style.display = "none";

      //SHOWING NEW
      var sect = document.getElementById(user + "-infographic")
      sect.style.display = "block";

      a.innerHTML = "<";
      var l = document.getElementById(user + "-label");
      l.src = "art/labels/infographic-" + user + ".png";

    } else {
      console.log("COMMERCIAL");

      //HIDING PREVIOUS
      var prev = document.getElementById(user + "-infographic")
      prev.style.display = "none";

      //SHOWING NEW
      var sect = document.getElementById(user + "-commercial")
      sect.style.display = "block";
      
      a.innerHTML = ">";
      let l = document.getElementById(user + "-label");
      l.src = "art/labels/commercial-" + user + ".png";


    }
}


/*window.addEventListener("scroll", () => {
      const a = document.getElementById("full-body");
      const i = window.innerHeight;
      if (scrollY / 500 > 0.5 && scrollY / 500 < 4 ) {
        a.style.scale = scrollY / 500;
        console.log(scrollY / 500 )
      }
     

})*/

/*window.addEventListener('scroll', function() {
  const demoDiv = document.querySelector("#full-body");
  if (this.scrollY*0.0001 > 1 || this.scrollY**0.0001 < 0.2) { return; }
  else { demoDiv.setAttribute('style', 'transform: scale('+this.scrollY**0.0001+');'); }
});*/