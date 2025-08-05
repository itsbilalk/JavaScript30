let cities = [];
let filteredCities = [];

const getData = async () => {
  const url =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.code}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error.message);
  }
};

cities = await getData();

const inputField = document.querySelector("input");
const list = document.querySelector("ul");

inputField.addEventListener("input", (e) => {
  const input = e.currentTarget.value;
  list.innerHTML = "";

  if (!input) {
    list.innerHTML = "";
    return;
  }

  filteredCities = cities.filter(
    (cityObject) =>
      cityObject.city.toLowerCase().includes(input) ||
      cityObject.state.toLowerCase().includes(input)
  );

  filteredCities.forEach((city) => {
    const li = document.createElement("li");
    li.innerText = `${city.city}`;
    list.appendChild(li);
  });

  console.log(filteredCities);
});
