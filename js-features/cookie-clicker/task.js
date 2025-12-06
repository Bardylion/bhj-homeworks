const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

const speedElement = document.createElement('div');
speedElement.className = 'clicker__speed';
speedElement.innerHTML = 'Скорость клика: <span id="clicker__speed">0</span> кликов/сек';

document.querySelector('.clicker__status').appendChild(speedElement);

const speedCounter = document.getElementById('clicker__speed');

let clickCount = parseInt(counterElement.textContent);
let lastClickTime = null;
let currentSpeed = 0;

function updateSpeed() {
    const now = new Date();
    
    if (lastClickTime !== null) {
        const timeDiff = (now - lastClickTime) / 1000;   
        currentSpeed = 1 / timeDiff;
        speedCounter.textContent = currentSpeed.toFixed(2);
    }
    lastClickTime = now;
}


cookieElement.onclick = function() {
    clickCount += 1;
    counterElement.textContent = clickCount;
    
    updateSpeed();
    
    if (this.width === 200) {
        this.width = 180;
        this.height = 180;
    } else {
        this.width = 200;
        this.height = 200;
    }
};

lastClickTime = new Date();