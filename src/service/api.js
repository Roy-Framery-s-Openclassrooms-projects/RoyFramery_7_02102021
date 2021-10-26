import recipes from './recipies.js'
import Card from '../class/Card.js'

// let getAllIngredient = (search) => {
//     const ingredients = [...new Set(
//         recipes
//         .map(recipe => recipe.ingredients
//             .map(ingredient => ingredient.ingredient.toLowerCase()))
//             .flat()
//             .sort()
//             )
//         ]
//         if (search) {
//             return ingredients.filter((ingredient) => ingredient.contains(search))
//         }
//         return ingredients
// }

let getRecipesCard = (filters) => {
    let cards = []
    recipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils))
    })
    if (filters) {
        let filtredCards = []
        cards.filter(card => {
            let contain = []
            filters.forEach(filter => {
                const filterToLowerCase = filter[0].toLowerCase()
                if (filter[2] == 'Ustensiles') {
                    if (card.ustensils.includes(filterToLowerCase)) {
                        return contain.push(true)
                    } else {
                        return contain.push(false)
                    }
                }
                if (filter[2] == 'Appareil') {
                    if (card.appliance.toLowerCase().indexOf(filterToLowerCase) !== -1) {
                        return contain.push(true)
                    } else {
                        return contain.push(false)
                    }
                }
                if (filter[2] == 'Ingrédients') {
                    let ingredientsList = []
                    card.ingredients.map(ingredient => {
                        ingredientsList.push(ingredient.ingredient.toLowerCase())
                    })
                    if (ingredientsList.includes(filterToLowerCase)) {
                        return contain.push(true)
                    } else {
                        return contain.push(false)
                    }
                }
            })
            if (!contain.includes(false)) {
                filtredCards.push(card)
            }
        })
        return filtredCards
    }
    return cards
}

let getAllIngredients = (search) => {
    let ingredients = []
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let ingredientLenght = recipes[i].ingredients.length
        for(let j = 0; j < ingredientLenght; j++) {
            let ingredient = recipe.ingredients[j].ingredient
            if (ingredients.length == 0) {
                ingredients.push(ingredient.toLowerCase())
            } else {
                let exist = false
                for (let k = 0; k < ingredients.length; k++) {
                    if (ingredients[k].toLowerCase() == ingredient.toLowerCase()) {
                        exist = true
                    }
                }
                if (!exist) {
                    ingredients.push(ingredient.toLowerCase())
                }
            }
        }
    }
    if (search) {
        return ingredients.filter(ingredient => ingredient.includes(search))
    }
    return ingredients
}

let getAllAppliances = (search) => {
    let appliances = []
    for (let i = 0; i < recipes.length; i++) {
        let appliance = recipes[i].appliance
        if (recipes.length == 0) {
            recipes.push(appliance.toLowerCase())
        } else {
            let exist = false
            for (let j = 0; j < appliances.length; j++) {
                if (appliances[j].toLowerCase() == appliance.toLowerCase()) {
                    exist = true
                }
            }
            if (!exist) {
                appliances.push(appliance.toLowerCase())
            }
        }
    }
    if (search) {
        return appliances.filter(appliance => appliance.includes(search))
    }
    return appliances
}

let getAllUstensils = (search) => {
    let ustensils = []
    for (let i = 0; i < recipes.length; i++) {
        let ustensilsArray = recipes[i].ustensils
        let ustensilsLength = recipes[i].ustensils.length
        for(let j = 0; j < ustensilsLength; j++) {
            let ustensil = ustensilsArray[j]
            if (ustensils.length == 0) {
                ustensils.push(ustensil.toLowerCase())
            } else {
                let exist = false
                for (let k = 0; k < ustensils.length; k++) {
                    if (ustensils[k].toLowerCase() == ustensil.toLowerCase()) {
                        exist = true
                    }
                }
                if (!exist) {
                    ustensils.push(ustensil.toLowerCase())
                }
            }
        }
    }
    if (search) {
        return ustensils.filter(ustensil => ustensil.includes(search))
    }
    return ustensils
}

export {getRecipesCard, getAllIngredients, getAllAppliances, getAllUstensils}