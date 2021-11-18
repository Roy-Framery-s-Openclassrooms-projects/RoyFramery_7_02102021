import Select from './class/Select.js';
import displayCards from './displayCards.js';
import { insertOptionsToCustomList, addOptionsToEachSelect, initOptionsEvent } from './options.js';
import { initInputSelectEvent } from './SelectEvent.js';

/**
 * function that filters the recipes according to the value typed by the user in the input of the main search bar 
 * @param {object[]} recipes
 * @param {string} filter Value from the search bar
 * @returns an array of instantiations of the Card class
 */
let getRecipesCardOnMainSearch = (recipes, filter) => {

    let cards = [];
    for (let recipe of recipes) {
        if (recipe.name.toLowerCase().indexOf(filter) > -1 || recipe.description.toLowerCase().indexOf(filter) > -1) {
            cards.push(recipe);
            continue;
        }
        for (let ingredient of recipe.ingredients) {
            if (ingredient.ingredient.toLowerCase().indexOf(filter) > -1) {
                cards.push(recipe);
                break;
            }
        }
    }
    return cards;

};

/**
 * 
 * @param {object[]} recipesData 
 */
let initSearchBar = (recipesData) => {
    // to get the search bar Element
    const searchBar = document.querySelector('.search__input');

    searchBar.addEventListener('input', () => {
        if (searchBar.value.length > 2) {
            const recipes = getRecipesCardOnMainSearch(recipesData, searchBar.value);
            displayCards(recipes);
            
            // to display options to each select
            const selectButtons = document.querySelectorAll('.filter__select');
            selectButtons.forEach(select => {
                const options = Select.getOptionsByButtonDataValue(recipes, select.value ? select.value : select.getAttribute('data-value'));
                insertOptionsToCustomList(options, select.nextElementSibling, select.getAttribute('data-color'));
                initOptionsEvent();
                initInputSelectEvent(recipes);
            });
        } else {
            displayCards(recipesData);
            addOptionsToEachSelect(recipesData);
            initOptionsEvent();
        }
    });
};

export { getRecipesCardOnMainSearch, initSearchBar };