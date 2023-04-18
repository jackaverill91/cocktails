import presentDrinks from "./src/presentDrinks.js";

const URL = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL); // arrow functionality changes this back to a callback so URL can be passed as param
});