console.log("Tamagotchi werkt!");

//array//
let plaatjes = [
  "images/fase2ei.png",
  "images/fase3ei.png",
  "images/fase4ei.png"
];

//elementen ophalen uit html//
let ei = document.getElementById("tamagotchi");
let muziek = document.getElementById("achtergrondmuziek");
let confettiKnop = document.getElementById("confetti-knop");

let knopPeper = document.getElementById("knop-peper");
let knopPeer = document.getElementById("knop-peer");
let knopAardappel = document.getElementById("knop-aardappel");
let knopVis = document.getElementById("knop-vis");


 //teller en boolean//
let stap = 0;
let muziekGestart = false;

document.body.addEventListener("click", function () {
  if (!muziekGestart && muziek) {
    muziek.play();
    muziekGestart = true;
  }
});

//Dlo en W3schools.//
function groei() {
  if (stap < plaatjes.length) {
    ei.src = plaatjes[stap];
    stap++;
  } else {
    ei.src = "images/fase1draak.png";
    ei.classList.add("vuurdraak");
  }
}


//Geordend met behulp van chatgpt + zweefeffect van chatgpt. Promt: voeg een
//zwevend effect aan de draakjes toe.// //Functie voor voeden van draak//
function geefEten(eten) {
  if (stap < plaatjes.length) {
    groei();
  } else {
    ei.classList.remove("zwevend");

    if (eten === "peper") {
      ei.src = "images/draakjevuur.png";
      ei.classList.add("vuurdraak", "zwevend");
    }

    if (eten === "peer") {
      ei.src = "images/draakjewind.png";
      ei.classList.add("zwevend");
      ei.classList.remove("vuurdraak");
    }

    if (eten === "aardappel") {
      ei.src = "images/draakjeaarde.png";
      ei.classList.add("zwevend");
      ei.classList.remove("vuurdraak");
    }

    if (eten === "vis") {
      ei.src = "images/draakjewater.png";
      ei.classList.add("zwevend");
      ei.classList.remove("vuurdraak");
    }
  }
}

//met behulp van chatgpt. Prompt: voeg een confetti button toe.// 
confettiKnop.addEventListener("click", function () {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 }
  });
});


//roept juiste soort eten aan//
knopPeper.addEventListener("click", function () {
  geefEten("peper");
});

knopPeer.addEventListener("click", function () {
  geefEten("peer");
});

knopAardappel.addEventListener("click", function () {
  geefEten("aardappel");
});

knopVis.addEventListener("click", function () {
  geefEten("vis");
});
