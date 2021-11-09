let getRecipesCardOnMainSearch = (filter) => {

};
getRecipesCardOnMainSearch('ver');
// filter
    // TODO: inverser les conditions au niveau du return

    // indexOF BEST
        let indexOf = (recipe, filter) => {
            for (let i = 0; i < recipe.ingredients.length; i++) {  
                if (recipe.ingredients[i].ingredient.toLowerCase().indexOf(filter) > -1) {
                    return recipe.ingredients[i].ingredient.toLowerCase().indexOf(filter) > -1;
                }
            }
        };

        let filtredRecipes = recipes.filter(recipe => {
            return recipe.name.toLowerCase().indexOf(filter) > -1 || recipe.description.toLowerCase().indexOf(filter) > -1 || indexOf(recipe, filter);
        });
        return filtredRecipes;

    // includes WORST
        let includes = (recipe, filter) => {
            for (let i = 0; i < recipe.ingredients.length; i++) {  
                if (recipe.ingredients[i].ingredient.toLowerCase().includes(filter)) {
                    return recipe.ingredients[i].ingredient.toLowerCase().includes(filter);
                }
            }
        };

        let filtredRecipes = recipes.filter(recipe => {
            return recipe.name.toLowerCase().includes(filter) || recipe.description.toLowerCase().includes(filter) || includes(recipe, filter);
        });
        return filtredRecipes;

// map
    
    // TODO: mettre les ingredients en premier
    // TODO: mettre les deux if ensemble
    // indexOf BEST
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

    // includes WORST
        let filtredRecipes = [];
        recipes.map(recipe => {
            let contain = false;
            if (recipe.name.toLowerCase().includes(filter)) {
                filtredRecipes.push(recipe);
                contain = true;
            }
            if (!contain && recipe.description.toLowerCase().includes(filter)) {
                filtredRecipes.push(recipe);
                contain = true;
            }
            recipe.ingredients.map(ingredient => {
                if (!contain && ingredient.ingredient.toLowerCase().includes(filter)) {
                    filtredRecipes.push(recipe);
                }
            });
        });
        return filtredRecipes;

// forEach

    // TODO: mettre les ingredients en premier
    // TODO: mettre les deux if ensemble
    // indexOf
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

    // includes
        let filtredRecipes = [];
        recipes.forEach(recipe => {
            let contain = false;
            if (recipe.name.toLowerCase().includes(filter)) {
                filtredRecipes.push(recipe);
                contain = true;
            }
            if (!contain && recipe.description.toLowerCase().includes(filter)) {
                filtredRecipes.push(recipe);
                contain = true;
            }
            recipe.ingredients.map(ingredient => {
                if (!contain && ingredient.ingredient.toLowerCase().includes(filter)) {
                    filtredRecipes.push(recipe);
                }
            });
        });
        return filtredRecipes;

// reduce
