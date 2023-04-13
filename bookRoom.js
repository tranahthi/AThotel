const apiBooking = 'http://localhost:3000/bookings';
const bookForm = document.querySelector('.booking-form')

function handleBookingRoom(e) {
  e.preventDefault()

  const nameTypeRoom =  document.querySelector('.name-type-room').innerText;
  console.log(nameTypeRoom)
  const price = document.getElementById('price').innerText;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const adult = document.getElementById('adult').value;
  const child = document.getElementById('child').value;
  // lấy ngày từ input
  const startDate = document.getElementById('check-in').value;
  const endDate = document.getElementById('check-out').value;
  //tính số ngày đặt phòng
  const numberOfDay = Math.round(Math.abs((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)));
  const newPrice = price.slice(0,-5);
  const newPrice2 = newPrice.replace(/\./g, '');
  const totalPriceNumberOfDay = numberOfDay * Number(newPrice2);
  localStorage.setItem("totalPriceNumberOfDay", totalPriceNumberOfDay);
  const bookingData = {
    name: name,
    phone: phone,
    checkIn: checkIn,
    checkOut: checkOut,
    adult: adult,
    child: child,
    nameTypeRoom : nameTypeRoom,
    price: price,
    total: totalPriceNumberOfDay,
  };
  console.log(bookingData)
  createBookRoom(bookingData);
  alert('Đặt phòng thành công');
}

function createBookRoom(data) {
  fetch(apiBooking, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(function (respone) {
    return respone.json();
  })
  .catch(error => {
    console.error("Đặt phòng thất bại", error);
  });
  
}
bookForm.addEventListener('submit', handleBookingRoom)
