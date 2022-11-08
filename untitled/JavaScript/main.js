function openModal(myModal) {
    document.getElementById(myModal).style.display = "block";
}

function closeModal(myModal) {
    document.getElementById(myModal).style.display = "none";
}

let classname = "";
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, m) {
    if (m === 1) {
        classname = "amur-dog";
    } else if (m === 2) {
        classname = "izabella-cat";
    } else if (m === 3) {
        classname = "panamka-cat";
    } else if (m === 4) {
        classname = "zara-dog";
    }
    showSlides(slideIndex += n, classname);
}

function currentSlide(n, m) {
    if (m === 1) {
        classname = "amur-dog";
    } else if (m === 2) {
        classname = "izabella-cat";
    } else if (m === 3) {
        classname = "panamka-cat";
    } else if (m === 4) {
        classname = "zara-dog";
    }
    showSlides(slideIndex = n, classname);
}

function showSlides(n, classname) {
    let i;
    let slides = document.getElementsByClassName(classname);


    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

