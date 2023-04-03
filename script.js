

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const loginBtn = $('.login');
const registerBtn = $('.register');
const bookBtn = $('.book');
// console.log(registerBtn);
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





 

 
  const isLogin = localStorage.getItem('isLogin');
  if(isLogin === "true") { 
    const logoutBtn =   
          '<a href="/homepage.html"  title="Đăng xuất" id="logout" >Đăng xuất</a> </li>';
          document.getElementById("register-Btnn").innerHTML = logoutBtn;
    const accountBtn = 
          '<a href="/homepage.html">Tài khoản</a></li>';
          document.getElementById("login-Btn").innerHTML = accountBtn;
  };
  // if (isLogin) {
  //   return JSON.parse(isLogin);
  // }
  // return false;
 

  const logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    localStorage.clear();
  })

  

// booking room
function bookBook(){
  handleBookingRoom ();
}

bookBtn&& bookBtn.addEventListener('click', function book(e) {
  e.preventDefault()
  handleBookingRoom ();
})


const apiBooking = ' http://localhost:3000/bookings';

function handleBookingRoom () {
 
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut= document.getElementById('check-out').value;
        const adult = document.getElementById('adult').value;
        const child = document.getElementById('child').value;
        const bookingData = {
          name : name,
          phone : phone,
          checkIn : checkIn,
          checkOut : checkOut,
          adult : adult,
          child : child,
        };  
        createBookRoom(bookingData);
        alert('Đặt phòng thành công');
}

function createBookRoom(data){
  fetch(apiBooking , {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body : JSON.stringify(data),
  })
  .then(function(respone){
    return respone.json();
  })
  .catch(error => {
    console.error("Đặt phòng thất bại" , error);
  });

}






 



 
