import Select from './class/Select.js';
import { insertOptionsToCustomList, initOptionsEvent } from './options.js';

/**
 * function that init event for each select to open or close the custom list
 */
let initSelectModal = () => {
    const selectButtons = document.querySelectorAll('.filter__select');
    selectButtons.forEach(select => {
        select.addEventListener('click', () => {
            Select.initModalEvent(select);
        });
    });
};

/**
 * function that searches for options based on the options in the list
 * @param {object[]} recipes 
 */
let initInputSelectEvent = (recipes) => {
    // to get all select
    const selectButtons = document.querySelectorAll('.filter__select');
    selectButtons.forEach(select => {
        select.addEventListener('input', () => {
            let options;
            const customMenu = select.nextElementSibling;
            const selectDataValue = select.getAttribute('data-value');
            const selectDataColor = select.getAttribute('data-color');
            if (select.value.length > 0) {
                options = Select.getOptionsByButtonDataValue(recipes, selectDataValue, select.value);

                insertOptionsToCustomList(options, customMenu, selectDataColor);
            } else {
                options = Select.getOptionsByButtonDataValue(recipes, selectDataValue);
                insertOptionsToCustomList(options, customMenu, selectDataColor);
            }
            initOptionsEvent();
        });
    });
    
};
export {initSelectModal, initInputSelectEvent};