document.addEventListener("DOMContentLoaded", () => {


    let btnPrev = document.querySelector(".slider__btn-prev");
    let btnNext = document.querySelector(".slider__btn-next");
    let slides = document.querySelectorAll(".slides__item");

    let counter = 0;
    let allSlides = slides.length;

    // Boton siguiente
    btnNext.addEventListener("click", () => {
        counter++;

        if (counter >= allSlides) {
            counter = 0;
        }


       activeSlides(counter);

    });

    //Boton anterior

    btnPrev.addEventListener("click", () => {
        counter--;

        if (counter < 0) {
            counter = allSlides - 1; //ultimo slide
        }

        activeSlides(counter);
        

    });

    // Activar slides

    let activeSlides = (index) => {

        clearActives();

        slides[index].classList.add("slides__item--active")

    }

    // limpiar activados

    let clearActives = () => {
        slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        });
    };


    





});


