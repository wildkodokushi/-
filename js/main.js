const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    button.classList.toggle('cross'); 
});

const blocks = document.querySelectorAll('.services__row-top__block');

blocks.forEach(block => {
  block.addEventListener('mouseover', () => {
    blocks.forEach(otherBlock => {
      if (otherBlock !== block) {
        otherBlock.classList.add('fade');
      }
    });
  });

  block.addEventListener('mouseout', () => {
    blocks.forEach(otherBlock => {
      otherBlock.classList.remove('fade');
    });
  });
});

document.querySelector('.header__menu-link a[href="#bunner"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const block = document.querySelectorAll('.services__row-top__block');

function onScroll() {
  const scrollPosition = window.scrollY;

  blocks.forEach((block, index) => {
    const blockPosition = block.offsetTop;
    if (scrollPosition >= blockPosition - 400) {
      block.classList.add('active');
      blocks.forEach((otherBlock, otherIndex) => {
        if (otherIndex !== index) {
          otherBlock.classList.remove('active');
        }
      });
    } else {
      block.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    blocks.forEach((block) => {
      block.style.flexBasis = '100%';
    });
  } else {
    blocks.forEach((block) => {
      block.style.flexBasis = 'auto';
    });
  }
});

let swiperCard = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,

  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  mousewheel: {
    forceToAxis: true,
  },
});
