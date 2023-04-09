const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const registerBtn = $('.register');






registerBtn&& registerBtn.addEventListener('click', function register(e) {
    e.preventDefault()
    handleRegister();
  })

  
var apiUser = ' http://localhost:3000/user';

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