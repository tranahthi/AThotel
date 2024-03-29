var apiSingleRoom = 'http://localhost:3000/singleroom';
var apiDoubleRoom = 'http://localhost:3000/doubleroom';
function getRoomId(id) {
  localStorage.setItem('roomId', id)
}
function getSingleRoom(callback) {
  fetch(apiSingleRoom)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);
}
const renderSingleRoom = (datas) => {
  const roomHandle = document.querySelector('.col-display-room')
  roomHandle.innerHTML = datas.map(data =>
    `<div class="alter-item-product-room">
        <div class="item-product-img">
          <a href="/phong-don-tieu-chuan">
            <img
            width="330"
              height="230"
              src="${data.image}"
              alt="${data.alt}"
              />
              </a>
              </div>
              <div class="infor-room">
              <div class="tag-room">
            <h3 class="name-room">
            <a class="type-room" href="/phong-don-tieu-chuan"
                >${data.name}</a
                >
                </h3>
                <ul class="img-list-tag-room">
            <li>
                <img
                width="32"
                height="32"
                src="${data.svg1}"
                alt="Cafe buổi sáng"/>
                </li>
                <li>
                <img
                width="32"
                height="32"
              src="${data.svg2}"
              alt="Gọi đồ ăn tại phòng"/>
              </li>
              <li>
              <img
              width="32"
                  height="32"
                  src="${data.svg3}"
                  alt="Bồn tắm hoa sen"/>
              </li>
              <li>
              <img
              width="32"
              height="32"
              src="${data.svg4}"
              alt="Internet không dây"/>
              </li>
            </ul>
          </div>
          <div class="tag-review-room">
          <ul class="list-tag-review">
          <li>${data.guest} khách</li>
          <li>${data.area} m²</li>
            </ul>
            </div>
            <div class="product-infor-room">
            <div class="price-room">
            <span class="price">${data.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
          })}/Đêm</span>
              </div>
              <div class="booking-room">
              <a class="btn-booking" href="datphongdonchitiet.html" onclick="getRoomId(${data.id})">Đặt phòng</a>
              </div>
              </div>
              </div>
              </div>`

  ).join('');

}
getSingleRoom(renderSingleRoom);









//++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function getDoubleRoomId(id) {
  localStorage.setItem('roomDoubleId', id)
}


function getDoubleRoom(callback) {
  fetch(apiDoubleRoom)
    .then(function (respone) {
      return respone.json();
    })
    .then(callback);
}



const renderDoubleRoom = (datas) => {
  const roomHandle = document.querySelector('.col-display-double-room')
  roomHandle.innerHTML = datas.map(data =>
    ` <div class="alter-item-product-room">
    <div class="item-product-img">
    <a href="/phong-doi-tieu-chuan">
    <img
    width="330"
    height="230"
    src="${data.image}"
          alt="${data.alt}"
          />
          </a>
          </div>
          <div class="infor-room">
          <div class="tag-room">
        <h3 class="name-room">
        <a href="/phong-doi-tieu-chuan">${data.name}</a>
        </h3>
        <ul class="img-list-tag-room">
        <li>
            <img
            src="${data.svg1}"
            alt="Cafe buổi sáng"/>
          </li>
          <li>
          <img
              width="32"
              height="32"
              src="${data.svg2}"
              alt="Gọi đồ ăn tại phòng"/>
              </li>
          <li>
          <img
          width="32"
          height="32"
          src="${data.svg3}"
          alt="Bếp nấu tại phòng"/>
          </li>
          <li>
            <img
              width="32"
              height="32"
              src="${data.svg4}"
              alt="Bồn tắm hoa sen"/>
          </li>
          <li>
          <img
              width="32"
              height="32"
              src="${data.svg5}"
              alt="Internet không dây"/>
              </li>
        </ul>
        </div>
      <div class="tag-review-room">
        <ul class="list-tag-review">
        <li>${data.guest} khách</li>
        <li>${data.area} m²</li>
        </ul>
        </div>
        <div class="product-infor-room">
        <div class="price-room">
          <span class="price">${data.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        })}/Đêm</span>
          </div>
          <div class="booking-room">
          <a class="btn-booking" href="datphongdoichitiet.html" onclick="getDoubleRoomId(${data.id})"
          >Đặt phòng</a
          >
        </div>
        </div>
    </div>
  </div>`
  ).join('') ;
}
getDoubleRoom(renderDoubleRoom);







