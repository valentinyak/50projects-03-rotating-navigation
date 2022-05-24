const article = document.querySelector('.article');
const circle = document.querySelector('.circle');

circle.addEventListener('click', () => {
  circle.classList.toggle('active');
  article.classList.toggle('rotated');
});
