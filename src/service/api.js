/**
 * 
 * @param {object[]} recipes 
 * @param {object.<[[string, string, string]]>} filters [name of the filter, the color of the tag, the type of the filter]
 * @param {string} search value of main search bar
 * @returns an array of recipes cards (filtred or not)
 */
let getFiltredRecipes = (recipes, filters, search) => {
    let filtredRecipes = [];

    // If the filters if present
    if (filters != 0) {
        recipes.map(recipe => {
            let contain = [];

            // for each card, I go through each filter
            filters.forEach(filter => {
                // to get the value (the name of ingredient, ustensil or appliance) of the filter
                const filterToLowerCase = filter[0].toLowerCase();

                // chack by type of the filter
                if (filter[2] == 'Ustensiles') {
                    if (recipe.ustensils.includes(filterToLowerCase)) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
                if (filter[2] == 'Appareil') {
                    if (recipe.appliance.toLowerCase().indexOf(filterToLowerCase) !== -1) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
                if (filter[2] == 'Ingrédients') {
                    let ingredientsList = [];
                    recipe.ingredients.map(ingredient => {
                        ingredientsList.push(ingredient.ingredient.toLowerCase());
                    });
                    if (ingredientsList.includes(filterToLowerCase)) {
                        return contain.push(true);
                    } else {
                        return contain.push(false);
                    }
                }
            });
            // if the array "contain" don't includes a false
            if (!contain.includes(false)) {
                filtredRecipes.push(recipe);
            }
        });
    } else {
        recipes.map(recipe => filtredRecipes.push(recipe));
    }

    // To filter cards by search value
    if (search.length > 2) {
        let filtredCards = filtredRecipes.filter(card => {
            return card.name.toLowerCase().indexOf(search) > -1 || card.description.toLowerCase().indexOf(search) > -1 || checkIfIngredientIsPresent(card, search);
        });
        return filtredCards;
    }
    return cards;
};

/**
 * 
 * @param {object[]} recipe recipes
 * @param {string} search value of the search bar
 * @returns Boolean
 */
let checkIfIngredientIsPresent = (recipe, search) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {  
        if (recipe.ingredients[i].ingredient.toLowerCase().indexOf(search) > -1) {
            return recipe.ingredients[i].ingredient.toLowerCase().indexOf(search) > -1;
        }
    }
};

/**
 * 
 * @param {object[]} recipesData Correspond to an array that contain recipes
 * @param {string} search value type in the input of select ingredients
 * @returns Array of ingredients (string)
 */
let getAllIngredients = (recipesData, search) => {
    const ingredients = [...new Set(
        recipesData
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
 * @param {object[]} recipesData Correspond to an array that contain recipes
 * @param {string} search value type in the input of select appliances
 * @returns Array of appliances (string)
 */
let getAllAppliances = (recipesData, search) => {
    const appliances = [...new Set(
        recipesData
        .map(recipe => recipe.appliance.toLowerCase())
        .sort()
    )];
    if (search) {
        return appliances.filter(appliance => appliance.includes(search));
    }
    return appliances;
};

/**
 * 
 * @param {object[]} recipesData Correspond to an array that contain recipes
 * @param {string} search value type in the input of select ustensils
 * @returns Array of ustensils (string)
 */
let getAllUstensils = (recipesData, search) => {
    const ustensils = [...new Set(
        recipesData
        .map(recipe => recipe.ustensils
            .map(ustensil => ustensil.toLowerCase()))
            .flat()
            .sort()
            )
        ];

    if (search) {
        return ustensils.filter((ustensil) => ustensil.includes(search));
    }
    return ustensils;
};

export { getFiltredRecipes, getAllIngredients, getAllAppliances, getAllUstensils };