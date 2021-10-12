import recipes from './recipies.js'
import Card from '../class/Cards.js'

// const ingredients = [...new Set(recipes.map(recipe => recipe.ingredients.map(ingredient => ingredient.ingredient)))]

let getRecipesCard = () => {
    let cards = []
    recipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description))
    })
    return cards
}

let getAllIngredients = () => {
    let ingredients = []
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let ingredientLenght = recipes[i].ingredients.length
        for(let j = 0; j < ingredientLenght; j++) {
            let ingredient = recipe.ingredients[j].ingredient
            if (ingredients.length == 0) {
                ingredients.push(ingredient)
            } else {
                let exist = false
                for (let k = 0; k < ingredients.length; k++) {
                    if (ingredients[k].toLowerCase() == ingredient.toLowerCase()) {
                        exist = true
                    }
                }
                if (!exist) {
                    ingredients.push(ingredient)
                }
            }
        }
    }
    return ingredients
}

let getAllAppliances = () => {
    let appliances = []
    for (let i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance
        if (recipes.length == 0) {
            recipes.push(appliance)
        } else {
            let exist = false
            for (let j = 0; j < appliances.length; j++) {
                if (appliances[j].toLowerCase() == appliance.toLowerCase()) {
                    exist = true
                }
            }
            if (!exist) {
                appliances.push(appliance)
            }
        }
    }
    return appliances
}

let getAllUstensils = () => {
    let ustensils = []
    for (let i = 0; i < recipes.length; i++) {
        let ustensilsArray = recipes[i].ustensils
        let ustensilsLength = recipes[i].ustensils.length
        for(let j = 0; j < ustensilsLength; j++) {
            let ustensil = ustensilsArray[j]
            if (ustensils.length == 0) {
                ustensils.push(ustensil)
            } else {
                let exist = false
                for (let k = 0; k < ustensils.length; k++) {
                    if (ustensils[k].toLowerCase() == ustensil.toLowerCase()) {
                        exist = true
                    }
                }
                if (!exist) {
                    ustensils.push(ustensil)
                }
            }
        }
    }
    return ustensils
}


// TODO: getSelectByFilter (créer la class Select)

export {getRecipesCard, getAllIngredients, getAllAppliances, getAllUstensils}