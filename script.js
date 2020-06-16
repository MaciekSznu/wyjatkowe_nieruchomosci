'use strict';

const clickPreventDefault = (target, callback) => {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    return callback(e)
  });
};

const click = (target, callback) => {
  target.addEventListener('click', (e) => {
    return callback(e)
  });
};

const socialAsideButtons = document.querySelectorAll('a[class^="social"][class$="link"]');

const changeSocialColors = () => socialAsideButtons.forEach((item) => {
  item.classList.toggle('filtered');
});

const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.menu');

const showMobileMenu = () => {
  mobileMenu.classList.toggle('visible');
};

const hamburgerActive = () => {
  hamburgerButton.classList.toggle('hamburger-active');
};


hamburgerButton.addEventListener('click', (e) => {
  showMobileMenu();
  hamburgerActive();
  changeSocialColors();
});

const mobileMenuItems = document.querySelectorAll('.menu__list-item:not(.to-section) a');
const mobileMenuItemsScroll = document.querySelectorAll('.menu__list-item.to-section a');
const documentSections = document.querySelectorAll('*[id^="section"]');
const documentSectionsArray = [...documentSections];

const scrollToSection = (i) => {
  documentSectionsArray[i].scrollIntoView({
    bahavior: 'smooth'
  });
};


mobileMenuItemsScroll.forEach((item, index) => {
  clickPreventDefault(item, () => {
    scrollToSection(index);
    const width = window.innerWidth;
    if ( width < 1024 ) {
      showMobileMenu();
      hamburgerActive();
      changeSocialColors();
    }
  })
});

mobileMenuItems.forEach((item) => {
  click(item, () => {
    const width = window.innerWidth;
    if ( width < 1024 ) {
      showMobileMenu();
      hamburgerActive();
      changeSocialColors();
    }
  })
});