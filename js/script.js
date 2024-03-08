let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll('.social-icons i');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('bounce');
        });

        icon.addEventListener('mouseout', () => {
            icon.classList.remove('bounce');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchOverlay = document.getElementById('searchOverlay');

    searchIcon.addEventListener('click', function() {
        searchOverlay.style.display = 'flex';
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            searchOverlay.style.display = 'none';
        }
    });
});


const digitalCol = document.querySelector('.fl-col.digital');
const itCol = document.querySelector('.fl-col.it');
const designCol = document.querySelector('.fl-col.design');
const programmingCol = document.querySelector('.fl-col.programming');

digitalCol.addEventListener('mouseover', () => changeColor(digitalCol, 'eggplant'));
digitalCol.addEventListener('mouseout', () => resetColor(digitalCol));

itCol.addEventListener('mouseover', () => changeColor(itCol, 'yellow'));
itCol.addEventListener('mouseout', () => resetColor(itCol));

designCol.addEventListener('mouseover', () => changeColor(designCol, 'green'));
designCol.addEventListener('mouseout', () => resetColor(designCol));

programmingCol.addEventListener('mouseover', () => changeColor(programmingCol, 'blue'));
programmingCol.addEventListener('mouseout', () => resetColor(programmingCol));

function changeColor(element, color) {
    switch(color) {
        case 'eggplant':
            element.style.backgroundColor = "#991199";  
            break;
        case 'yellow':
            element.style.backgroundColor = "#FFFF00";  
            break;
        case 'green':
            element.style.backgroundColor = "#00FF00";  
            break;
        case 'blue':
            element.style.backgroundColor = "#0000FF"; 
            break;
        default:
            element.style.backgroundColor = ""; 
    }
}

function resetColor(element) {
    element.style.backgroundColor = ""; 
}

function animateValue(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.querySelector(element);
    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

document.addEventListener("DOMContentLoaded", function() {
    animateValue('[data-id="counter"]', 0, 3000, 2000);  
    animateValue('[data-id="career"]', 0, 427, 2000);  
    animateValue('[data-id="leader"]', 0, 95, 2000);  
    animateValue('[data-id="replenishment"]', 0, 43, 2000);  
});


