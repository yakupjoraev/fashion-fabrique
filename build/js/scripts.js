// Custom Scripts
// Custom scripts

function footerMobileAccordion() {
  const container = document.querySelector('.footer');

  if (!container) {
    return null;
  }

  const footerAccordionItems = document.querySelectorAll('[data-footer-accordion]');

  footerAccordionItems.forEach(footerAccordionItem => {
    footerAccordionItem.addEventListener('click', () => {
      footerAccordionItem.classList.toggle('active');
    });
  });
}

footerMobileAccordion();

function productsSlider() {
  const containers = document.querySelectorAll('.products-slider__slider');
  if (!containers || containers.length === 0) {
    return null;
  }

  containers.forEach(container => {
    const sliderIndex = container.getAttribute('data-slider');

    const swiper = new Swiper(container, {
      cssMode: true,
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
        nextEl: container.querySelector(`[data-slider-next="${sliderIndex}"]`),
        prevEl: container.querySelector(`[data-slider-prev="${sliderIndex}"]`),
      },
    });
  });
}

productsSlider();





function heroSlider() {
  const container = document.querySelector('.hero');

  if (!container) {
    return null
  }

  const swiper = new Swiper('.hero__slider', {
    // cssMode: true,
    slidesPerView: 1,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hero__slider-pagination",
      clickable: true,
    },
  });
}
heroSlider();

class HvrSlider {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (el.querySelectorAll('img').length > 1) {
        const hvr = document.createElement('div');
        hvr.classList.add('hvr');

        const hvrImages = document.createElement('div');
        hvrImages.classList.add('hvr__images');
        hvr.appendChild(hvrImages);

        const hvrSectors = document.createElement('div');
        hvrSectors.classList.add('hvr__sectors');
        hvrImages.appendChild(hvrSectors);

        const hvrDots = document.createElement('div');
        hvrDots.classList.add('hvr__dots');
        hvr.appendChild(hvrDots);

        el.parentNode.insertBefore(hvr, el);
        hvrImages.prepend(el);

        const hvrImagesArray = hvr.querySelectorAll('img');
        hvrImagesArray.forEach(() => {
          hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
          hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
        });
        hvrDots.firstChild.classList.add('hvr__dot--active');
        const setActiveEl = function (targetEl) {
          const index = [...hvrSectors.children].indexOf(targetEl);
          hvrImagesArray.forEach((img, idx) => {
            if (index == idx) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
          hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
            if (index == idx) {
              dot.classList.add('hvr__dot--active');
            } else {
              dot.classList.remove('hvr__dot--active');
            }
          });
        };
        hvrSectors.addEventListener('mouseover', function (e) {
          if (e.target.matches('.hvr__sector')) {
            setActiveEl(e.target);
          }
        });
        hvrSectors.addEventListener('touchmove', function (e) {
          const position = e.changedTouches[0];
          const target = document.elementFromPoint(position.clientX, position.clientY);
          if (target.matches('.hvr__sector')) {
            setActiveEl(target);
          }
        });
      }
    });
  }
}

if (window.matchMedia("(min-width: 1025px)").matches) {
  new HvrSlider('.pictures-slider');
}


