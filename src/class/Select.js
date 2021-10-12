export default class Select {
    constructor(optionsData, type, color) {
        this.optionsData = optionsData
        this.type = type
        this.color = color
    }

    static init () {
        const selectButtons = document.querySelectorAll('.filter__select')
        const filterSection = document.querySelector('.filter')
        selectButtons.forEach(button => button.addEventListener('click', () => {
            const customMenu = button.nextElementSibling
            const customArrow = button.previousElementSibling
            const parentNode = button.parentNode
            const buttonValue = button.value
            if (!customMenu.classList.contains('filter__show')) {
                this.closeOpenedSelectMenuByClikingOnAnOtherSelect()
                this.openSelectMenu(customMenu, parentNode, customArrow)
                this.changeInputTypeInText(button, buttonValue)
                filterSection.style.marginBottom = '82px'
            } else {
                this.closeSelectMenu(customMenu, parentNode, customArrow)
                this.changeInputTypeInButton(button)
                filterSection.style.marginBottom = '0'
            }
        }))
    }
    get createSelectElement() {
        return `
        <div class="filter__custom-select">
            <span class="filter__custom-arrow"></span>
            <input class="filter__select filter__select--${this.color}" type="button" value="${this.type}">
            <ul class="filter__custom-menu filter__custom-menu--${this.color}">
                ${this.selectOptions()}
            </ul>
        </div>
        `
    }

    selectOptions = () => {
        let selectoptions = ''
        this.optionsData.map(option => {
            selectoptions+= `<li class="filter__custom-option">${option}</li>`
        })
        return selectoptions
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
        button.setAttribute('placeholder', 'Recherche un ingrédient')
    }
    static changeInputTypeInButton = (button) => {
        button.setAttribute('type', 'button')
        button.setAttribute('value', `${button.getAttribute('data-value')}`)
        button.removeAttribute('placeholder')
    }
}