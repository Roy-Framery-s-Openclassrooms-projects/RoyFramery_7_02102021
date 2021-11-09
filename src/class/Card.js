/**
 * Class to create a Card
 */

 export default class Card {
    /**
     * 
     * @param {string} title the name of the recipe
     * @param {number} time the cooking time
     * @param {Array{}} ingredients 
     * @param {String} description 
     * @param {string} appliance 
     * @param {Array.<string>} ustensils 
     */
    constructor(title, time, ingredients, description, appliance, ustensils){
        this.title = title;
        this.time = time;
        this.ingredients = ingredients;
        this.description = description;
        this.appliance = appliance;
        this.ustensils = ustensils.map(ustensil => ustensil.toLowerCase());
    }

    /**
     * 
     * @param {string} unit 
     * @returns a formated string
     */
    formateUnit(unit) {
        switch (unit) {
            case 'grammes':
                return 'g';
            case 'ml':
            case 'cl':
            case 'kg':
                return `${unit}`;
            default:
                return ` ${unit}`;
        }
    }

    /**
     * 
     * @param {Array{}} ingredients 
     * @returns a string that contain Dom Element for the list of ingredient
     */
    createIngredientsList(ingredients) {
        let ingredientList = ``;
        ingredients.map(ingredient => {
            if (ingredient.quantity && !ingredient.unit) {
                ingredientList += `<li class="card__ingredient"><span class="card__ingredient--bold">${ingredient.ingredient}:</span> ${ingredient.quantity}</li>`;
            } else if (ingredient.unit) {
                ingredientList += `<li class="card__ingredient"><span class="card__ingredient--bold">${ingredient.ingredient}:</span> ${ingredient.quantity}${this.formateUnit(ingredient.unit)}</li>`;
            } else  {
                ingredientList += `<li class="card__ingredient"><span class="card__ingredient--bold">${ingredient.ingredient}</span></li>`;
            }
        });
        return ingredientList;
    }

    /**
     * To construct the Dom Element of a Card
     * @return A string that correspond to a Dom Element that cotain the Card
     */
    get createRecipeCard() {
        return `
        <article class="card">
            <a href="#">
                <div class="card__thumb"></div>
                <div class="card__body">
                    <div class="card__head">
                        <h2 class="card__title">${this.title}</h2>
                        <div class="card__time">
                            <i class="far fa-clock"></i>
                            <p class="card__minutes">${this.time} min</p>
                        </div>
                    </div>
                    <div class="card__content">
                        <ul class="card__ingredients">${this.createIngredientsList(this.ingredients)}</ul>
                        <p class="card__description">${this.description}</p>
                    </div>
                </div>
            </a>
        </article>
        
        `;
    }
}