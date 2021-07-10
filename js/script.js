var JackEnergy = 35;

var JackGhostHand = false;
var JackGhostHandUse = 0;

var JackGun = false;
var JackGunShots = 0;

var JackBook = false;

var EnemyName;
var EnemyEnergy = 35;
var EnemyDamageRolls;


function setJackEnergy() {
  document.getElementById('JackEnergy').innerHTML = JackEnergy;
}

function setJackItem() {

  var item = document.getElementById('JackItem');

  var value = document.createElement("div");
  value.className += "value";
  value.id = "JackItemValue";

  var icon = document.createElement("div");
  icon.className += "icon";

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  if (JackGhostHand == true) {

    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#ghosthand");

    value.innerHTML = JackGhostHandUse;

    svg.appendChild(use);
    icon.appendChild(svg);
    item.appendChild(value);
    item.appendChild(icon);

  } else if (JackGun == true) {

    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#gun");

    value.innerHTML = JackGunShots;

    svg.appendChild(use);
    icon.appendChild(svg);
    item.appendChild(value);
    item.appendChild(icon);

  } else if (JackBook == true) {

    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#book");

    svg.appendChild(use);
    icon.appendChild(svg);
    item.appendChild(icon);

  }

}

function isJackDead() {
  if (JackEnergy <= 0) {
    return true;
  }
}

function enemyNameIs(name) {
  EnemyName = name;
}

function setEnemyName(name) {

  if (name = undefined) {
    name = EnemyName;
  }

  document.getElementById('EnemyName').innerHTML = name;
}

function setEnemyEnergy(energy) {

  if (energy == undefined) {
    energy = EnemyEnergy;
  }

  EnemyEnergy = energy;
  document.getElementById('EnemyEnergy').innerHTML = EnemyEnergy;

}

function isEnemyDead() {
  if (EnemyEnergy <= 0) {
    return true;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function jackLog(rolls, bonus) {

  if (bonus == undefined) {
    bonus = 0;
  }

  if (rolls == undefined) {
    rolls = 2;
  }

  var rolled = document.createElement("div");
  rolled.className += "rolled";
  rolled.className += " jh";
  rolled.innerHTML = "Hai rollato"

  var dice = document.createElement("div");
  dice.className += "dice";

  rolled.appendChild(dice);

  var totalDamage = 0;

  for (let i = 0; i < rolls; i++) {

    var roll = getRandomInt(1, 6);

    var icon = document.createElement("div");
    icon.className += "icon";

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (roll == 1) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (roll == 2) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (roll == 3) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (roll == 4) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (roll == 5) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (roll == 6) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    svg.appendChild(use);
    icon.appendChild(svg);
    dice.appendChild(icon);

    totalDamage += roll;

  }

  totalDamage += bonus;

  var bonusDamage = document.createElement("div");
  bonusDamage.className += "bonus";
  bonusDamage.innerHTML = "+ " + bonus ;

  if (bonus > 0) {
    dice.appendChild(bonusDamage);
  }

  var outcome = document.createElement("div");
  outcome.className += "outcome";
  outcome.innerHTML = "e infliggi";

  rolled.appendChild(outcome);

  var total = document.createElement("div");
  total.className += "total";
  total.innerHTML = totalDamage;

  outcome.appendChild(total);

  var damage = document.createTextNode("danni");

  outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

  return totalDamage;

}

function enemyLog(rolls, bonus) {

  if (bonus == undefined) {
    bonus = 0;
  }

  if (rolls == undefined) {
    rolls = 2;
  }

  var rolled = document.createElement("div");
  rolled.className += "rolled";
  rolled.className += " enemy";

  var actor = document.createElement("div");
  actor.className += "actor";

  var name = document.createElement("div");
  name.className += "name";
  name.innerHTML = EnemyName;

  actor.appendChild(name);
  actor.appendChild(document.createTextNode("ha rollato"));
  rolled.appendChild(actor);

  var dice = document.createElement("div");
  dice.className += "dice";

  rolled.appendChild(dice);

  var totalDamage = 0;

  for (let i = 0; i < rolls; i++) {

    var roll = getRandomInt(1, 6);

    var icon = document.createElement("div");
    icon.className += "icon";

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    if (roll == 1) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-1");
    } else if (roll == 2) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-2");
    } else if (roll == 3) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-3");
    } else if (roll == 4) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-4");
    } else if (roll == 5) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-5");
    } else if (roll == 6) {
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#dice-6");
    }

    svg.appendChild(use);
    icon.appendChild(svg);
    dice.appendChild(icon);

    totalDamage += roll;

  }

  totalDamage += bonus;

  var bonusDamage = document.createElement("div");
  bonusDamage.className += "bonus";
  bonusDamage.innerHTML = "+ " + bonus ;

  if (bonus > 0) {
    dice.appendChild(bonusDamage);
  }

  var outcome = document.createElement("div");
  outcome.className += "outcome";
  outcome.innerHTML = "e infliggi";

  rolled.appendChild(outcome);

  var total = document.createElement("div");
  total.className += "total";
  total.innerHTML = totalDamage;

  outcome.appendChild(total);

  var damage = document.createTextNode("danni");

  outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

  return totalDamage;

}

function combat(jackrolls, jackbonus, enemyrolls, enemybonus) {

  for (let i = 0; i < 2; i++ ) {

    if (i == 0) {

      var jackDamage = jackLog(jackrolls, jackbonus);
      EnemyEnergy -= jackDamage;
      setEnemyEnergy();

      if (isEnemyDead() == true) {
        break;
      }

    } else if (i == 1) {

      var enemyDamage = enemyLog(enemyrolls, enemybonus);

      JackEnergy -= enemyDamage;
      setJackEnergy();

      if (isJackDead() == true) {
        break;
      }
    }
  }

  endCombat();

}


function disableButton(button) {

  document.getElementById(button).disabled = true;

}

// funzione in pagina che nasconde i button non utilizzabili
function hideButtons() {

  if (JackGhostHand == false || JackGhostHandUse == 0) {
    document.getElementById("ghostHandAction").style.display = "none";
  }

  // if (JackBook == false) {
  //   document.getElementById("spellBookAction").style.display = "none";
  // }

  if (JackGun == false || JackGunShots == 0) {
    document.getElementById("gunAction").style.display = "none";
  }

}

function startFight(item) {

  if (item == "ghostHand") {

    JackGhostHand = true;
    JackGhostHandUse = 1;

    setJackItem();

    document.getElementById("chooseItem").style.display = "none";
    document.getElementById("combatChoices").style.display = "block";

    hideButtons();

  } else if (item == "gun") {

    JackGun = true;
    JackGunShots = 6;


    setJackItem();

    document.getElementById("chooseItem").style.display = "none";
    document.getElementById("combatChoices").style.display = "block";

    hideButtons();
  }
}

function usedGhostHand() {

  JackGhostHandUse -= 1;
  document.getElementById("JackItemValue").innerHTML = JackGhostHandUse;

  document.getElementById("ghostHandAction").disabled = true;
  document.getElementById("ghostHandAction-subtitle").innerHTML = "esaurita";

}

function usedGunShots() {

  JackGunShots -= 1;
  document.getElementById("JackItemValue").innerHTML = JackGunShots;

  if (JackGunShots == 0) {
    document.getElementById("gunAction").disabled = true;
    document.getElementById("gunAction-subtitle").innerHTML = "proiettili esauriti";
  }
}

function endCombat() {

  if (isJackDead() == true) {

    lossLog();

  } else if (isEnemyDead() == true) {

    winLog();

  }
}

function winLog() {

  var rolled = document.createElement("div");
  rolled.className += "rolled";
  rolled.className += " end";
  rolled.className += " win";

  var title = document.createElement("div");
  title.className += "title";
  title.innerHTML += "Ce l'hai fatta Jack!";

  var img = document.createElement("img");
  img.className += "illo";
  img.setAttribute('src', 'illo/star.svg');

  rolled.appendChild(title);
  rolled.appendChild(img);

  document.getElementById("combatLog").appendChild(rolled);

}
