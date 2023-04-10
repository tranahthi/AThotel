const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




const clickSearchNode = $('.click-search');
const searchNode = $('.search-header');
const bookRoom = $('.book-room'); 
const logoHeader = $('.logo-header');


searchNode.addEventListener('click', () => {
  clickSearchNode.style.display = 'block';
})


logoHeader.addEventListener('click', () => {
  window.location.reload();
  window.location = `homepage.html`;

})


bookRoom.addEventListener('click', () => {
  window.location = `datphong.html`;
})
