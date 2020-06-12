'use strict';

const click = (target, callback) => {
  target.addEventListener('click', (e) => {
    e.preventDefault();
    return callback(e)
  });
}

const hamburgerButton = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.menu');

const showMobileMenu = () => {
  mobileMenu.classList.toggle('hidden');
};


hamburgerButton.addEventListener('click', (e) => {
  showMobileMenu();
});

const mobileMenuItems = document.querySelectorAll('.menu__list-item.to-section a');
const documentSections = document.querySelectorAll('*[id^="section"]');
const documentSectionsArray = [...documentSections];

const scrollToSection = (i) => {
  documentSectionsArray[i].scrollIntoView({
    bahavior: 'smooth'
  });
};

mobileMenuItems.forEach((item, index) => {
  click(item, () => {
    scrollToSection(index);
    showMobileMenu();
  })
});