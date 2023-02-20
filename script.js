const centerItem = document.querySelector('.center-item'),
      menu = document.querySelector('.menu');

centerItem.addEventListener('mouseover', () => {
    menu.classList.add('change');
});

menu.addEventListener('mouseleave', () => {
    menu.classList.remove('change');
});