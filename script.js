var question = document.getElementById("question");
var buttonValider = document.getElementById("valider");
var rep = document.getElementById("rept");
var vrai = document.getElementById("vrai")
var faux = document.getElementById("faux")
var nbrVrai = 0
var nbrFaux = 0
const start = () => {
  setTimeout(function() {
      confetti.start()
  });
};

//  Stop

const stop = () => {
  setTimeout(function() {
      confetti.stop()
  },15*1000);
};

var quetRep = [{
    quet: "quelle la colour du solier ??",
    repense: "jaune"
  },
  {
    quet: "quelle la colour du ciel ??",
    repense: "blue"
  },
  {
    quet: "quelle la colour du chocola ??",
    repense: "brown"
  },
  {
    quet: "quelle la colour du l'eau ??",
    repense: "pas du colour"
  }
];
var n = 0;
question.textContent = quetRep[n].quet;

function quetionsuivant() {
  if (n < (quetRep.length - 1)) {
    n += 1;
  }
  else{
    setTimeout(function() {rep.value =  ("Vous avez gagné ");},2000);
    quetRep[n].quet = ""
    start();    
    
  }
  question.textContent = quetRep[n].quet;
}

buttonValider.onclick = function() {
  if (rep.value.toLowerCase() == quetRep[n].repense) {
    rep.value = "✅";
    nbrVrai++
    vrai.textContent = nbrVrai
    quetionsuivant()
    setTimeout(function() {
      rep.value = "";
    }, 500);

  } else {
    rep.value = "❌";
    nbrFaux++
    faux.textContent = nbrFaux
    setTimeout(function() {
      rep.value = "";
    }, 800);
  }

}
rep.addEventListener('keydown', function(e) {
  if(e.key == "Enter"){
    buttonValider.onclick()
  }
});
