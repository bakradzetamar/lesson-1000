
const countries = [
  "USA",
  "United Kingdom",
  "China",
  "Sweden",
  "Japan",
  "German"
];

function generateListItems(arg) {
  let items = '';
  for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i]}</li>`;
  }
  return items;
}

function filterCountries(searchTerm) {
  return countries.filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()));
}

function updateCountriesList(searchTerm = '') {
  const filteredCountries = filterCountries(searchTerm);
  const countriesListElement = document.getElementById('countries-list');
  const searchInput = document.getElementById('search-input');
  
  if (filteredCountries.length > 0) {
      countriesListElement.innerHTML = generateListItems(filteredCountries);
      countriesListElement.style.display = 'block'; 
  } else {
      countriesListElement.innerHTML = ''; 
      countriesListElement.style.display = 'none'; 
  }
}

document.getElementById('search-input').addEventListener('input', function() {
  updateCountriesList(this.value);
});
  


const moveTo = new MoveTo();
const linkArray = document.querySelectorAll(".nav-a");


linkArray.forEach((item) => {
  
  item.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.preventDefault();

  console.log(this); 
  const scrollElement = document.querySelector(this.getAttribute("href"));
  
  moveTo.move(scrollElement);
}
