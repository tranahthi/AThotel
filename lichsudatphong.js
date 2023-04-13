let dataRoom;
fetch('http://localhost:3000/bookings')
.then(reposne => reposne.json())
.then(data => {
    dataRoom = data;
    console.log(dataRoom)
    dataRoom.map((item,i) => {
        const tBody = document.querySelector('.tbody');
        const trNode = document.createElement('tr');
        trNode.classList.add('tr-node');
        tBody.appendChild(trNode)
        trNode.innerHTML = `
        <tr>
            <td>${item.nameTypeRoom}</td>
            <td>${item.checkIn}</td>
            <td>${item.checkOut}</td>
            <td>${item.total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            })}</td>
            <td>Đang đặt</td>
            <td>
                <div class="delete-room">Hủy</div>
            </td>
        </tr>
        `;
        const deleteRooms = document.querySelectorAll('.delete-room')
        deleteRooms.forEach((element,index) => {
        if(i === index) {
            element.addEventListener('click', ()=> {
                dataRoom = dataRoom.filter(temp => temp !== item);
                fetch(`http://localhost:3000/bookings/${item.id}`, {
                    method: 'DELETE',
                })
                .then(reponse => {
                    if(reponse) {
                        fetch('http://localhost:3000/bookings')
                        .then(reponse => reponse.json())
                        .then(data2 => {
                            data2 = dataRoom;
                            console.log(data2)
                        })
                    }
                })
            })
        }
    })
    })
});

