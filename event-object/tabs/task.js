document.addEventListener('DOMContentLoaded', function() {
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabIndex = Array.from(tabs).indexOf(this);

                tabs.forEach(t => t.classList.remove('tab_active'));

                this.classList.add('tab_active');
                contents.forEach(content => content.classList.remove('tab__content_active'));
                if (contents[tabIndex]) {
                    contents[tabIndex].classList.add('tab__content_active');
                }
            });
        });
    });
});