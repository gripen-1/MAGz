function displaySecret1() {
    alert("Did you know, the name 'MAGz' stands for 'My awesome games'?");
}


document.addEventListener("DOMContentLoaded", function () {
    gsap.fromTo("ul", 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(".mainBox", 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );

    gsap.fromTo(".contactBox", 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

