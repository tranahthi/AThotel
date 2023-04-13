let dataUser;
fetch('http://localhost:3000/user')
.then(reposne => reposne.json())
.then(data => {
   dataUser = data;
   let idUser = JSON.parse(localStorage.getItem("logUser"))
   dataUser.forEach(item => {
        if(item.id === idUser) {
            console.log(item)
            document.querySelector('.hello').innerHTML =`
                Xin chào, <span>${item.lastname}!</span>
            `;
            const renderInfor = document.querySelector('.hidden-infor-cus')
            renderInfor.innerHTML=`
            <h3>Thông tin tài khoản</h3>
            <div class="name-email-tel">
              <p class="name-user-logined">Họ tên: <span>${item.firstname} ${item.lastname}</span></p>
              <p class="email">Email:  <span>${item.email}</span></p>
              <p class="tel-tel">Số điện thoại: <span>${item.tel}</span></p>

            </div>
            `;
        }
    
   })
});


const inforCusNode = document.querySelector('.info-cus')
const hiddenInfo = document.querySelector('.hidden-infor-cus')
inforCusNode.addEventListener('click',()=>{
    hiddenInfo.style.visibility = 'visible'
})





