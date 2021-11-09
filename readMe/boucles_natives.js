// for
    let filtredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipes[i]);
            continue;
        }
        if (recipes[i].description.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipes[i]);
            continue;
        }
        for (let j=0; j <recipes[i].ingredients.length; j++) {
            if (recipes[i].ingredients[j].ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipes[i]);
                break;
            }
        }
    }
    return filtredRecipes;
    
// while
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

// do... while
    let filtredRecipes = [];
    let i = 0;
    do {
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
        do {
            if (recipes[i].ingredients[j].ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipes[i]);
                i++;
                break;
            }
            j++;
        } while ( j < recipes[i].ingredients.length);
        i++;
    } while (i < recipes.length);
    return filtredRecipes;

// for...of
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

// for...in
    let cards = [];
    for (let recipe in recipes) {
        if (recipes[recipe].name.toLowerCase().indexOf(filter) > -1 || recipes[recipe].description.toLowerCase().indexOf(filter) > -1) {
            cards.push(recipes[recipe]);
            continue;
        }
        let ingredients = recipes[recipe].ingredients;
        for (let ingredient in ingredients) {
            if (ingredients[ingredient].ingredient.toLowerCase().indexOf(filter) > -1) {
                cards.push(recipes[recipe]);
                break;
            }
        }
    }
    return cards;
