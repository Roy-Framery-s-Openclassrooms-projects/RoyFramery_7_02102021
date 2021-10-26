import Select from './class/Select.js';
import {displayTags, initTagsEvent} from './tags.js'
import {getRecipesCard} from './service/api.js';
import displayCard from './cards.js'

const dom = {
    cardsSection : document.querySelector('.cards')
}
let displayOptionsInCustomMenu = (customMenuElement, SelectInput, color, filter) => {
    customMenuElement.innerHTML = ''
    let optionValues;
    if (filter) {
        optionValues = Select.getOptionsByButtonDataValue(SelectInput.getAttribute('data-value'), customMenuElement, SelectInput.value.toLowerCase())
    } else {
        optionValues = Select.getOptionsByButtonDataValue(SelectInput.getAttribute('data-value'), customMenuElement)
    }
    customMenuElement.insertAdjacentHTML('beforeend', Select.getOptionsList(optionValues, color))
}

let optionsArray = []
let initOptionsMenuEvent = () => {
    const optionsMenu = document.querySelectorAll('.filter__custom-option')
    optionsMenu.forEach(optionMenu => optionMenu.addEventListener('click', () => {
        const optionValue = optionMenu.innerText;
        const optionColor = optionMenu.getAttribute('data-color');
        const optionType = optionMenu.parentNode.previousElementSibling.getAttribute('data-value');
        if(checkIfOptionIsNotPresent(optionsArray, [optionValue, optionColor, optionType])){
            optionsArray.push([optionValue, optionColor, optionType])
        }
        // Display tags
        const tagsSection = document.querySelector('.tags');
        displayTags(optionsArray, tagsSection);
        initTagsEvent(optionsArray, tagsSection);

        // To close options list
        const parentNode = optionMenu.parentNode;
        const filterContainer = parentNode.parentNode;
        const filterArrow = filterContainer.firstChild.nextElementSibling;
        const InputSelect = parentNode.previousElementSibling;
        Select.closeSelectMenu(parentNode, filterContainer, filterArrow)
        Select.changeInputTypeInButton(InputSelect)

        // to display all options
        displayOptionsInCustomMenu(optionMenu.parentNode, optionMenu.parentNode.previousElementSibling, optionMenu.parentNode.previousElementSibling.getAttribute('data-color'));
        initOptionsMenuEvent();
        const cards = getRecipesCard(optionsArray);
        displayCard(cards, dom.cardsSection);
    }))
}

let checkIfOptionIsNotPresent = (optionsArray, option) => {
    return JSON.stringify(optionsArray).indexOf(JSON.stringify(option)) == -1
}
export {displayOptionsInCustomMenu, initOptionsMenuEvent, checkIfOptionIsNotPresent}