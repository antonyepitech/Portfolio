
let number = 100;

function initStrokes(count, container){
  let strokeSrc = container.children[0];
  strokeSrc.remove();

  for (let i = 0; i < count; i++){
    let strokeDiv = container.appendChild(strokeSrc.cloneNode(true));
    strokeDiv.style = "transform: rotate(" + (360/count * i) + "deg)";
  }
}

window.onload = function() {
  initStrokes(number, document.getElementById("bigStrokes"));
  initStrokes(number, document.getElementById("littleStrokes"));
  initStrokes(6, document.getElementById("littleLines"));

  let infoId = document.getElementById("infos");
  const buttons = document.getElementsByClassName("infos");
  let buttonSelected = null;
  let bool = true;

  let banniere = document.getElementById('banniere');

  let boxContact = document.getElementById('boxContact');
  let boxSkills = document.getElementById('boxSkills');
  let boxProject = document.getElementById('boxProject');
  let boxAbout = document.getElementById('boxAbout');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttonSelected = this;
      infoId.innerHTML = this.innerHTML;
      infoId.dataset.routeLink = this.dataset.title;
      infoId.style.color = "#2df5ff;";
      infoId.style.zIndex = "-100;";
    });
  }

  let box = document.querySelector(".box");

  function play() {
    box.className = "animBox";
  }
  function displayBox() {
    let paragraphe = document.getElementById("paragraphe");
    box.dataset.title = paragraphe.innerHTML;
    console.log(box.dataset.title, paragraphe, paragraphe.innerHTML);
    // if (paragraphe.innerHTML == "Projects") {
    //   boxProject.style.display = "flex";
    // } else if (paragraphe.innerHTML == "Skills") {
    //   boxSkills.style.display = "flex";
    // } else if (paragraphe.innerHTML == "Contact") {
    //   boxContact.style.display = "flex";
    // } else if (paragraphe.innerHTML == "About") {
    //   boxContact.style.display = "flex";
    // }
  }

  infoId.addEventListener("mouseenter", function () {

    let paragraphe = document.getElementById("paragraphe");

    if(infoId.innerHTML !== "" && infoId.innerHTML !== "Selected one subject") {
      banniere.style = "display: flex;"
      infoId.addEventListener("click", play);
      for (let i = 0; i < buttons.length; i++) {
        paragraphe.innerHTML = buttonSelected.dataset.title;
        displayBox();
      }
    }
  });
  infoId.addEventListener("mouseleave", function () {
    if (bool){
      banniere.style = "display: none;"
    }
  })


  let arrow = document.querySelectorAll('.fas');
  for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", function (){
      document.querySelector(".animBox").className = "backBox";
      console.log("toto");
    });
  }


  //PHONE//

  let skillButton = document.querySelector(".skill");
  let aboutMeButton = document.querySelector(".about");
  let projectButton = document.querySelector(".project");
  let contactMeButton = document.querySelector(".contactMe");


  let phonesBox = document.getElementById("phone");
  let skillsBox = document.getElementById("skillsBox");
  let boxAboute = document.getElementById("boxAboute");
  let projectBox = document.getElementById("boxProjects");
  let boxContacts = document.getElementById("boxContacts");



  skillButton.addEventListener("click", function(){
    boxAboute.style.display = "none";
    projectBox.style.display = "none";
    boxContacts.style.display = "none";
    skillsBox.style.display = "flex";
  })

  aboutMeButton.addEventListener("click", function(){
    skillsBox.style.display = "none";
    projectBox.style.display = "none";
    boxContacts.style.display = "none";
    boxAboute.style.display = "block";
  })

  projectButton.addEventListener("click", function(){
    skillsBox.style.display = "none";
    boxAboute.style.display = "none";
    boxContacts.style.display = "none";
    projectBox.style.display = "flex";
  })

  contactMeButton.addEventListener("click", function(){
    skillsBox.style.display = "none";
    boxAboute.style.display = "none";
    projectBox.style.display = "none";
    boxContacts.style.display = "flex";
  })

}

