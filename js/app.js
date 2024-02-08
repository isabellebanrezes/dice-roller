// Game Dice_roller - Lancer de dés

// Etape n°1 - Création d'un dé

// Création d'une nouvelle "div" - on va ajouter un élément html via du code en java script - via la DOM !

const newDiv = document.createElement("div");

// Ajout d'un classe à notre nouvelle "div"

newDiv.classList.add("dice");

// Insérer le nouvelle "div" dans le DOM (avec la méthode "appendChild" qui ajoute des éléments dans le DOM après le dernier enfant) dans la "div" ayant pour "id ""= "player"

// On va chercher la div player par son id
const player = document.getElementById("player");

// On insere "dice" dans player
player.appendChild("dice");

let position = randomNumber((min = 1), (max = 6));
