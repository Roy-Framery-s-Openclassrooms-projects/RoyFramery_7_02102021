import recipes from './recipes.js';
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
    const ingredients = [...new Set(
        recipes
        .map(recipe => recipe.ingredients
            .map(ingredient => ingredient.ingredient.toLowerCase()))
            .flat()
            .sort()
            )
        ];
        if (search) {
            return ingredients.filter((ingredient) => ingredient.includes(search));
        }
        return ingredients;
};

/**
 * 
 * @param {string} search value type in the input of select appliances
 * @returns Array of appliances (string)
 */
let getAllAppliances = (search) => {
    const appliances = [...new Set(
        recipes
        .map(recipe => recipe.appliance.toLowerCase())
        .sort()
    )]
    if (search) {
        return appliances.filter(appliance => appliance.includes(search))
    }
    return appliances
}

/**
 * 
 * @param {string} search value type in the input of select ustensils
 * @returns Array of ustensils (string)
 */
let getAllUstensils = (search) => {
    const ustensils = [...new Set(
        recipes
        .map(recipe => recipe.ustensils
            .map(ustensil => ustensil.toLowerCase()))
            .flat()
            .sort()
            )
        ];

    if (search) {
        return ustensils.filter((ustensil) => ustensil.includes(search));
    }
    return ustensils
}

export {getRecipesCard, getAllIngredients, getAllAppliances, getAllUstensils}