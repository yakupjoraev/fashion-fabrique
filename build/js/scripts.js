// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const burgerClose = document.querySelector('.full-menu__burger')
  const menu = document.querySelector('.full-menu')
  // const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      // burger.classList.add('active-burger')
      // body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    }
  })

  burgerClose.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active-burger')
  })

  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.full-menu__link', '.full-menu__sublink')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      // body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
// function fixedNav() {
//   const nav = document.querySelector('nav')

//   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//   const breakpoint = 1
//   if (window.scrollY >= breakpoint) {
//     nav.classList.add('fixed__nav')
//   } else {
//     nav.classList.remove('fixed__nav')
//   }
// }
// window.addEventListener('scroll', fixedNav)
function filters() {
  const container = document.querySelector('.filters')

  if (!container) {
    return null
  }

  const filtersBtn = document.querySelector('[data-btn-filters]');
  const filtersContent = document.querySelector('[data-filters-content]');
  const filterItems = document.querySelectorAll('[data-filters-items]');

  filtersBtn.addEventListener('click', function () {
    filtersContent.classList.toggle('active');
    filtersBtn.classList.toggle('active');
  });

  filterItems.forEach(filterItem => {
    const head = filterItem.querySelector('[data-filters-items-head]');
    const content = filterItem.querySelector('[data-filters-items-content]');

    head.addEventListener('click', () => {
      // Перед открытием текущего элемента фильтра, закрываем все другие элементы
      filterItems.forEach(item => {
        if (item !== filterItem) {
          item.classList.remove('active');
        }
      });
      filterItem.classList.toggle('active');
    })
  });

  // Добавляем обработчик клика для всего документа
  document.addEventListener('click', function (event) {
    const isFilterItem = event.target.closest('[data-filters-items]');

    // Если клик был вне элементов filterItem, убираем класс active у всех элементов
    if (!isFilterItem) {
      filterItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
}

filters();


function sort() {
  const container = document.querySelector('.filters')

  if (!container) {
    return null
  }

  const sortBtn = document.querySelector('[data-btn-sort]');
  const sortContent = document.querySelector('[data-sort-content]');
  const sortItems = document.querySelectorAll('[data-sort-items]');

  sortBtn.addEventListener('click', function () {
    sortContent.classList.toggle('active');
    sortBtn.classList.toggle('active');
  });

  sortItems.forEach(sortItem => {
    const head = sortItem.querySelector('[data-sort-items-head]');
    const content = sortItem.querySelector('[data-sort-items-content]');

    head.addEventListener('click', () => {
      // Перед открытием текущего элемента сортировки, закрываем все другие элементы
      sortItems.forEach(item => {
        if (item !== sortItem) {
          item.classList.remove('active');
        }
      });
      sortItem.classList.toggle('active');
    })
  });

  // Добавляем обработчик клика для всего документа
  document.addEventListener('click', function (event) {
    const isSortItem = event.target.closest('[data-sort-items]');

    // Если клик был вне элементов sortItem, убираем класс active у всех элементов
    if (!isSortItem) {
      sortItems.forEach(item => {
        item.classList.remove('active');
      });
    }
  });
}

sort();





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


