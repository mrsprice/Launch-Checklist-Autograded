// // Write your helper functions here!

require("cross-fetch/polyfill");
//validates user input as empty, not a number, is a number
function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else if (isNaN(testInput) === false) {
    return "Is a Number";
  } else {
    return "Is a Number";
  }
}
//takes inpout and updates shutttle requirements
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  //defines elem,ents from index.html
  let shuttleReady = true;

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All feilds are required!");
  }
  if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Invalid Input!");
  }

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  list.style.visibility = "visible";

  if (fuelLevel < 10000) {
    fuelStatus.innerHTML = "Fuel level too low for launch";
    shuttleReady = false;
  } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  }
  if (cargoLevel > 10000) {
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    shuttleReady = false;
  } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }
  if (shuttleReady !== true) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
  }
}

// console.log(validateInput(1000));
// console.log(validateInput(10000));
// console.log(validateInput("chris"));
// console.log(validateInput("bob"));

// //task 3
// // fetches info from json
function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

async function myFetch() {
  let planetsReturned;
  let url = "https://handlers.education.launchcode.org/static/planets.json";
  planetsReturned = await fetch(url).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
