const mainContainer = document.querySelector("#mainContainer");
const selectP1 = document.getElementById("player1Character").value;
const selectP2 = document.getElementById("player2Character").value;

function displayPlayerOne(p1) {
  if (selectP1 === "Warrior") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "assassin2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knuckles1Btn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercut1Btn", fighterMoves);
    createAndAppendEl("button", "Special", "warrior1Spec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else if (selectP1 === "Assassin") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter1Moves");
    createAndAppendEl("h1", "", "player1name", fighterDiv);
    createAndAppendEl("p", p1.health, "assassin1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "dagger1Btn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweep1Btn", fighterMoves);
    createAndAppendEl("button", "Special", "assassin1Spec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player1Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else console.log("ayo fel");
}

function displayPlayerTwo(p2) {
  if (selectP2 === "Warrior") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "warrior2HP", fighterDiv);
    createAndAppendEl("img", "./img/", "warriorImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Knuckles", "knuckles2Btn", fighterMoves);
    createAndAppendEl("button", "Uppercut", "uppercut2Btn", fighterMoves);
    createAndAppendEl("button", "Special", "warrior2Spec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else if (selectP2 === "Assassin") {
    const fighterDiv = document.createElement("div");
    fighterDiv.classList.add("flexBox");
    const fighterMoves = document.createElement("div");
    fighterMoves.classList.add("flex", "fighter2Moves");
    createAndAppendEl("h1", "", "player2name", fighterDiv);
    createAndAppendEl("p", p2.health, "assassin1HP", fighterDiv);
    createAndAppendEl("img", "./img/", "assasinImg", fighterDiv);
    fighterDiv.append(fighterMoves);
    createAndAppendEl("button", "Dagger", "dagger2Btn", fighterMoves);
    createAndAppendEl("button", "Legsweep", "legsweep2Btn", fighterMoves);
    createAndAppendEl("button", "Special", "assassin2Spec", fighterMoves);
    createAndAppendEl("button", "Ultimate", "player2Ult", fighterMoves);
    mainContainer.append(fighterDiv);
  } else console.log("ayo fel");
  console.log(selectP1, selectP2);
}

function nextTurnP1() {
  const fighter1 = document.querySelector(".fighter1Moves");
  const fighter2 = document.querySelector(".fighter2Moves");
  fighter1.classList.remove("hide");
  fighter2.classList.add("hide");
}
function nextTurnP2() {
  const fighter1 = document.querySelector(".fighter1Moves");
  const fighter2 = document.querySelector(".fighter2Moves");
  fighter1.classList.add("hide");
  fighter2.classList.remove("hide");
}
async function createAndAppendEl(type, content, addId, container) {
  const element = document.createElement(type);
  element.id = addId;
  container.append(element);

  if (addId === "playername") {
    element.innerText = content;
  } else {
    if (type === "img") {
      element.src = content;
    } else {
      element.innerText = content;
    }
  }

  return element;
}

export { displayPlayerOne, displayPlayerTwo, nextTurnP1, nextTurnP2 };
