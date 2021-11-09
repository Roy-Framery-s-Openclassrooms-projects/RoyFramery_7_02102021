import Select from './class/Select.js';
import {displayOptionsInCustomMenu, initOptionsMenuEvent} from './options.js';

let initSelectEvent = () => {

    // Select init event
    const selectButtons = document.querySelectorAll('.filter__select');
    selectButtons.forEach(button => button.addEventListener('click', () => {
        Select.initModalEvent(button);
        // to get the container of the list on actual button
        const customMenuElement = button.nextElementSibling;
    
        // To display the options list 
        displayOptionsInCustomMenu(customMenuElement, button, button.getAttribute('data-color'));
    
        // Init event when user type in the seach bar of the select
        button.addEventListener('input', () => {
            if (button.value.length > 2) {
                // Will return options witch match with the input's value
                displayOptionsInCustomMenu(customMenuElement, button, button.getAttribute('data-color'),  button.value.toLowerCase());
                
                // init event for the new list of options
                initOptionsMenuEvent();
            } else {
                // To get the complete list of options if button.value.length =< 2
                displayOptionsInCustomMenu(customMenuElement, button, button.getAttribute('data-color'));
    
                // init event for the new list of options
                initOptionsMenuEvent();
            }
        });
        initOptionsMenuEvent();
    }));
};

export default initSelectEvent;


