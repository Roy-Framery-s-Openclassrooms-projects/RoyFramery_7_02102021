import Cards from './class/Card.js';

/**
 * 
 * @param {object[]} recipes 
 * @returns return a message if there are no recipes to display
 */
let displayCards = (recipes) => {
    const cardsSection = document.querySelector('.cards');
    cardsSection.innerHTML = '';
    // To display the message if no recipes find and remove the message if there are
    if (recipes == 0 && !document.querySelector('.cards__no-recipes')) {
        return cardsSection.insertAdjacentHTML('beforebegin', `
        <div class="cards__no-recipes">
            <div class="cards__no-recipes-image">
                <img class="cards__no-recipes-logo" src="./public/images/no_recipes.svg" alt="">
                <img class="cards__no-recipes-circle" src="./public/images/forbidden.svg" alt="">
            </div>
            <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… vous pouvez
            chercher « limonade de Coco », « thon », etc.</p>
        </div>
        `);
    } else {
        // to remove the message
        if (document.querySelector('.cards__no-recipes') && recipes != 0) {
            document.querySelector('.cards__no-recipes').remove();
        }
    }
    let cards = [];
    // To create a card for each recipes
    for (const recipe of recipes) {
        cards.push(new Cards(recipe.name, recipe.time, recipe.ingredients, recipe.description, recipe.appliance, recipe.ustensils));
    }

    // To insert dom cards
    cards.map(card => cardsSection.insertAdjacentHTML('beforeend', card.createRecipeCard));
};

export default displayCards;