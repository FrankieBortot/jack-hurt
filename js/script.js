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



function combatLog() {

  var logElement = document.querySelector('#jackLog');

  var clone = logElement.cloneNode(true);

  clone.style.display = "flex";

  var startingLog = document.querySelector('#firstLog');

  startingLog.after(clone);
  clone.order = 1;

}

function enemyLog() {

  var logElement = document.querySelector('#enemyLog');

  var clone = logElement.cloneNode(true);

  clone.style.display = "flex";

  var startingLog = document.querySelector('#firstLog');

  startingLog.after(clone);
  clone.order = 1;

}
