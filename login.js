function loginEnable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("authDisplayArea").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "login.html", true);
    xhttp.send();
  }

  function signUpEnable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("authDisplayArea").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "signup.html", true);
    xhttp.send();
  }