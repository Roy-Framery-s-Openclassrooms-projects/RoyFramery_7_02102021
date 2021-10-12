import {getRecipesCard, getAllIngredients, getAllAppliances, getAllUstensils} from './src/service/api.js'
import Select from './src/class/Select.js'

// console.log(getAllIngredients())
// console.log(getAllAppliances())
// console.log(getAllUstensils())

const dom = {
    filter : document.querySelector('.filter'),
    cardsSection : document.querySelector('.cards')
}
const cards = getRecipesCard()
cards.map(card => dom.cardsSection.insertAdjacentHTML('beforeend', card.createRecipeCard))

const ingredientsSelect = new Select(getAllIngredients(), 'Ingrédients', 'primary')
const appliancesSelect = new Select(getAllAppliances(), 'Appareil', 'success')
const ustensilssSelect = new Select(getAllUstensils(), 'Ustensiles', 'danger')
dom.filter.insertAdjacentHTML('beforeend', ingredientsSelect.createSelectElement + appliancesSelect.createSelectElement + ustensilssSelect.createSelectElement)

Select.init()