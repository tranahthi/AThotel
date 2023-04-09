
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




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

