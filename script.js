// naar het wachtwoord vergeten screen
function WachtwoordVergeten() {
  var x = document.getElementById("login_screen");
  var y = document.getElementById("wachtwoord_vergeten_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// terug naar login screen
function TerugLogin() {
  var x = document.getElementById("wachtwoord_vergeten_screen");
  var y = document.getElementById("login_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// ervoor zorgen dat de input field rood wordt als het niet is ingvuld
function InputErrorLogin() {
  if (document.getElementById('username').value == "") {
    document.getElementById('username').style.borderColor = "red";
    document.getElementById('username').classList.add('placeholder');
  }
  else {
    document.getElementById('username').style.borderColor = "#707070";
    document.getElementById('username').classList.remove('placeholder');
  }

  if (document.getElementById('password').value == "") {
    document.getElementById('password').style.borderColor = "red";
    document.getElementById('password').classList.add('placeholder');
  }
  else {
    document.getElementById('password').style.borderColor = "#707070";
    document.getElementById('password').classList.remove('placeholder');
  }
}

// ervoor zorgen dat de input field rood wordt als het niet is ingvuld
function WachtwoordVergetenError() {
  if (document.getElementById('email').value == "") {
    document.getElementById('email').style.borderColor = "red";
    document.getElementById('email').classList.add('placeholder');
  }
  else {
    document.getElementById('email').style.borderColor = "#707070";
    document.getElementById('email').classList.remove('placeholder');
  }
}

// password laten zien dus zonder die bolletjes
function showPass() {
  document.getElementById('password').type = "text";
  document.getElementById('closed_eye_icon').style.display = "none";
  document.getElementById('open_eye_icon').style.display = "block";
}

// password weer verbergen
function hidePass() {
  document.getElementById('password').type = "password";
  document.getElementById('open_eye_icon').style.display = "none";
  document.getElementById('closed_eye_icon').style.display = "block";
}

//email verstuurd bericht pop-up
function VerstuurBericht() {
  var bericht = document.getElementById('verstuurd');
  if (document.getElementById('email').value != "") {
    bericht.style.display = "block";
  } else {
    bericht.style.display = "none"
  }
}

// de functies voor de verstuur button in 1 functie
function VerstuurFunctions() {
  VerstuurBericht();
  WachtwoordVergetenError();
}

 // een functie om naar de selecteer persoon screen te gaan
function ToSelecteerPersoon() {
  var x = document.getElementById("login_screen");
  var y = document.getElementById("selecteer_screen");

  if (document.getElementById('username').value != "" && document.getElementById('password').value != "") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functies voor de login button in 1 functie
function LoginFunctions() {
  ToSelecteerPersoon();
  InputErrorLogin();
}

// de functie om uit te loggen
function LogUit() {
  var x = document.getElementById("selecteer_screen");
  var y = document.getElementById("login_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om naar de dagoverzicht te komen
function selectPerson() {
  window.location.href = "index2.html";
}

// de functie om terug naar de login te gaan vanaf het dagoverzicht en maandoverzicht
function LogUitBig() {
  window.location.href = "index.html";
}

// de funtie om van maandag naar dinsdag te gaan
function volgendeDag() {
  var x = document.getElementById("maandag");
  var y = document.getElementById("dinsdag");

  if (x.style.display == "") {
    x.style.display = "none";
    y.style.display = "";
  } else {
    x.style.display = "";
    y.style.display = "none";
  }
}

// de functie om van januari naar februari te gaan en de calendar img te veranderen
function volgendeMaand() {
  var x = document.getElementById("januari");
  var y = document.getElementById("februari");
  var j = document.getElementById("img_januari");
  var f = document.getElementById("img_februari");

  if (x.style.display == "") {
    x.style.display = "none";
    y.style.display = "";
  } else {
    x.style.display = "";
    y.style.display = "none";
  }

  if (j.style.display == "") {
    j.style.display = "none";
    f.style.display = "";
  } else {
    j.style.display = "";
    f.style.display = "none";
  }
}

// de functie om van dagoverzicht naar maandoverzicht te gaan
function dagMaand() {
  var x = document.getElementById("dag_screen");
  var y = document.getElementById("maand_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van maandoverzicht naar dagoverzicht te gaan
function maandDag() {
  var x = document.getElementById("maand_screen");
  var y = document.getElementById("dag_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van dagoverzicht naar taakscherm 1 te gaan
function naarTC1() {
  var x = document.getElementById("dag_screen");
  var y = document.getElementById("taak_screen_1");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 1 naar dagoverzicht te gaan
function TerugOverzicht1() {
  var x = document.getElementById("taak_screen_1");
  var y = document.getElementById("dag_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
// de functie om van taakscherm 2 naar dagoverzicht te gaan
function TerugOverzicht2() {
  var x = document.getElementById("taak_screen_2");
  var y = document.getElementById("dag_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
// de functie om van taakscherm 3 naar dagoverzicht te gaan
function TerugOverzicht3() {
  var x = document.getElementById("taak_screen_3");
  var y = document.getElementById("dag_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 1 naar taakscherm 2 te gaan
function naarTC2() {
  var x = document.getElementById("taak_screen_1");
  var y = document.getElementById("taak_screen_2");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 2 naar taakscherm 3 te gaan
function naarTC3() {
  var x = document.getElementById("taak_screen_2");
  var y = document.getElementById("taak_screen_3");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 3 naar taakscherm 2 te gaan
function terugNaarTC2() {
  var x = document.getElementById("taak_screen_3");
  var y = document.getElementById("taak_screen_2");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 2 naar taakscherm 1 te gaan
function terugNaarTC1() {
  var x = document.getElementById("taak_screen_2");
  var y = document.getElementById("taak_screen_1");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van taakscherm 3 naar eindscherm te gaan
function naarEindeTaak() {
  var x = document.getElementById("taak_screen_3");
  var y = document.getElementById("einde_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}

// de functie om van eindscherm naar dagoverzicht te gaan
function naarBegin() {
  var x = document.getElementById("einde_screen");
  var y = document.getElementById("dag_screen");

  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
  }
}
