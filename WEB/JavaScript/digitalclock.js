
const $ = (selector) => document.querySelector(selector);
const hour = $('.hour');
const dot = $('.dot');
const min = $('.min');
const week = $('.week');
let showDot = true;

function toggleDot() {
    showDot = !showDot;
    dot.classList.toggle('invisible', showDot);
}

function updateTime() {
    const now = new Date();
    
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');

    Array.from(week.children).forEach(ele => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');
}

setInterval(toggleDot, 500);
setInterval(updateTime, 1000); // Updates time every second
updateTime(); // Ensures clock updates immediately on load
