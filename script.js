document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.oper');
  const steps = document.querySelectorAll('.step');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      let tabIndex = this.getAttribute('data-tab');

      tabs.forEach(tab => tab.classList.remove('active-2'));
      steps.forEach(step => step.classList.remove('active-1'));

      this.classList.add('active-2');
      document.getElementById(`step-${tabIndex}`).classList.add('active-1');
    });
  });
});
// -----------------
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function updateSliderPosition() {
  const offset = -currentIndex * 33.33;
  slider.style.transform = `translateX(${offset}%)`;
}

// ------
const dots = document.querySelectorAll('.dot');

function updateActiveDot() {
  dots.forEach(dot => dot.classList.remove('active-3'));
  dots[currentIndex].classList.add('active-3');
}

function goToSlide(index) {
  currentIndex = index;
  updateSliderPosition();
  updateActiveDot();
}

// --------
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
  updateActiveDot();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
  updateActiveDot();
}

setInterval(nextSlide, 5000);

function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onclick = function (event) {
  let modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
