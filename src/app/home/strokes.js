
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

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttonSelected = this;
      infoId.innerHTML = this.innerHTML;
      infoId.style = "color: #2df5ff;";
      infoId.style = "zIndex: -100;";
    });
  }
  infoId.addEventListener("mouseenter", function () {
    let banniere = document.getElementById('banniere');
    let paragraphe = document.getElementById("paragraphe");
    if(infoId.innerHTML !== ""){
      banniere.style = "display: flex;"
      for (let i = 0; i < buttons.length; i++) {
        paragraphe.innerHTML = buttonSelected.dataset.title;
      }
      infoId.addEventListener("mouseleave", function () {
        if (bool){
          banniere.style = "display: none;"
        }
      })
    }
  })
}

