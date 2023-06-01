const images = document.querySelectorAll('.slider img');

let index = 0;

function changeImage() {
  images[index].classList.remove('active');
  index = (index + 1) % images.length;
  images[index].classList.add('active');
}

function showPrevImage() {
  images[index].classList.remove('active');
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add('active');
}



images[index].classList.add('active');
setInterval(changeImage, 3000);