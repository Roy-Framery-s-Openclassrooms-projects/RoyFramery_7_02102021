import recipes from './recipies.js';
import Card from '../class/Card.js';

/**
 * function that filters the recipes according to the value typed by the user in the input of the main search bar 
 * @param {string} filter Value from the search bar
 * @returns an array of instantiations of the Card class
 */
let getRecipesCardOnMainSearch = (filter) => {
    // to get the filter in lower case
    let lowerCaseFilter = filter.toLowerCase();

    // initialization of an array to get the filtred recipes
    let filtredRecipes = [];
    for (let recipe in recipes) {
        let ingredients = recipes[recipe].ingredients;
        for (let ingredient in ingredients) {
            if (ingredients[ingredient].ingredient.toLowerCase().match(lowerCaseFilter)) {
                filtredRecipes.push(recipes[recipe]);
            }
        }
        if (recipes[recipe].name.toLowerCase().match(lowerCaseFilter)) {
            filtredRecipes.push(recipes[recipe]);
        } else if (recipes[recipe].description.toLowerCase().match(lowerCaseFilter)) {
            filtredRecipes.push(recipes[recipe]);
        }
    }
    // to remove duplicate recipe in the array filtredRecipes
    for (let filtredRecipe in filtredRecipes) {
        let count = 0;
        for (let i = 0; i < filtredRecipes.length; i++) {
            if (filtredRecipes[filtredRecipe] == filtredRecipes[i]) {
                count++;
            }
        }
        // To remove the duplicate value
        if (count > 1) {
            filtredRecipes.splice(filtredRecipes.indexOf(filtredRecipes[filtredRecipe]), 1);
        }
    }
    // To create a card for each recipes
    let cards = [];
    filtredRecipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils))
    })
    return cards;

};

export default getRecipesCardOnMainSearch