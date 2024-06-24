document.addEventListener('DOMContentLoaded', function () {
    const endTime = new Date().getTime() + 12 * 60 * 60 * 1000;

    function updateCountdown() {
        const now = new Date().getTime();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            document.getElementById('hours-text').innerText = '00';
            document.getElementById('minutes-text').innerText = '00';
            document.getElementById('seconds-text').innerText = '00';
            return;
        }

        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        document.getElementById('hours-text').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes-text').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds-text').innerText = String(seconds).padStart(2, '0');

        const hoursPercentage = (hours / 12) * 100;
        const minutesPercentage = (minutes / 60) * 100;
        const secondsPercentage = (seconds / 60) * 100;

        updateCircle('hours-circle', hoursPercentage, '#4caf50');
        updateCircle('minutes-circle', minutesPercentage, '#ff9800');
        updateCircle('seconds-circle', secondsPercentage, '#f44336');
    }

    function updateCircle(id, percentage, color) {
        const element = document.getElementById(id);
        const degree = (percentage / 100) * 360;
        if (degree <= 180) {
            element.style.background = `linear-gradient(${90 + degree}deg, transparent 50%, rgb(223, 214, 214) 50%), linear-gradient(90deg, ${color} 50%, transparent 50%)`;
        } else {
            element.style.background = `linear-gradient(${degree - 90}deg, transparent 50%, ${color} 50%), linear-gradient(90deg, ${color} 50%, transparent 50%)`;
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
