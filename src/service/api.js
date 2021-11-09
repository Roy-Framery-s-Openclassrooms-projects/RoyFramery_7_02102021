import recipes from './recipies.js';
import Card from '../class/Card.js';

/**
 * 
 * @param {object.<[[string, string, string]]>} filters [name of the filter, the color of the tag, the type of the filter]
 * @returns an array of recipes cards (filtred or not)
 */
let getRecipesCard = (filters) => {
    let cards = [];
    // loop to create a card for every recipes by instanciate the Card class
    recipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
    });

    // If the filters if present
    if (filters) {
        let filtredCards = [];
        cards.map(card => {
            let contain = [];
            
            // for each card, I go through each filter
            filters.forEach(filter => {
                // to get the value (the name of ingredient, ustensil or appliance) of the filter
                const filterToLowerCase = filter[0].toLowerCase();

                // chack by type of the filter
                if (filter[2] == 'Ustensiles') {
                    if (card.ustensils.includes(filterToLowerCase)) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
                if (filter[2] == 'Appareil') {
                    if (card.appliance.toLowerCase().indexOf(filterToLowerCase) !== -1) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
                if (filter[2] == 'Ingrédients') {
                    let ingredientsList = [];
                    card.ingredients.map(ingredient => {
                        ingredientsList.push(ingredient.ingredient.toLowerCase());
                    });
                    if (ingredientsList.includes(filterToLowerCase)) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
            });
            // if the array contain don't contain a false
            if (!contain.includes(false)) {
                filtredCards.push(card);
            }
        });
        return filtredCards;
    }
    return cards;
};
/**
 * 
 * @param {string} search value type in the input of select ingredients
 * @returns Array of ingredients (string)
 */
let getAllIngredients = (search) => {
    let ingredients = [];
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let ingredientLenght = recipes[i].ingredients.length;
        // loop on all the ingredients of the recipe
        for(let j = 0; j < ingredientLenght; j++) {
            let ingredient = recipe.ingredients[j].ingredient;
            if (ingredients.length == 0) {
                ingredients.push(ingredient.toLowerCase());
            } else {
                // to check if the ingredient already exist in the array
                let exist = false;
                for (let k = 0; k < ingredients.length; k++) {
                    if (ingredients[k].toLowerCase() == ingredient.toLowerCase()) {
                        exist = true;
                    }
                }
                if (!exist) {
                    ingredients.push(ingredient.toLowerCase());
                }
            }
        }
    }
    // to filter ingredients by value get in the input select
    if (search) {
        return ingredients.filter(ingredient => ingredient.includes(search));
    }
    return ingredients;
};

/**
 * 
 * @param {string} search value type in the input of select appliances
 * @returns Array of appliances (string)
 */
let getAllAppliances = (search) => {
    let appliances = [];
    for (let i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance;
        if (recipes.length == 0) {
            recipes.push(appliance.toLowerCase());
        } else {
            let exist = false;
            // to check if the appliance already exist in the array
            for (let j = 0; j < appliances.length; j++) {
                if (appliances[j].toLowerCase() == appliance.toLowerCase()) {
                    exist = true;
                }
            }
            if (!exist) {
                appliances.push(appliance.toLowerCase());
            }
        }
    }
    // to filter appliances by value get in the input select
    if (search) {
        return appliances.filter(appliance => appliance.includes(search));
    }
    return appliances;
};

/**
 * 
 * @param {string} search value type in the input of select ustensils
 * @returns Array of ustensils (string)
 */
let getAllUstensils = (search) => {
    let ustensils = [];
    for (let i = 0; i < recipes.length; i++) {
        let ustensilsArray = recipes[i].ustensils;
        let ustensilsLength = recipes[i].ustensils.length;
        for(let j = 0; j < ustensilsLength; j++) {
            let ustensil = ustensilsArray[j];
            if (ustensils.length == 0) {
                ustensils.push(ustensil.toLowerCase());
            } else {
                let exist = false;
                // to check if the ustensils already exist in the array
                for (let k = 0; k < ustensils.length; k++) {
                    if (ustensils[k].toLowerCase() == ustensil.toLowerCase()) {
                        exist = true;
                    }
                }
                if (!exist) {
                    ustensils.push(ustensil.toLowerCase());
                }
            }
        }
    }
    // to filter ustensils by value get in the input select
    if (search) {
        return ustensils.filter(ustensil => ustensil.includes(search));
    }
    return ustensils;
};

export {getRecipesCard, getAllIngredients, getAllAppliances, getAllUstensils};