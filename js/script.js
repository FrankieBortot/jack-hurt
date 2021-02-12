var JackEnergy;
var JackGhostHand;
var JackShots;
var JackBook;

var EnemyEnergy;
var EnemyDamageRolls;

var startingLog;

function setJackEnergy() {
  var JackEnergy = 123;
  document.getElementById('Jack-Energy').innerHTML = JackEnergy;
}



// function jackLog() {
//
//   var logElement = document.querySelector('#jackLog');
//
//   var clone = logElement.cloneNode(true);
//
//   clone.style.display = "flex";
//
//   var startingLog = document.querySelector('#firstLog');
//
//   startingLog.after(clone);
//   clone.order = 1;
//
// }

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function jackLog() {

  var rolled = document.createElement("div");
    rolled.className += "rolled";
    rolled.className += " jh";
    rolled.innerHTML = "Hai rollato"

  var dice = document.createElement("div");
    dice.className += "dice";

    rolled.appendChild(dice);

  var firstRoll = getRandomInt(1, 6);

  var firstIcon = document.createElement("div");
    firstIcon.className += "icon";

    var svgFirst = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var useFirst = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (firstRoll == 1) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (firstRoll == 2) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (firstRoll == 3) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (firstRoll == 4) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (firstRoll == 5) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (firstRoll == 6) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    firstIcon.appendChild(svgFirst);
    svgFirst.appendChild(useFirst);

  var secondRoll = getRandomInt(1, 6);

  var secondIcon = document.createElement("div");
    secondIcon.className += "icon";

    var svgSecond = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var useSecond = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (secondRoll == 1) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (secondRoll == 2) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (secondRoll == 3) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (secondRoll == 4) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (secondRoll == 5) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (secondRoll == 6) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    secondIcon.appendChild(svgSecond);
    svgSecond.appendChild(useSecond);

  var bonusDamage = document.createElement("div");
    bonusDamage.className += "bonus";
    bonusDamage.innerHTML = "+ 10"

    dice.appendChild(firstIcon);
    dice.appendChild(secondIcon);
    dice.appendChild(bonusDamage);

  var outcome = document.createElement("div");
    outcome.className += "outcome";
    outcome.innerHTML = "Infliggi";

    rolled.appendChild(outcome);

  var total = document.createElement("div");
    total.className += "total";
    total.innerHTML = firstRoll + secondRoll + 10;

    outcome.appendChild(total);

  var damage = document.createTextNode("danni");

    outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

}

function enemyLog() {

  var rolled = document.createElement("div");
    rolled.className += "rolled";
    rolled.className += " enemy";
    rolled.innerHTML = "Hai rollato"

  var dice = document.createElement("div");
    dice.className += "dice";

    rolled.appendChild(dice);

  var firstRoll = getRandomInt(1, 6);

  var firstIcon = document.createElement("div");
    firstIcon.className += "icon";

    var svgFirst = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var useFirst = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (firstRoll == 1) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (firstRoll == 2) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (firstRoll == 3) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (firstRoll == 4) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (firstRoll == 5) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (firstRoll == 6) {
      useFirst.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    firstIcon.appendChild(svgFirst);
    svgFirst.appendChild(useFirst);

  var secondRoll = getRandomInt(1, 6);

  var secondIcon = document.createElement("div");
    secondIcon.className += "icon";

    var svgSecond = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var useSecond = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (secondRoll == 1) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (secondRoll == 2) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (secondRoll == 3) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (secondRoll == 4) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (secondRoll == 5) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (secondRoll == 6) {
      useSecond.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    secondIcon.appendChild(svgSecond);
    svgSecond.appendChild(useSecond);

  var bonusDamage = document.createElement("div");
    bonusDamage.className += "bonus";
    bonusDamage.innerHTML = "+ 10"

    dice.appendChild(firstIcon);
    dice.appendChild(secondIcon);
    dice.appendChild(bonusDamage);

  var outcome = document.createElement("div");
    outcome.className += "outcome";
    outcome.innerHTML = "ti infligge";

    rolled.appendChild(outcome);

  var total = document.createElement("div");
    total.className += "total";
    total.innerHTML = firstRoll + secondRoll + 10;

    outcome.appendChild(total);

  var damage = document.createTextNode("danni!");

    outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

}
