import { initSearchBar } from './src/searchBar.js';
import displayCards from "./src/displayCards.js";
import recipesData from "./src/service/recipes.js";
import Select from './src/class/Select.js';
import { addOptionsToEachSelect, initOptionsEvent } from "./src/options.js";
import { initSelectModal, initInputSelectEvent } from './src/selectEvent.js';

displayCards(recipesData);

// to init event on the main search bar
initSearchBar(recipesData);

// To display select elements in filter section
const filter = document.querySelector('.filter');
const ingredientsSelect = new Select('Ingrédients', 'primary');
const appliancesSelect = new Select('Appareil', 'success');
const ustensilssSelect = new Select('Ustensiles', 'danger');
filter.insertAdjacentHTML('beforeend', ingredientsSelect.createSelectElement + appliancesSelect.createSelectElement + ustensilssSelect.createSelectElement);

// to add options to each select custom list
addOptionsToEachSelect(recipesData);

// To init the search on each select's input text
initInputSelectEvent(recipesData);

initSelectModal();

initOptionsEvent();