import {getAllIngredients, getAllAppliances, getAllUstensils} from '../service/api.js';

export default class Select {
    constructor(type, color) {
        this.type = type
        this.color = color
    }

    get createSelectElement() {
        return `
        <div class="filter__custom-select">
            <span class="filter__custom-arrow"></span>
            <input class="filter__select filter__select--${this.color}" type="button" data-color="${this.color}" value="${this.type}">
            <ul class="filter__custom-menu filter__custom-menu--${this.color}"></ul>
        </div>
        `
    }

    static getOptionsList = (optionsData, color) => {
        let selectoptions = ''
        optionsData.map(option => {
            selectoptions+= `<li class="filter__custom-option" data-color="${color}">${option.charAt(0).toUpperCase() + option.slice(1)}</li>`
        })
        return selectoptions
    }

    static initModalEvent = (button) => {
        const customMenu = button.nextElementSibling
        const customArrow = button.previousElementSibling
        const parentNode = button.parentNode
        const buttonValue = button.value
        if (!customMenu.classList.contains('filter__show')) {
            this.closeOpenedSelectMenuByClikingOnAnOtherSelect()
            this.openSelectMenu(customMenu, parentNode, customArrow)
            this.changeInputTypeInText(button, buttonValue)
        } else {
            this.closeSelectMenu(customMenu, parentNode, customArrow)
            this.changeInputTypeInButton(button)
        }

    }
    static openSelectMenu = (customMenu, parentNode, customArrow) => {
        customMenu.classList.add('filter__show')
        parentNode.style.width = '53%'
        customArrow.classList.add('filter__custom-arrow--rotate')
    }
    static closeSelectMenu = (customMenu, parentNode, customArrow) => {
        customMenu.classList.remove('filter__show')
        parentNode.style.width = '170px'
        customArrow.classList.remove('filter__custom-arrow--rotate')
    }

    static closeOpenedSelectMenuByClikingOnAnOtherSelect = () => {
        const allCustomMenu = document.querySelectorAll('.filter__custom-menu')
        allCustomMenu.forEach(customMenu => {
            if (customMenu.classList.contains('filter__show')) {
                this.closeSelectMenu(customMenu, customMenu.parentNode, customMenu.parentNode.firstElementChild)
                this.changeInputTypeInButton(customMenu.previousElementSibling)
            }
        })
    }

    static changeInputTypeInText = (button, buttonValue) => {
        button.setAttribute('type', 'text')
        button.setAttribute('data-value', `${buttonValue}`)
        button.removeAttribute('value')
        switch (buttonValue) {
            case 'Appareil':
                button.setAttribute('placeholder', 'Recherche un appareil')
                break;
            case 'Ingrédients':
                button.setAttribute('placeholder', 'Recherche un ingrédient')
                break;
            case 'Ustensiles':
                button.setAttribute('placeholder', 'Recherche un ustensile')
                break;
            default:
                break;
        }
        
    }

    static changeInputTypeInButton = (button) => {
        button.setAttribute('type', 'button')
        button.setAttribute('value', `${button.getAttribute('data-value')}`)
        button.removeAttribute('placeholder')
    }

    static getOptionsByButtonDataValue = (value, customMenu, filter) => {
        customMenu.innerHTML = ''
        switch (value) {
            case 'Ustensiles':
                return getAllUstensils(filter)
            case 'Appareil':
                return getAllAppliances(filter)
            case 'Ingrédients':
                return getAllIngredients(filter)
    
            default:
                break;
        }
    }

}