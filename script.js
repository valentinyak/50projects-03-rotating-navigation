const article = document.querySelector('.article');
const circle = document.querySelector('.circle');
const navList = document.querySelector('.nav-list');

circle.addEventListener('click', () => {
  circle.classList.toggle('active');
  article.classList.toggle('rotated');
  navList.classList.toggle('opened');
});
