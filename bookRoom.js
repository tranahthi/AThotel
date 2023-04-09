const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const bookBtn = $('.book');










function bookBook(){
    handleBookingRoom ();
  }
  
  bookBtn&& bookBtn.addEventListener('click', function book(e) {
    e.preventDefault()
    handleBookingRoom ();
  })
  
  
  const apiBooking = ' http://localhost:3000/bookings';
  
  
  
  function handleBookingRoom () {
          const typeRoom = document.getElementById('name-type-room').innerText;
          const price = document.getElementById('price').innerText;
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
            typeRoom : typeRoom,
            price : price,
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