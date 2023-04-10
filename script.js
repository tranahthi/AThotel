const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const loginBtn = $('.login');
const registerBtn = $('.register');
// const bookBtn = $('.book');
// const tempBtn = $('.button-temp');
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


// chuc nang Dang nhap

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




// chuc nang dang ky 
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
          '<a href="/homepage.html"  title="Đăng xuất" id="logout" >Đăng xuất</a> ';
          document.getElementById("register-Btnn").innerHTML = logoutBtn;
    const accountBtn = 
          '<a href="/homepage.html">Tài khoản</a>';
          document.getElementById("login-Btn").innerHTML = accountBtn;
  };


  const logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    localStorage.clear();
  })

  

// chuc nang booking room
// function bookBook(){
//   handleBookingRoom ();
// }

// bookBtn&& bookBtn.addEventListener('click', function book(e) {
//   e.preventDefault()
//   handleBookingRoom ();
// })


// const apiBooking = ' http://localhost:3000/bookings';



// function handleBookingRoom () {
//         const typeRoom = document.getElementById('name-type-room').innerText;
//         const price = document.getElementById('price').innerText;
//         const name = document.getElementById('name').value;
//         const phone = document.getElementById('phone').value;
//         const checkIn = document.getElementById('check-in').value;
//         const checkOut= document.getElementById('check-out').value;
//         const adult = document.getElementById('adult').value;
//         const child = document.getElementById('child').value;
//         const bookingData = {
//           name : name,
//           phone : phone, 
//           checkIn : checkIn,
//           checkOut : checkOut,
//           adult : adult,
//           child : child,
//           typeRoom : typeRoom,
//           price : price,
//         };  
//         createBookRoom(bookingData);
//         alert('Đặt phòng thành công');
// }

// function createBookRoom(data){
//   fetch(apiBooking , {
//     method: "POST",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body : JSON.stringify(data),
//   })
//   .then(function(respone){ 
//     return respone.json();
//   })
//   .catch(error => {
//     console.error("Đặt phòng thất bại" , error);
//   });

// }


// render ra giao dien cac don dat phong
// const price = document.getElementById('price');
// const btnTemp = document.getElementById("btnTemp");
// const contentDiv = document.getElementById("content");
// const subContentDiv = document.getElementById("sub-content");
// const totalPrice = document.getElementById("total-price");
// btnTemp.addEventListener('click' , () =>{
//   contentDiv.innerHTML ='<div class = "content-price">Giá niêm yết (1*500.000đ/đêm)</div>';
//   subContentDiv.innerHTML = '<div> 500.000đ</div>';
//   totalPrice.innerHTML = '<div>Tổng giá</div>';
//   // contentPrice.innerHTML = '<div class = "">500.000</div>';
// });

//  function tinh gia tam thoi



  // const fromDate = $('.fromDate' ).val();
  // const toDate = $('.toDate').val();
  // if(toDate <= fromDate){
  //   alert("Ngày trả phải lớn hơn ngày nhận");
  // }else{
  //   const donGia = $('.price.product-price').html();
  //   const valuGia = $('.bost-price').html();
  //   const thoiGianGiuaHaiNgay = (ngayDau,ngayCuoi) => (ngayCuoi - ngayDau)/1000*3600*24;
  //   const ngayDau = new Date(fromDate);
  //   const ngayCuoi = new Date(toDate);
  //   const ketQua = thoiGianGiuaHaiNgay(ngayDau , ngayCuoi);
  //   var tongTien;
  //   tongTien = ketQua * valuGia;
  
  // btnTemp.addEventListener('click' , () =>{
  //   var totalPrice = document.getElementById("btnTemp");
  //       totalPrice.innerHTML = '<div class="div-tam-tinh"> <div class="gia-niem-yet">Giá niêm yết('+ ketQua + 'x' + donGia +'</div><div class="tong-gia><div class="title-tong-gia">Tổng tiền</div><div>(' + tongTien +')</div></div></div>';
  // });

  // }
 














 



 
