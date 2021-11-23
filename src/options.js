import Select from './class/Select.js';
import { displayTag, initTagsEvent } from './tags.js';
import recipesData from './service/recipes.js';
import { getFiltredRecipes } from './service/api.js';
import displayCards from './displayCards.js';
import { initInputSelectEvent } from "./SelectEvent.js";

let insertOptionsToCustomList = (options, customMenu, color) => {
    customMenu.innerHTML = '';
    customMenu.insertAdjacentHTML('beforeend', Select.getOptionsList(options, color));
};

let addOptionsToEachSelect = (recipesData) => {
    const selectButtons = document.querySelectorAll('.filter__select');
    selectButtons.forEach(select => {
        const options = Select.getOptionsByButtonDataValue(recipesData, select.value ? select.value : select.getAttribute('data-value'));
        insertOptionsToCustomList(options, select.nextElementSibling, select.getAttribute('data-color'));
    });
};


let optionsArray = [];
let initOptionsEvent = () => {
    const options = document.querySelectorAll('.filter__custom-option');
    options.forEach(option => option.addEventListener('click', () => {
        const optionValue = option.innerHTML;
        const optionColor = option.getAttribute('data-color');
        const input = option.parentNode.previousElementSibling;
        const optionType = input.getAttribute('data-value') ? input.getAttribute('data-value') : input.getAttribute('value') ;

        // To check if the option is already present in the array
        if(checkIfOptionIsNotPresent(optionsArray, [optionValue, optionColor, optionType])){
            optionsArray.push([optionValue, optionColor, optionType]);
        }

        // To display tags on page
        displayTag(optionsArray);
        
        // to display recipes
        const searchValue = document.querySelector('.search__input').value;
        const recipes = getFiltredRecipes(recipesData, optionsArray, searchValue);
        displayCards(recipes);
        
        // to init close button for each tag
        initTagsEvent(optionsArray);

        // to close select
        const optionParentNode = option.parentNode;
        const filterContainer = optionParentNode.parentNode;
        const filterArrow = filterContainer.firstChild.nextElementSibling;
        const InputSelect = optionParentNode.previousElementSibling;
        Select.closeSelectMenu(optionParentNode, filterContainer, filterArrow);
        Select.changeInputTypeInButton(InputSelect);
        
        // To update options in each select
        addOptionsToEachSelect(recipes);
        
        // to init options
        initOptionsEvent();
        // To init input search of select
        initInputSelectEvent(recipes);
    }));
};

let checkIfOptionIsNotPresent = (optionsArray, option) => {
    return JSON.stringify(optionsArray).indexOf(JSON.stringify(option)) == -1;
};

export { addOptionsToEachSelect, insertOptionsToCustomList, initOptionsEvent };
