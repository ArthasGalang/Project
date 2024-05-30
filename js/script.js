let slideIndex = 1;
let timer;

showSlides(slideIndex);
autoShowSlides();
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  clearTimeout(timer);
  autoShowSlides();
}

function autoShowSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  timer = setTimeout(autoShowSlides, 5000);
}


//----------------------------------------------------


const observer = new IntersectionObserver((entries => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      }
  });
}));

const hiddenElements  = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const oberserl = new IntersectionObserver((entries => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
          entry.target.classList.add('showleft');
      }
  });
}));

const hiddenElementsl  = document.querySelectorAll('.hiddenleft');
hiddenElementsl.forEach((el) => oberserl.observe(el));


//----------------------------------------------------


function showContent(contentId) {
  var tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(function(tab) {
      if (tab.id === contentId) {
          tab.style.display = 'block';
      } else {
          tab.style.display = 'none';
      }
  });
}


//----------------------------------------------------


    function openModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "block";
  }


  function closeModal(modalId) {
      var modal = document.getElementById(modalId);
      modal.style.display = "none";
  }