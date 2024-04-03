var currentThemeSetting = document.querySelector("html").getAttribute("data-theme");

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  console.log(`hello`);
  document.getElementById("watermelon").contentDocument.click =  function () {
    console.log("hi");

      const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      console.log("clicked");
      // update theme attribute on HTML to switch theme in CSS
      document.querySelector("html").setAttribute("data-theme", newTheme);

      // update in local storage
      localStorage.setItem("theme", newTheme);

      // update the currentThemeSetting in memory
      currentThemeSetting = newTheme;
  };
});



// console.log(currentThemeSetting);
// button.addEventListener("", () => 

// function watermelon () {
//   const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

//   // update theme attribute on HTML to switch theme in CSS
//   document.querySelector("html").setAttribute("data-theme", newTheme);

//   // update in local storage
//   localStorage.setItem("theme", newTheme);

//   // update the currentThemeSetting in memory
//   currentThemeSetting = newTheme;
// };