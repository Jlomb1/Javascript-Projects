//Countdown function-------------------------------------------------------------------
function count_Down() {
    var seconds = document.getElementById("Seconds").value;

    function tick() {
        seconds = seconds - 1;
        Timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //1000 being 1000 milliseconds i.e. 1 second
        if (seconds == -1) {
            alert ("Time's up!");
            clearTimeout(time);
            Timer.innerHTML = "";
        }
    }
    tick();
}

//Slideshow function------------------------------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides (slideIndex = n);
}

function showSlides (n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("Dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}