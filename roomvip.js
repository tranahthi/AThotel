var apiVipRoom = ' http://localhost:3000/viproom';

function getVipRoom(callback) {
    fetch(apiVipRoom)
      .then(function (respone) {
        return respone.json();
      })
      .then(callback);
  }

  const renderVipRoom = (datas) => {
    const roomHandle = document.querySelector('.sub-room-the-best')
    roomHandle.innerHTML = datas.map(data => 
        `<div class="col-room-best">
            <img src="${data.image}">
            <div class="title-price-room-best">
                <a href="/phong-don-vip" title="Phòng đơn vip">${data.name}</a>
                <p>${data.price}đ/đêm</p>
            </div>
        </div>`
)
    }

    getVipRoom(renderVipRoom);
