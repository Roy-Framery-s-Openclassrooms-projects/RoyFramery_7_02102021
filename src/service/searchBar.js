import recipes from './recipies.js';
import Card from '../class/Card.js';

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
                continue;
            }
        }
    }
    return cards;

}

export default getRecipesCardOnMainSearch