var apiSinggleRoom = 'http://localhost:3000/singleroom';
var apiDoubleRoome = 'http://localhost:3000/doubleroom';



function getSingleRoom(callback) {
    fetch(apiSinggleRoom)
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
              alt="Phòng đơn tiêu chuẩn"
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
                  src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1676011628150"
                  alt="Cafe buổi sáng"
                />
              </li>
              <li>
                <img
                  width="32"
                  height="32"
                  src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1676011628150"
                  alt="Bồn tắm hoa sen"
                />
              </li>
              <li>
                <img
                  width="32"
                  height="32"
                  src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1676011628150"
                  alt="Internet không dây"
                />
              </li>
            </ul>
          </div>
          <div class="tag-review-room">
            <ul class="list-tag-review">
              <li>02 khách</li>
              <li>20m²</li>
            </ul>
          </div>
          <div class="product-infor-room">
            <div class="price-room">
              <span class="price">${data.price}/Đêm</span>
            </div>
            <div class="booking-room">
              <a class="btn-booking" href="datphongdonchitiet.html"
                >Đặt phòng</a
              >
            </div>
          </div>
        </div>
      </div>`

    )
}
getSingleRoom(renderSingleRoom)
