
  var cTS = document.querySelector("html").getAttribute("data-theme");
  var cbox = document.getElementById("mode-switch").checked;

  if (cbox) {
    themer();
  }

  function themer () {
    const newTheme = cTS === "dark" ? "light" : "dark";

    var peep = "";
    if (newTheme == "dark") {
      peep="D";
    } else {
      peep="L";
    }
    
    $('.slider').html(peep);
    console.log("clicked");
    // update theme attribute on HTML to switch theme in CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);
    // update in local storage
    localStorage.setItem("theme", newTheme);

    // update the cTS in memory
    cTS = newTheme;

  }

