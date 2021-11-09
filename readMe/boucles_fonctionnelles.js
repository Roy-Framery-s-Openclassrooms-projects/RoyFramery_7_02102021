// filter

    let checkIfIngredientIsPresent = (recipe, filter) => {
        for (let i = 0; i < recipe.ingredients.length; i++) {  
            if (recipe.ingredients[i].ingredient.toLowerCase().indexOf(filter) > -1) {
                return recipe.ingredients[i].ingredient.toLowerCase().indexOf(filter) > -1;
            }
        }
    };

    let filtredRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().indexOf(filter) > -1 || recipe.description.toLowerCase().indexOf(filter) > -1 || checkIfIngredientIsPresent(recipe, filter);
    });
    return filtredRecipes;

// map
    
    let filtredRecipes = [];
    recipes.map(recipe => {
        let contain = false;
        if (recipe.name.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipe);
            contain = true;
        }
        if (!contain && recipe.description.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipe);
            contain = true;
        }
        recipe.ingredients.map(ingredient => {
            if (!contain && ingredient.ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipe);
            }
        });
    });
    return filtredRecipes;


// forEach

    let filtredRecipes = [];
    recipes.forEach(recipe => {
        let contain = false;
        if (recipe.name.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipe);
            contain = true;
        }
        if (!contain && recipe.description.toLowerCase().indexOf(filter) > -1) {
            filtredRecipes.push(recipe);
            contain = true;
        }
        recipe.ingredients.map(ingredient => {
            if (!contain && ingredient.ingredient.toLowerCase().indexOf(filter) > -1) {
                filtredRecipes.push(recipe);
            }
        });
    });
    return filtredRecipes;
