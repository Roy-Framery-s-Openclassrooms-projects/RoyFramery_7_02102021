import recipes from './recipes.js';
import Card from '../class/Card.js';

/**
 * function that filters the recipes according to the value typed by the user in the input of the main search bar 
 * @param {string} filter Value from the search bar
 * @returns an array of instantiations of the Card class
 */
let getRecipesCardOnMainSearch = (filter) => {

    let cards = [];
    for (let recipe of recipes) {
        if (recipe.name.toLowerCase().indexOf(filter) > -1 || recipe.description.toLowerCase().indexOf(filter) > -1) {
            cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
            continue;
        }
        for (let ingredient of recipe.ingredients) {
            if (ingredient.ingredient.toLowerCase().indexOf(filter) > -1) {
                cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
                break;
            }
        }
    }
    return cards;

}

export default getRecipesCardOnMainSearch