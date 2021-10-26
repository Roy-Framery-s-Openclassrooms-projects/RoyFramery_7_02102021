import recipes from './recipies.js'
import Card from '../class/Card.js'

let getRecipesCardOnMainSearch = (filter) => {
    let cards = []
    recipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils))
    })
    let search;
    console.log(filter)
    cards.filter(card => {
        let ingredientsArray = []
        card.ingredients.map(ingredient => {
            ingredientsArray.push(ingredient.ingredient.toLowerCase())
        })
        if (card.title.toLowerCase().includes(filter)) {
            return search = 'title';
            
        } 
        // else if (card.description.includes(filter)) {
        //     search = 'description'
        // } 
        // else if (ingredientsArray.includes(filter)) {
        //     search = 'ingredient';
        // }
    })
    if (search == 'title') {
        return cards.filter(card => card.title.toLowerCase().includes(filter))
    } 
    // else if (search == 'description') {
    //     return cards.filter(card => card.description.toLowerCase().includes(filter))
    // } else if (search == 'ingredient') {
    //     console.log(cards.filter(card => {
    //         card.ingredients.filter(ingredient => console.log(ingredient.ingredient))
    //     }))
    //     return cards.filter(card => {
    //         card.ingredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(filter))
    //     })
    // }
}

export default getRecipesCardOnMainSearch