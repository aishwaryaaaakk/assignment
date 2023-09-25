let slides = document.querySelectorAll('#slideshow img');
let slideIndex = 0;
let slideInterval;

function showSlide(index){
    slides.forEach((slide,i)=>{
        if(i === index){
            slide.style.display = 'block';
        }
        else{
            slide.style.display = 'none';
        }
    })
}
// Automation Starts

function startSlideShow(){
    slideInterval = setInterval(()=>{
        slideIndex = (slideIndex + 1)% slides.length;
        showSlide(slideIndex);
        console.log(slideIndex)
    }, 2000)
}

function stopSlideShow(){
    clearInterval(slideInterval);
}

function toggleSlide(){
    if(slideInterval){
        stopSlideShow();
        slideInterval=null;
    }
    else{
        startSlideShow();
    }
}

function nextSlide(){
    stopSlideShow();
    slideIndex = (slideIndex + 1)% slides.length;
    showSlide(slideIndex)
}
nextSlide();

function previousSlide(){
    stopSlideShow();
    slideIndex = (slideIndex - 1)% slides.length;
    if(slideIndex < 0 ){
        slideIndex += slides.length ;
    }
    showSlide(slideIndex)
}
previousSlide();

showSlide(slideIndex)