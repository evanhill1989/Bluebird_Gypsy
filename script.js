const navItems = document.querySelectorAll('.slider-nav-item');
const wrapper = document.querySelector('.slider-wrapper');

navItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    wrapper.classList.add(`hover-${index}`);
  });

  item.addEventListener('mouseleave', () => {
    wrapper.classList.remove(`hover-${index}`);
  });
});