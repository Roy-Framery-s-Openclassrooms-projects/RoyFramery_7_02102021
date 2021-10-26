let displayCard = (cards, cardsSection) => {
    cardsSection.innerHTML = '';
    if (cards == 0) {
        cardsSection.insertAdjacentHTML('beforeend', `
        <div class="cards__no-recipes">
            <div class="cards__no-recipes-image">
                <img class="cards__no-recipes-logo" src="./public/images/no_recipes.svg" alt="">
                <img class="cards__no-recipes-circle" src="./public/images/forbidden.svg" alt="">
            </div>
            <p class="cards__no-recipes-text">Aucune recette ne correspond à votre critère… vous pouvez
            chercher « limonade de Coco », « thon », etc.</p>
        </div>
        `)
        cardsSection.style.gridTemplateColumns = '1fr'
    } 
    else {
        cards.map(card => cardsSection.insertAdjacentHTML('beforeend', card.createRecipeCard));
        cardsSection.style.gridTemplateColumns = '1fr 1fr 1fr'
    }
}

export default displayCard