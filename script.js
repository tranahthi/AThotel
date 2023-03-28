const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const loginBtn = $('.login');
const registerBtn = $('.register');
// console.log(registerBtn);
const clickSearchNode = $('.click-search');
const searchNode = $('.search-header');
const bookRoom = $('.book-room'); 
const logoHeader = $('.logo-header'); 


searchNode.addEventListener('click', () => {
  clickSearchNode.style.display = 'block';
  console.log('hehe');
})


logoHeader.addEventListener('click', () => {
  window.location.reload();
  window.location = `homepage.html`;

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





loginBtn&&loginBtn.addEventListener('click', function login(e) {
  e.preventDefault()
  getUser(handleLogin);
})

registerBtn&& registerBtn.addEventListener('click', function register(e) {
  e.preventDefault()
  // createUser(handleRegister);
  handleRegister();

})
var apiUser = ' http://localhost:3000/user';




function getUser(callback) {
  fetch(apiUser)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);

}

function handleLogin(users) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  {
    const user = users.find((user) => user.email === email);
    if (user && user.password === password) {
      localStorage.setItem("logUser", user.id);
      localStorage.setItem("isLogin", true);
      alert("dang nhap thanh cong");
      window.location = `homepage.html`;
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };
}





function signUp(){
  handleRegister();
}


function createUser (data) {
  fetch(apiUser,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",  
    },
    body : JSON.stringify(data),
  }).then(function(response){
    return response.json();
  }).catch((error) =>console.error(error));

}


function handleRegister(){
  
  var firstname = document.getElementById("fisrtname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var password = document.getElementById("password").value;
  var user = {
    firstname : firstname,
    lastname : lastname,
    email : email,
    tel : tel,
    password : password,
  };
  createUser(user);
  alert('tao tai khoan thanh cong');
}


// function handleRegister() {
//   var registerBtn = document.querySelector('.register');
//     registerBtn.onclick = function (){
//       var firstname = document.querySelector('input[firstname="firstname"]').value;
//       var lastname = document.querySelector('input[lastname="lastname"]').value;
//       var email = document.querySelector('input[email="email"]').value;
//       var tel = document.querySelector('input[tel="tel"]').value;
//       var password = document.querySelector('input[password="password"]').value;
//       var user = {
//             firstname : firstname.value,
//             lastname : lastname.value,
//             email : email.value,
//             tel : tel.value,
//             password : password.value,
//           };
//           createUser(user);
//     }
// } 



 

