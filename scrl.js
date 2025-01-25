const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const scrollContainer = document.querySelector('.scrollmenu');
const gridItems = document.querySelectorAll('.scrollmenu .d-grid-4');
const indicators = document.querySelectorAll('.menu-indicators .indicator');
const itemWidth = gridItems[0].offsetWidth; 

let currentIndex = 0;
function moveSlider(direction) {
    if (direction === 'next') {
        currentIndex++;
        if (currentIndex >= gridItems.length) currentIndex = 0; 
    } else {
        currentIndex--;
        if (currentIndex < 0) currentIndex = gridItems.length - 1;
    }
    
    scrollContainer.scrollTo({
        left: itemWidth * currentIndex,
        behavior: 'smooth'
    });
    updateIndicators();
}

function updateIndicators() {
    indicators.forEach(indicator => indicator.classList.remove('active'));
    if (indicators[currentIndex]) {
        indicators[currentIndex].classList.add('active');
    }
}
nextButton.addEventListener('click', () => moveSlider('next'));
prevButton.addEventListener('click', () => moveSlider('prev'));
scrollContainer.addEventListener('scroll', () => {
    currentIndex = Math.round(scrollContainer.scrollLeft / itemWidth);
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= gridItems.length) currentIndex = gridItems.length - 1;
    updateIndicators();
});
updateIndicators();
