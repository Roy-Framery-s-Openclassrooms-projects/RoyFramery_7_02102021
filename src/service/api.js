import recipes from './recipies.js';
import Card from '../class/Card.js';

let getRecipesCard = (filters) => {
    let cards = recipes
        .map(recipe => new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
    
    if (filters) {
        // let filtredCards = [];
        // for (let card of cards) {
        //     for (let filter of filters) {
        //         if (filter[2] == 'Ustensiles' && card.ustensils.indexOf(filter[0]) > -1) {
        //             filtredCards.push(card);
        //             continue;
        //         }
        //         if (filter[2] == 'Appareil' && card.appliance.toLowerCase().indexOf(filter[0]) > -1) {
        //             filtredCards.push(card);
        //             continue;
        //         }
        //         if (filter[2] == 'Ingrédients') {
        //             filtredCards.push(card);
        //             continue;
        //         }
        //     }
        // }
        // return filtredCards

        let filtredCards = []
        cards.filter(card => {
            let contain = []
            filters.forEach(filter => {
                if (filter[2] == 'Ustensiles') {
                    if (card.ustensils.includes(filter[0])) {
                        return contain.push(true)
                    } else {
                        return contain.push(false)
                    }
                }
                if (filter[2] == 'Appareil') {
                    if (card.appliance.toLowerCase().indexOf(filter[0]) !== -1) {
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
                    if (ingredientsList.includes(filter[0])) {
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