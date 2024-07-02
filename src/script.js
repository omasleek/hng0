document.addEventListener('DOMContentLoaded', function() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 1000);
});