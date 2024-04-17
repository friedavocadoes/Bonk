
const storedPreference = localStorage.getItem('preferredMode');

var cTS = document.querySelector("html").getAttribute("data-theme");
const prefersDarkMode = storedPreference === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  var cbox = document.getElementById("mode-switch").checked;

  if (cbox) {
    themer();
  }

  function themer () {
    localStorage.setItem('preferredMode', cTS);

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

