console.log("Client side js loaded");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

// messageOne.textContent = "From JS";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  if (!location) {
    messageOne.textContent = "You must enter a location";
  } else {
    messageOne.textContent = "loading...";
    messageTwo.textContent = "";
    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
      res.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    });
  }
});
