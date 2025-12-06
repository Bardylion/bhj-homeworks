const hourElement = document.getElementById('timer_hour');
const minuteElement = document.getElementById('timer_minute');
const secondElement = document.getElementById('timer_second');

let hourLeft = parseInt(hourElement.textContent);
let minuteLeft = parseInt(minuteElement.textContent);
let secondLeft = parseInt(secondElement.textContent);

function updateTimer() {
    secondLeft -= 1;
    hourElement.textContent = hourLeft;
    minuteElement.textContent = minuteLeft;
    secondElement.textContent = secondLeft;
    
    if (secondLeft <= 0 && minuteLeft <= 0 && hourLeft <= 0 ) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        timerElement.textContent = '0';
    }
    if (secondLeft <= 0 && minuteLeft > 0) {
        minuteLeft -= 1 
        secondLeft = 60
    }
    if (secondLeft <= 0 && minuteLeft <= 0){
        hourLeft -= 1
        secondLeft = 60
    }
    if (secondLeft <= 0 && hourLeft <= 0){
        minuteLeft = 59
        secondLeft = 60
    }
}

    

const timerInterval = setInterval(updateTimer, 1000);