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

  var firstIcon = document.createElement("div");
  firstIcon.className += "icon";
  firstIcon.innerHTML = getRandomInt(1, 6);

  var secondIcon = document.createElement("div");
  secondIcon.className += "icon";
  secondIcon.innerHTML = getRandomInt(1, 6);

  var bonusDamage = document.createElement("div");
  bonusDamage.className += "bonus";
  bonusDamage.innerHTML = "+ 10"

  dice.appendChild(firstIcon);
  dice.appendChild(secondIcon);
  dice.appendChild(bonusDamage);










  document.getElementById("combatLog").appendChild(rolled);

}

function enemyLog() {

  var logElement = document.querySelector('#enemyLog');

  var cloneEnemy = logElement.cloneNode(true);

  cloneEnemy.style.display = "flex";

  var startingLog = document.querySelector('#firstLog');




  startingLog.after(cloneEnemy);
  cloneEnemy.order = 1;

}
