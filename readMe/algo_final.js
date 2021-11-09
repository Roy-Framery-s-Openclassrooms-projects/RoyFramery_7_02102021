let getRecipesCardOnMainSearch = (filter) => {
    let filtredRecipes = [];
    let i = 0;
    while( i < recipes.length) {
        if (recipes[i].name.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipes[i]);
            i++;
            continue;
        }
        if (recipes[i].description.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipes[i]);
            i++;
            continue;
        }
        let j = 0;
        while ( j < recipes[i].ingredients.length) {
            if (recipes[i].ingredients[j].ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipes[i]);
                i++;
                break;
            }
            j++;
        }
        i++;
    }
    return filtredRecipes;
};
getRecipesCardOnMainSearch('lai');

let getRecipesCardOnMainSearch = (filter) => {
    let filtredRecipes = [];
    for (let recipe of recipes) {
        if (recipe.name.toLowerCase().indexOf(filter) > -1 || recipe.description.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipe);
            continue;
        }
        for (let ingredient of recipe.ingredients) {
            if (ingredient.ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipe);
                break;
            }
        }
    }
    return filtredRecipes;

};
getRecipesCardOnMainSearch('lai');

let getRecipesCardOnMainSearch = (filter) => {
    let filtredRecipes = [];
    for (let recipe in recipes) {
        let ingredients = recipes[recipe].ingredients;
        for (let ingredient in ingredients) {
            if (ingredients[ingredient].ingredient.toLowerCase().match(filter)) {
                filtredRecipes.push(recipes[recipe]);
            }
        }
        if (recipes[recipe].name.toLowerCase().match(filter)) {
            filtredRecipes.push(recipes[recipe]);
        }
        if (recipes[recipe].description.toLowerCase().match(filter)) {
            filtredRecipes.push(recipes[recipe]);
        }
    }
    for (let filtredRecipe in filtredRecipes) {
        let count = 0;
        for (let i = 0; i < filtredRecipes.length; i++) {
            if (filtredRecipes[filtredRecipe] == filtredRecipes[i]) {
                count++;
            }
        }
        if (count > 1) {
            filtredRecipes.splice(filtredRecipes.indexOf(filtredRecipes[filtredRecipe]), 1);
        }
    }
    return filtredRecipes;

};
getRecipesCardOnMainSearch('lai');