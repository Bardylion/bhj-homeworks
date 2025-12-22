document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');
    
    rotators.forEach(rotator => {
        const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
        let currentIndex = cases.findIndex(el => el.classList.contains('rotator__case_active'));
        
        if (currentIndex === -1) {
            currentIndex = 0;
            cases[0].classList.add('rotator__case_active');
        }
        
        setInterval(() => {
            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex++;
            
            if (currentIndex >= cases.length) {
                currentIndex = 0;
            }
            
            cases[currentIndex].classList.add('rotator__case_active');
        }, 1000);
    });
});