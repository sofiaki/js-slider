var index = 1;
slideShow(index);

function nextSlide() {
  slideShow((index += 1));
}

function previousSlide() {
  slideShow((index -= 1));
}

function slideShow(n) {
  var slides = document.getElementsByClassName("slide");
  n > slides.length && (index = 1);
  n < 1 && (index = slides.length);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[index - 1].style.display = "block";
}

function autoPlay() {
  var slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";
  setTimeout("autoPlay()", 5000);
}
autoPlay();
