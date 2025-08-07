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

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const html = filteredCities
    .map((place) => {
      const regex = new RegExp(input, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${input}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${input}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");

  list.innerHTML = html;

  console.log(filteredCities);
});
