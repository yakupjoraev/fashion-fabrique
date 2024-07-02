// Custom Scripts
// Custom scripts
// Мобильное меню бургер

function burgerMenu() {
  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.full-menu__burger');
  const menu = document.querySelector('.full-menu');
  const body = document.querySelector('body');

  const closeMenu = () => {
    menu.classList.remove('active');
    body.classList.remove('locked');
  };

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      body.classList.add('locked');
    } else {
      closeMenu();
    }
  });

  burgerClose.addEventListener('click', closeMenu);

  const menuItems = document.querySelectorAll('.full-menu__link, .full-menu__sublink');
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      closeMenu();
      burger.classList.remove('active-burger');
    }
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      closeMenu();
    }
  });
}

burgerMenu();






// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedHeader() {
  const header = document.querySelector('.header');
  const headerInner = document.querySelector('.header__inner');

  // указываем в пикселях, сколько нужно проскроллить, чтобы наше меню стало фиксированным
  const breakpoint = 100; // изменено значение на 500px

  if (window.scrollY >= breakpoint) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
}

window.addEventListener('scroll', fixedHeader);


function menuBtns() {
  const container = document.querySelector('.full-menu');

  if (!container) {
    return null;
  }

  let items = document.querySelectorAll('.full-menu__item');
  let activeItem = null; // Переменная для хранения текущего активного элемента

  items.forEach(item => {
    const btn = item.querySelector('.full-menu__btn');
    const sublist = item.querySelector('.full-menu__sublist');

    if (btn && sublist) {
      btn.addEventListener('click', () => {
        if (activeItem && activeItem !== item) {
          activeItem.querySelector('.full-menu__sublist').classList.remove('active');
        }
        sublist.classList.toggle('active');
        activeItem = item; // Обновляем активный элемент
      });
    }

    const sublinks = item.querySelectorAll('.full-menu__sublink');
    sublinks.forEach(sublink => {
      sublink.addEventListener('click', event => {
        event.stopPropagation();
        sublist.classList.remove('active');
      });
    });

    const links = item.querySelectorAll('.full-menu__link');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.stopPropagation();
        items.forEach(item => {
          const sublist = item.querySelector('.full-menu__sublist');
          if (sublist) {
            sublist.classList.remove('active');
          }
        });
        activeItem = null; // Сбрасываем текущий активный элемент
      });
    });
  });

  const handleClick = event => {
    const target = event.target;
    const isMenuClicked = container.contains(target);
    const isSublinkClicked = target.classList.contains('full-menu__sublink');
    const isLinkClicked = target.classList.contains('full-menu__link'); // Проверяем, был ли клик на full-menu__link

    if (!isMenuClicked && !isSublinkClicked && !isLinkClicked) {
      items.forEach(item => {
        const sublist = item.querySelector('.full-menu__sublist');
        if (sublist) {
          sublist.classList.remove('active');
        }
      });

      activeItem = null; // Сбрасываем текущий активный элемент
    }
  };

  document.addEventListener('click', handleClick);
}

menuBtns();









document.querySelectorAll('.custom-select').forEach(select => {
  const trigger = select.querySelector('.custom-select-trigger');
  const options = select.querySelector('.custom-options');

  trigger.addEventListener('click', () => {
    options.classList.toggle('open');
  });

  select.querySelectorAll('.custom-option').forEach(option => {
    option.addEventListener('click', () => {
      trigger.textContent = option.textContent;
      select.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
      options.classList.remove('open');
    });
  });

  window.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      options.classList.remove('open');
    }
  });
});








document.addEventListener('DOMContentLoaded', () => {
  const togglePasswordButtons = document.querySelectorAll('.registration__input-eye');

  if (togglePasswordButtons.length > 0) {
    togglePasswordButtons.forEach(button => {
      button.addEventListener('click', () => {
        const inputWrapper = button.closest('.registration__input-wrapper');
        const passwordInput = inputWrapper.querySelector('.registration__input');
        const eyeIcon = button.querySelector('.registration__input-eye-icon');

        if (passwordInput && eyeIcon) {
          if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.src = './img/icons/eye-open.svg';
            eyeIcon.alt = 'eye-open icon';
          } else {
            passwordInput.type = 'password';
            eyeIcon.src = './img/icons/eye-close.svg';
            eyeIcon.alt = 'eye-close icon';
          }
        }
      });
    });
  }
});






function accardion() {
  const container = document.querySelector('[data-accardion]')

  if (!container) {
    return null
  }

  const accordionItems = document.querySelectorAll('[data-accardion-item]');

  accordionItems.forEach(item => {
    const head = item.querySelector('[data-accardion-head]');
    const content = item.querySelector('[data-accardion-content]');

    head.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all accordion items before opening a new one
      accordionItems.forEach(el => el.classList.remove('active'));

      if (!isOpen) {
        item.classList.add('active');
      }
    });

    // Close the accordion item if clicking on the content
    content.addEventListener('click', () => {
      item.classList.remove('active');
    });
  });

  // Add click handler for clicking outside the accordion
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the click happened inside the accordion or its headers
    if (!container.contains(target) && !target.closest('[data-accardion-head]')) {
      // Remove active classes from all accordion items
      accordionItems.forEach(el => el.classList.remove('active'));
    }
  });
}

accardion();



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

function viewBtns() {
  const container = document.querySelector('.filters__header-btns');

  if (!container) {
    return null;
  }

  const buttons = document.querySelectorAll('[data-btn-view]'); // Изменено на выбор по атрибуту
  const catalogList = document.querySelector('.catalog__list');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const viewClass = 'view-' + this.dataset.btnView;
      catalogList.className = 'catalog__list ' + viewClass;

      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

viewBtns();



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

function sertificateCards() {

  const container = document.querySelector('.card-gift__cards');

  if (!container) {
    return null;
  }

  // Находим все элементы .accardion__item-design
  const designItems = document.querySelectorAll(".accardion__item-design");

  // Находим все элементы .card-gift__card
  const cardItems = document.querySelectorAll(".card-gift__card");

  // Добавляем обработчик события клика на каждый элемент .accardion__item-design
  designItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Удаляем класс active у всех .card-gift__card
      cardItems.forEach(function (card) {
        card.classList.remove("active");
      });

      // Получаем значение атрибута data-card-btn у текущего элемента
      const cardBtn = item.getAttribute("data-card-btn");

      // Находим соответствующий элемент .card-gift__card и добавляем ему класс active
      const correspondingCard = document.querySelector(`.card-gift__card[data-card="${cardBtn}"]`);
      if (correspondingCard) {
        correspondingCard.classList.add("active");
      }
    });
  });
}

sertificateCards();



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

function producrSlider() {
  const containers = document.querySelectorAll('.product__sliders');
  if (!containers || containers.length === 0) {
    return null;
  }


  var swiper = new Swiper(".product__slider-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3.5,
    freeMode: true,
    // Добавьте параметр mousewheel и установите его в true
    freeModeMomentum: true, // Добавьте эту опцию
    mousewheel: true,
    watchSlidesProgress: true,

    // Responsive breakpoints
    breakpoints: {

      991: {
        direction: "vertical",
        freeModeMomentum: true, // Добавьте эту опцию
        mousewheel: true,
        mousewheel: {
          releaseOnEdges: true,
        },
      }
    }
  });
  var swiper2 = new Swiper(".product__slider-main", {
    spaceBetween: 10,
    pagination: {
      el: ".product__slider-main-pagination",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },

  });
}

producrSlider();



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

function texnicalLinks() {
  const container = document.querySelector('.tehnical__links');

  if (!container) {
    return null
  }
  const links = document.querySelectorAll(".tehnical__link");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop - 20; // добавляем 20px сверху

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });
}

texnicalLinks();

function range() {
  const container = document.querySelector('.filters__range');

  if (!container) {
    return;
  }

  let sliderOne = container.querySelector(".slider-1");
  let sliderTwo = container.querySelector(".slider-2");
  let displayValOne = container.querySelector(".values__range1");
  let displayValTwo = container.querySelector(".values__range2");
  let sliderTrack = container.querySelector(".slider-track");

  if (!sliderOne || !sliderTwo || !displayValOne || !displayValTwo || !sliderTrack) {
    console.error('Не удалось найти один или несколько элементов');
    return;
  }

  let minGap = 0;
  let sliderMaxValue = sliderOne.max;

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = `${sliderOne.value} р.`;
    fillColor();
  }

  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = `${sliderTwo.value} р.`;
    fillColor();
  }

  function fillColor() {
    let percent1 = (sliderOne.value / sliderMaxValue) * 100;
    let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #eee ${percent1}%, #000 ${percent1}%, #000 ${percent2}%, #eee ${percent2}%)`;
  }

  sliderOne.addEventListener("input", slideOne);
  sliderTwo.addEventListener("input", slideTwo);

  // Вызываем функции slideOne и slideTwo после добавления слушателей
  slideOne();
  slideTwo();
}

range();


function checkOutAccordion() {
  const container = document.querySelector('.check-out');

  if (!container) {
    return;
  }

  let rows = document.querySelectorAll('.check-out__row');

  rows.forEach(row => {
    const btn = row.querySelector('.check-out__head')
    const content = row.querySelector('.check-out__content')

    btn.addEventListener('click', () => {
      row.classList.toggle('active')
    })
  });
}
checkOutAccordion();

function deliveryRadios() {
  const container = document.querySelector('.check-out');

  if (!container) {
    return;
  }

  const deliveryRadios = document.querySelectorAll('input[type="radio"][name="delivery"]');
  const radioFormContents = document.querySelectorAll('.radio-form-content');

  // Функция для обновления класса active у формы в зависимости от выбранного радио-инпута
  function updateActiveForm() {
    radioFormContents.forEach(form => {
      const dataDelivery = form.getAttribute('data-delivery');
      const correspondingRadio = document.getElementById(`delivery-${dataDelivery}`);

      if (correspondingRadio.checked) {
        form.classList.add('active');
      } else {
        form.classList.remove('active');
      }
    });
  }

  // Обработчик события для радио-инпутов
  deliveryRadios.forEach(radio => {
    radio.addEventListener('change', updateActiveForm);
  });

  // Вызываем функцию при загрузке страницы для установки начального состояния
  updateActiveForm();
}

deliveryRadios();

function deliveryTypes() {
  const container = document.querySelector('.check-out');

  if (!container) {
    return;
  }

  let types = document.querySelectorAll('[data-delivery-type]');

  types.forEach(type => {
    type.addEventListener('click', () => {

      types.forEach(type => {
        type.classList.remove('active')
      });

      type.classList.add('active')
    })
  });
}
deliveryTypes();



const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtns = document.querySelectorAll('.close-modal-btn');
const modals = document.querySelectorAll('.modal');

openModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.modalId;
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  });
});

closeModalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});



Fancybox.bind("[data-fancybox]", {
  // Your custom options

  Toolbar: {
    display: {
      left: [],
      // middle: ["prev", "infobar", "next"],
      right: ["close"],
    },
  },

});


