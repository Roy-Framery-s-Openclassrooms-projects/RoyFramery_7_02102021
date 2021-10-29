import {getRecipesCard} from './src/service/api.js';
import Select from './src/class/Select.js';
import initSelectEvent from './src/SelectEvent.js'
import displayCard from './src/cards.js'
import getRecipesCardOnMainSearch from './src/service/searchBar.js'

const dom = {
    filter : document.querySelector('.filter'),
    cardsSection : document.querySelector('.cards')
}

// To display recipes' cards
const cards = getRecipesCard();
displayCard(cards, dom.cardsSection)

// To display select elements
const ingredientsSelect = new Select('Ingrédients', 'primary');
const appliancesSelect = new Select('Appareil', 'success');
const ustensilssSelect = new Select('Ustensiles', 'danger');
dom.filter.insertAdjacentHTML('beforeend', ingredientsSelect.createSelectElement + appliancesSelect.createSelectElement + ustensilssSelect.createSelectElement);

initSelectEvent()

const searchBar = document.querySelector('.search__input')
searchBar.addEventListener('input', (e) => {
    if(e.target.value.length > 2) {
        let searchCards = getRecipesCardOnMainSearch(searchBar.value.toLowerCase());
        console.log(searchCards)
        if (searchCards != undefined) {
            displayCard(searchCards, dom.cardsSection)
        } else {displayCard(searchCards = [], dom.cardsSection)}
    } else {
        displayCard(cards, dom.cardsSection)
    }
})