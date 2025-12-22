document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControl = document.querySelector('.book__control_font-size');
    const fontSizeButtons = fontSizeControl.querySelectorAll('.font-size');
    const book = document.getElementById('book');
    
    fontSizeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            fontSizeButtons.forEach(btn => {
                btn.classList.remove('font-size_active');
            });
            
            this.classList.add('font-size_active');
            const size = this.dataset.size;
            book.classList.remove('book_fs-small', 'book_fs-big');
            
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });
});