function runSlider() {
    let listImg = document.getElementsByClassName("img-item");
    let listArt = document.getElementsByClassName("article-item");
    let prevBtn = document.getElementById("previous");
    let nextBtn = document.getElementById("next");
    let currentSlide = 1;
    let currentArticle = 1;
    slideshow(currentSlide);
    artshow(currentArticle);

    function slideshow() {
        let i;
        if (currentSlide > listImg.length) {
            currentSlide = 1
        }
        if (currentSlide < 1) {
            currentSlide = listImg.length
        }
        for (i = 0; i < listImg.length; i++) {
            listImg[i].style.display = "none";
        }
        listImg[currentSlide - 1].style.display = "block";
    }

    function artshow() {
        let i;
        if (currentArticle > listArt.length) {
            currentArticle = 1
        }
        if (currentArticle < 1) {
            currentArticle = listArt.length
        }
        for (i = 0; i < listArt.length; i++) {
            listArt[i].style.display = "none";
        }
        listArt[currentArticle - 1].style.display = "block";
    }
    nextBtn.addEventListener("click", function() {
        slideshow(currentSlide += 1);
        artshow(currentArticle += 1);
    });
    prevBtn.addEventListener("click", function() {
        slideshow(currentSlide += -1);
        artshow(currentArticle += -1);
    });
}

runSlider();