var cTs = document.querySelector("html").getAttribute("data-theme");

// To toggle through themes
function themer () {

  const newTheme = cTs === "dark" ? "light" : "dark";
  cTs = newTheme;

  keepSwitch(newTheme);

}

// Function that applies a theme instead of just toggling
function keepSwitch(theme) {
  cTs = theme;

  // Button variable
  var peep = "";
  if (cTs == "dark") {
    peep="D";
  } else {
    peep="L";
  }
  $('.slider').html(peep);

  document.querySelector("html").setAttribute("data-theme", cTs);

  if (theme == "light" ) {
    document.getElementById("mode-switch").checked = false;
  } else {
    document.getElementById("mode-switch").checked = true;
  }

  serverSet(cTs);

}

async function serverSet (theme) {
  try {
    await fetch('/tChange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ theem: theme })
    });
  } catch (error) {
      console.error('Error updating theme:', error);
  }
}

async function fetchTheme () {
  try {
    const response = await fetch('/tFetch'); 
    const themeData = await response.json();
    console.log(themeData.theem);
    keepSwitch(themeData.theem);
  } catch (error) {
    console.error('Error fetching theme data:', error);
  }
}

document.addEventListener('DOMContentLoaded', async (err) => {
  await fetchTheme();
});