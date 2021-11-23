import Tag from './class/Tag.js';
import { getFiltredRecipes } from './service/api.js';
import displayCards from './displayCards.js';
import recipesData from './service/recipes.js';
import { addOptionsToEachSelect, initOptionsEvent } from './options.js';

/**
 * 
 * @param {object[[string, string, string]]} optionsArray [option's value, color (danger, primary, success), type of the value(ustensil, appliance or ingredient)]
 */
let displayTag = (optionsArray) => {
    const tagsSection = document.querySelector('.tags');
    tagsSection.innerHTML = '';
    optionsArray.map(option => {
        const optionValue = option[0];
        const optionColor = option[1];
        tagsSection.insertAdjacentHTML('beforeend', new Tag(optionValue, optionColor).createTag);
    });
};

/**
 * function that allows to delete the tags
 * @param {object[[string, string, string]]} optionsArray [option's value, color (danger, primary, success), type of the value(ustensil, appliance or ingredient)]
 */
let initTagsEvent = (optionsArray) => {
    const tagsCloseButton = document.querySelectorAll('.tags__close');
    tagsCloseButton.forEach(tagCloseButton => tagCloseButton.addEventListener('click', () => {
        // To remove the tag
        optionsArray.splice(Array.from(tagsCloseButton).indexOf(tagCloseButton), 1);

        // To get new recipes
        const searchValue = document.querySelector('.search__input').value;
        let filtredRecipes = getFiltredRecipes(recipesData, optionsArray, searchValue);
        addOptionsToEachSelect(filtredRecipes);
        initOptionsEvent();
        
        if (optionsArray == 0) {
            filtredRecipes = getFiltredRecipes(recipesData, optionsArray, searchValue);
            addOptionsToEachSelect(filtredRecipes);
            initOptionsEvent();
        }
        // to display the new list of tags and reset the init
        displayTag(optionsArray);
        initTagsEvent(optionsArray, filtredRecipes);

        // to display recipes
        displayCards(filtredRecipes);
    }));
};

export {displayTag, initTagsEvent};