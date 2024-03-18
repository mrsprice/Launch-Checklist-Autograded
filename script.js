// Write your JavaScript code here!
window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse;
  listedPlanetsResponse = myFetch()
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });

  let myForm = document.querySelector("form");
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formSubmission(
      document,
      document.getElementById("faultyItems"),
      document.querySelector("input[name=pilotName]").value,
      document.querySelector("input[name=copilotName]").value,
      document.querySelector("input[name=fuelLevel]").value,
      document.querySelector("input[name=cargoMass]").value
    );
  });
});
