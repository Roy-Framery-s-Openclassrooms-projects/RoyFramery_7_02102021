import {getAllIngredients, getAllAppliances, getAllUstensils} from '../service/api.js';

/**
 * Class to create a Select
 */
export default class Select {
    /**
     * 
     * @param {string} type to determine the type of the select
     * @param {string} color to determine the background color of the select
     */
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    /**
     * To construct the Dom Element of a select
     * @return A string that correspond to a Dom Element that cotain the select
     */
    get createSelectElement() {
        return `
        <div class="filter__custom-select">
            <span class="filter__custom-arrow"></span>
            <input class="filter__select filter__select--${this.color}" type="button" data-color="${this.color}" value="${this.type}">
            <ul class="filter__custom-menu filter__custom-menu--${this.color}"></ul>
        </div>
        `;
    }

    /**
     * 
     * @param {object[]} optionsData Array of strings
     * @param {string} color 
     * @returns A string that contain all dom Element for each options
     */
    static getOptionsList = (optionsData, color) => {
        let selectoptions = '';
        optionsData.map(option => {
            selectoptions+= `<li class="filter__custom-option" data-color="${color}">${option.charAt(0).toUpperCase() + option.slice(1)}</li>`;
        })
        return selectoptions;
    }

    /**
     * 
     * @param {HTMLElement} button The select buttons
     */
    static initModalEvent = (button) => {
        // to get Dom Elements to interact with
        const customMenu = button.nextElementSibling;
        const customArrow = button.previousElementSibling;
        const parentNode = button.parentNode;
        const buttonValue = button.value;
        if (!customMenu.classList.contains('filter__show')) {
            this.closeOpenedSelectMenuByClikingOnAnOtherSelect()
            this.openSelectMenu(customMenu, parentNode, customArrow);
            this.changeInputTypeInText(button, buttonValue);
        } else {
            this.closeSelectMenu(customMenu, parentNode, customArrow);
            this.changeInputTypeInButton(button);
        }
    };

    /**
     * 
     * @param {HTMLElement} customMenu The list of options <ul>...</ul>
     * @param {HTMLElement} parentNode The parent node of button
     * @param {HTMLElement} customArrow The arrow of the Select
     */
    static openSelectMenu = (customMenu, parentNode, customArrow) => {
        customMenu.classList.add('filter__show');
        parentNode.style.width = '53%';
        customArrow.classList.add('filter__custom-arrow--rotate');
    };

    /**
     * 
     * @param {HTMLElement} customMenu The list of options <ul>...</ul>
     * @param {HTMLElement} parentNode The parent node of button
     * @param {HTMLElement} customArrow The arrow of the Select
     */
    static closeSelectMenu = (customMenu, parentNode, customArrow) => {
        customMenu.classList.remove('filter__show');
        parentNode.style.width = '170px';
        customArrow.classList.remove('filter__custom-arrow--rotate');
    };

    /**
     * 
     */
    static closeOpenedSelectMenuByClikingOnAnOtherSelect = () => {
        const allCustomMenu = document.querySelectorAll('.filter__custom-menu');
        allCustomMenu.forEach(customMenu => {
            if (customMenu.classList.contains('filter__show')) {
                this.closeSelectMenu(customMenu, customMenu.parentNode, customMenu.parentNode.firstElementChild);
                this.changeInputTypeInButton(customMenu.previousElementSibling);
            }
        });
    };

    /**
     * 
     * @param {HTMLElement} button the input of the select
     * @param {String} buttonValue the type of the select (appliance, ingredient or ustensil)
     */
    static changeInputTypeInText = (button, buttonValue) => {
        button.setAttribute('type', 'text');
        button.setAttribute('data-value', `${buttonValue}`);
        button.removeAttribute('value');
        switch (buttonValue) {
            case 'Appareil':
                button.setAttribute('placeholder', 'Recherche un appareil');
                break;
            case 'Ingrédients':
                button.setAttribute('placeholder', 'Recherche un ingrédient');
                break;
            case 'Ustensiles':
                button.setAttribute('placeholder', 'Recherche un ustensile');
                break;
            default:
                break;
        }
        
    };

    /**
     * 
     * @param {HTMLElement} button the input of the select
     */
    static changeInputTypeInButton = (button) => {
        button.setAttribute('type', 'button');
        button.setAttribute('value', `${button.getAttribute('data-value')}`);
        button.removeAttribute('placeholder');
    };

    /**
     * 
     * @param {string} value the type of the select buton (ingredient, appliance or ustensil)
     * @param {HTMLElement} customMenu the options list <ul>...</ul> 
     * @param {string} filter the value that the user type in the input
     * @returns 
     */
    static getOptionsByButtonDataValue = (recipes, value, filter) => {
        switch (value) {
            case 'Ustensiles':
                return getAllUstensils(recipes, filter);
            case 'Appareil':
                return getAllAppliances(recipes, filter);
            case 'Ingrédients':
                return getAllIngredients(recipes, filter);
    
            default:
                break;
        }
    };

}