var JackEnergy = 100;

var JackGhostHand = true;
var JackGhostHandUse = 1;

var JackGun = false;
var JackGunShots = 0;

var JackBook = true;

var EnemyName;
var EnemyEnergy = 100;
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

    JackGunShots = 6;

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

function setEnemyName() {
  document.getElementById('EnemyName').innerHTML = EnemyName;
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
    bonusDamage.innerHTML = "+ " + bonus ;

    dice.appendChild(firstIcon);
    dice.appendChild(secondIcon);
    if (bonus > 0) {
    dice.appendChild(bonusDamage);
    }

  var outcome = document.createElement("div");
    outcome.className += "outcome";
    outcome.innerHTML = "Infliggi";

    rolled.appendChild(outcome);

    var totalDamage = firstRoll + secondRoll + bonus;

  var total = document.createElement("div");
    total.className += "total";
    total.innerHTML = totalDamage;

    outcome.appendChild(total);

  var damage = document.createTextNode("danni");

    outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

  return totalDamage;

}

function enemyLog(bonus) {

  if (bonus == undefined) {
    bonus = 0;
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
    bonusDamage.innerHTML = "+ " + bonus;

    dice.appendChild(firstIcon);
    dice.appendChild(secondIcon);
    if (bonus > 0) {
    dice.appendChild(bonusDamage);
    }

  var outcome = document.createElement("div");
    outcome.className += "outcome";
    outcome.innerHTML = "ti infligge";

    rolled.appendChild(outcome);

    var totalDamage = firstRoll + secondRoll + bonus;

  var total = document.createElement("div");
    total.className += "total";
    total.innerHTML = totalDamage;

    outcome.appendChild(total);

  var damage = document.createTextNode("danni!");

    outcome.appendChild(damage);

  document.getElementById("combatLog").appendChild(rolled);

  return totalDamage;
}

function combatold(jack, enemy) {

  var jackDamage = jackLog(jack);
  var enemyDamage = enemyLog(enemy);

  JackEnergy -= enemyDamage;
  EnemyEnergy -= jackDamage;

  setJackEnergy();
  setEnemyEnergy();

  isJackDead();
}

function combat(jack,enemy) {
  for (i = 0; i < 7; i++ ) {
    if (i == 0) {
      var jackDamage = jackLog(jack);
      EnemyEnergy -= jackDamage;
      setEnemyEnergy();

      if (isEnemyDead() == true) {
        break;
      }

    } else if (i == 4) {
      var enemyDamage = enemyLog(enemy);

      JackEnergy -= enemyDamage;
      setJackEnergy();

      if (isJackDead() == true) {
        break;
      }
    }
  }

}

function disableButton(button) {

  document.getElementById(button).disabled = true;

}

function checkButtons() {

  if (JackGhostHand == false || JackGhostHandUse == 0) {
    document.getElementById("ghostHandAction").style.display = "none";
  } else if (JackBook == false) {
    document.getElementById("spellBookAction").style.display = "none";
  } else if (JackGun == false || JackGunShots == 0) {
    document.getElementById("gunAction").style.display = "none";
  }

}

function usedGhostHand() {

  JackGhostHandUse -= 1;
  document.getElementById("JackItemValue").innerHTML = JackGhostHandUse;

  document.getElementById("ghostHandAction").disabled = true;

}
