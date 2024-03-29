const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');

const slideContainer = document.querySelector('.slide__container');
const carouselImages = document.querySelectorAll('.slide__image');
//Length of the carouselImages will be 2 more

let counter = 1;
const size = 100;

slideContainer.style.transform = `translateX(${-size * counter}%)`;

const slideLeft = () => {
    if(counter >= carouselImages.length - 1) return;
    slideContainer.style.transition = `transform 0.8s ease-in-out`;
    counter++;
    slideContainer.style.transform = `translateX(${-size * counter}%)`; 
}

const slideRight = () => {
    if(counter <= 0) return;
    slideContainer.style.transition = `transform 0.8s ease-in-out`;
    counter--;
    console.log(counter);
    slideContainer.style.transform = `translateX(${-size * counter}%)`;
}
nextBtn.addEventListener('click', slideLeft);
prevBtn.addEventListener('click', slideRight);

slideContainer.addEventListener('transitionend', () => {
    if (counter == 0)
    {
        slideContainer.style.transition = `none`;
        counter = carouselImages.length - 2;
        slideContainer.style.transform = `translateX(${-size * counter}%)`;
    }
    if (counter == carouselImages.length - 1)
    {
        slideContainer.style.transition = `none`;
        console.log(`none`);
        counter = 1;
        slideContainer.style.transform = `translateX(${-size * counter}%)`;
    }
})
// Timer function
// setInterval(slideLeft, 2000);