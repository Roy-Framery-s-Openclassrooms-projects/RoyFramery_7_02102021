export default class Tag {
    constructor(tagName, color) {
        this.tagName = tagName
        this.color = color
    }

    get createTag() {
        return `
            <span class="tags__item tags__item--${this.color}">
                <p class="tags__name">${this.tagName}</p>
                <i class="far fa-times-circle fa-lg tags__close"></i>
            </span>
        `
    }
}