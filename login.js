const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const loginBtn = $('.login');

loginBtn&&loginBtn.addEventListener('click', function login(e) {
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
