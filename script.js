const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const loginBtn = $('.login')
console.log(loginBtn)
const clickSearchNode = $('.click-search')
const searchNode = $('.search-header');
const bookRoom = $('.book-room');


searchNode.addEventListener('click', () => {
  clickSearchNode.style.display = 'block';
  console.log('hehe')
})

// const arrowDownRoom = document.querySelector('.arrow-down-room');
// const roomFood = document.querySelector('.room-food');

// roomFood.addEventListener('click',() => {
//     console.log('helo')
//     arrowDownRoom.style.display = 'block';
// })
// const arrowDownFood = document.querySelector('.arrow-down-food');
// const food = document.querySelector('#food');
//    food.addEventListener('click', () => {
//     arrowDownFood.style.display = 'block';

//    }
//    )
bookRoom.addEventListener('click', () => {
  window.location = `datphong.html`;
})


loginBtn.addEventListener('click', function login(e) {
  e.preventDefault()
  getUser(handleLogin);
})







var apiUser = ' http://localhost:3000/user';




function getUser(callback) {
  fetch(apiUser)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);

}

function handleLogin(datas) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  datas.forEach(data => {
    if (data.email == email && data.password == password) {
      alert("dat nhap thanh cong");
      console.log('hi');
    }
    else {
      alert("sai mat khau")
    }
  });
}

