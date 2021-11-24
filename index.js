const imgArray = ['slide__image1', 'slide__image2', 'slide__image3'];
const dir = `Assets/Images/`;
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
console.log(prevBtn);
let currentSlide = 0;
let nextSlide = currentSlide + 1;
const totalSlide = 3;
prevBtn.addEventListener('click', function()
{
    console.log(currentSlide, nextSlide);

    const currentImg = document.querySelector(`.${imgArray[currentSlide]}`);
    const nextImg = document.querySelector(`.${imgArray[nextSlide]}`);
    currentImg.style.transform = `translateX(-100%)`;
    nextImg.style.transform = `translateX(-100%)`;
    currentSlide = (currentSlide + 1) % 3;
    nextSlide = (currentSlide + 1) % 3;
    
});