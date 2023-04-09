


const apiRoom = 'http://localhost:3000/room';






function handleTemporary(){
// lấy ngày từ input
    const startDate = document.getElementById('check-in').value;
    const endDate = document.getElementById('checkOut').value;

//tính số ngày đặt phòng
    const numberOfDay = Math.ads((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));

    
}



