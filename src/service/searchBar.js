import recipes from './recipies.js';
import Card from '../class/Card.js';

let getRecipesCardOnMainSearch = (filter) => {

    let cards = [];
    recipes.map(recipe => {
        cards.push(new Card(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
    });
    let filteredCards = [];
    let i = 0;
    while (i < cards.length - 1) {
        if (cards[i].title.toLowerCase().includes(filter)) {
            filteredCards.push(cards[i]);
            i++;
            continue;
        } 
        else if (cards[i].description.includes(filter)) {
            filteredCards.push(cards[i]);
            i++;
            continue;
        }
        let j = 0;
        while (j < cards[i].ingredients.length - 1) {
            if (cards[i].ingredients[j].ingredient.toLowerCase().includes(filter)) {
                filteredCards.push(cards[i]);
                j++;
                i++;
                continue;
            }
            j++;
        }
        i++;
    }
    
    return filteredCards;

}

export default getRecipesCardOnMainSearch