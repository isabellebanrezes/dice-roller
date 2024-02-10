// Game Dice_roller - Lancer de dés

// Etape n°1 - Création d'un dé

// Création d'une nouvelle "div" - on va ajouter un élément html via du code en java script - via la DOM !
//const newDiv = document.createElement("div");
//console.log(newDiv);

// Ajout d'un classe à notre nouvelle "div"
//newDiv.classList.add("dice");

// Insérer le nouvelle "div" dans le DOM (avec la méthode "appendChild()" qui ajoute des éléments dans le DOM après le dernier enfant) dans la "div" ayant pour "id ""= "player"

// On va pointer la div ayant la class "board" par son id "player"
// On créée une constante pour pointer la div "player" et on utilise getElementbyId pour la pointée par son id "player"
//const divPlayer = document.getElementById("player");

// On insere notre nouvelle div "dice" dans la div "player" pointée par son id en utilisant appendChild()
//divPlayer.appendChild(newDiv);

// Résultat : on a le dé numéro 1 qui s'affiche !

// Etape n°2 - Création d'une fonction qui permet de jouer avec les dés

//la fonction doit générer un nombre au hasard ente 1 et 6 et associée l'image du sprite à la bonne taille

// Nombre aléatoire : il va être générer par la fonction "Math.random(min, max)" qui génére un nombre aléatoire à virgule  entre 0 et 1
// On veut des chiffres entre 1 et 6 donc on met un minimum et maximum ; ensuite,on multiplie par 10 et on arrondi avec la fonction
// Math.random(min,max) : génére un nombre à virgule aléatoire entre 0 et 1
// Math.round() : retourne la valeur d'un nombre arrondi à l'entier le plus proche
// getRandom(min, max){ return Math.random() * (max - min) + min}; => fonction pour obtenir un nombre aléatoire dasn un intervalle - les 2 précédentes ne suffisent pas

//function getRandom(min, max) {
//return Math.random() * (max - min) + min;
//}

// création d'un nombre aléatoire avec fonction getRamdom() - Nombre quand on lance 1 seule dé !

function dicePlayer() {
  const newDiv = document.createElement("div");
  console.log(newDiv);
  newDiv.classList.add("dice");
  const divPlayer = document.getElementById("player");
  divPlayer.appendChild(newDiv);

  let numberRandom = Math.round(Math.random() * (6 - 1)) + 1;
  console.log(numberRandom);

  if (numberRandom === 2) {
    newDiv.style.backgroundPositionX = "-100px";
  } else if (numberRandom === 3) {
    newDiv.style.backgroundPositionX = "-200px";
  } else if (numberRandom === 4) {
    newDiv.style.backgroundPositionX = "-300px";
  } else if (numberRandom === 5) {
    newDiv.style.backgroundPositionX = "-400px";
  } else if (numberRandom === 6) {
    newDiv.style.backgroundPositionX = "-500px";
  }
}

//dicePlayer();

// Etape n°3 - Lancement de plusieurs dés

// On va demander au joueur avec combien de dés il veut jouer lorsqu'il arrive sur la page de notre jeu

function play() {
  let numberDice = parseInt(
    prompt(
      "Avec combien de dés voulez-vous jouer ? Merci d'indiquer le nombre de dés !"
    )
  );
  console.log(numberDice);

  for (let i = 0; i < numberDice; i++) {
    dicePlayer();
  }
}

play();
