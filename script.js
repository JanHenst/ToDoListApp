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
