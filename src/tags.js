import Tag from './class/Tag.js';
import displayCard from './cards.js'
import {getRecipesCard} from './service/api.js';

const dom = {
    cardsSection : document.querySelector('.cards')
}

/**
 * 
 * @param {object.<[[string, string, string]]>} optionsArray [name of the filter, the color of the tag, the type of the filter]
 * @param {HTMLElement} tagsSection the dom element that contain tags
 */
let displayTags = (optionsArray, tagsSection) => {
    tagsSection.innerHTML = ''
    optionsArray.map(option => {
        tagsSection.innerHTML += new Tag(option[0], option[1]).createTag
    }) 
}

/**
 * 
 * @param {object.<[[string, string, string]]>} optionsArray [name of the filter, the color of the tag, the type of the filter]
 * @param {HTMLElement} tagsSection the dom element that contain tags
 */
let initTagsEvent = (optionsArray, tagsSection) => {
    // if (optionsArray.length === 0) {
    //     displayCard(getRecipesCard(), dom.cardsSection)
    // } else {
        const tagsCloseButton = document.querySelectorAll('.tags__close');
        tagsCloseButton.forEach(tagCloseButton => tagCloseButton.addEventListener('click', () => {
            // To remove the tag
            optionsArray.splice(Array.from(tagsCloseButton).indexOf(tagCloseButton), 1);

            // to display the new list of tags and reset the init
            displayTags(optionsArray, tagsSection);
            initTagsEvent(optionsArray, tagsSection);

            // To display the cards after the modification of the list of tags
            displayCard(getRecipesCard(optionsArray), dom.cardsSection);
        }));
    // }
};


export {displayTags, initTagsEvent};