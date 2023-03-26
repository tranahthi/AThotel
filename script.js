const searchNode = document.querySelector('.search-header');
const clickSearchNode = document.querySelector('.click-search')
console.log(clickSearchNode)

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
const bookRoom = document.querySelector('.book-room');
bookRoom.addEventListener('click', ()=> {
    window.location = `datphong.html`;
})







var apiUser = ' http://localhost:3000/user';


function login(){
  getUser(handleLogin);

}

function getUser(callback){
  fetch(apiUser)
    .then(function(respone){
      return respone.json();
    })
    .then(callback);

}

function handleLogin(data){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  data.forEach(data => {
    if(data.email == email && data.password == password){
      alert("dat nhap thanh cong");
      console.log('hi');
    }      
  });
}




