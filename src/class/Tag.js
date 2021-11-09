/**
 * Class to create a Tag
 */
 export default class Tag {
    /**
     * 
     * @param {string} tagName 
     * @param {string} color 
     */
    constructor(tagName, color) {
        this.tagName = tagName;
        this.color = color;
    }

    /**
     * To construct the Dom Element of a tag
     * @return A string that correspond to a Dom Element that cotain the Tag
     */
    get createTag() {
        return `
            <span class="tags__item tags__item--${this.color}">
                <p class="tags__name">${this.tagName}</p>
                <i class="far fa-times-circle fa-lg tags__close"></i>
            </span>
        `;
    }
}