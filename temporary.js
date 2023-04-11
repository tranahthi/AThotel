


const apiRoom = 'http://localhost:3000/singleroom';


function calculateTempPrice(){
    
    // lấy ngày từ input
    const startDate = document.getElementById('check-in').value;
    const endDate = document.getElementById('check-out').value;
    //tính số ngày đặt phòng
    const numberOfDay = Math.round(Math.abs((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)));
    console.log(startDate);

    fetch(apiRoom)
    .then(function (respone) {
        return respone.json();
    })
    .then(data =>{
        const roomPrice = data[0].price;
        const tempPrice = roomPrice *  numberOfDay;
        document.getElementById('total-price').innerHTML = tempPrice.toLocaleStringtoLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })

    });

}











    




