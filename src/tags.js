import Tag from './class/Tag.js';
import displayCard from './cards.js'
import {getRecipesCard} from './service/api.js';

const dom = {
    cardsSection : document.querySelector('.cards')
}


let displayTags = (optionsArray, tagsSection) => {
    tagsSection.innerHTML = ''
    optionsArray.map(option => {
        tagsSection.innerHTML += new Tag(option[0], option[1]).createTag
    }) 
}

let initTagsEvent = (optionsArray, tagsSection) => {
    if (optionsArray.length === 0) {
        displayCard(getRecipesCard(), dom.cardsSection)
    } else {
        const tagsCloseButton = document.querySelectorAll('.tags__close')
        tagsCloseButton.forEach(tagCloseButton => tagCloseButton.addEventListener('click', () => {
            optionsArray.splice(Array.from(tagsCloseButton).indexOf(tagCloseButton), 1)
            displayTags(optionsArray, tagsSection)
            initTagsEvent(optionsArray, tagsSection)
            displayCard(getRecipesCard(optionsArray), dom.cardsSection)
            })
        )
    }
}

export {displayTags, initTagsEvent}