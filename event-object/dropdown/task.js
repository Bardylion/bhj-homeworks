document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        valueElement.addEventListener('click', function(event) {
            closeAllDropdowns();
            listElement.classList.toggle('dropdown__list_active');
        });
        
        items.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                const link = this.querySelector('.dropdown__link');
                const newValue = link.textContent.trim();
                valueElement.textContent = newValue;
                listElement.classList.remove('dropdown__list_active');
            });
        });
    });
    
    function closeAllDropdowns() {
        const allLists = document.querySelectorAll('.dropdown__list');
        allLists.forEach(list => {
            list.classList.remove('dropdown__list_active');
        });
    }
    
    document.addEventListener('click', function(event) {
        const isDropdownClick = event.target.closest('.dropdown');
        if (!isDropdownClick) {
            closeAllDropdowns();
        }
    });
});