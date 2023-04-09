function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }
  
  
  
  var apiSingleRoom = ' http://localhost:3000/detailbookroom';
  
  
  function getSinggleRoom(callback) {
    fetch(apiSingleRoom)
      .then(function (respone) {
        return respone.json();
      })
      .then(callback);
  }
  const renderSinggleRoom = (datas) => {
    const roomHandle = document.querySelector('.sub-room-the-same')
    roomHandle.innerHTML = datas.map(data =>
      ` <div class="sub-img-room-the-same">
        <div class="img-room-the-same">
          <img src="${data.image}" alt="${data.alt}">
        </div>
        <div class="row-room-same">
          <div class="col-room-same">
              <h5>${data.name}</h5>
          </div>
          <ul class="list_tag_room">
              <li>
                  <img src="${data.svg1}" alt="Cafe Buổi Sáng">
              </li>
              <li>
                  <img src="${data.svg2}" alt="Gọi đồ ăn tại phòng">
               </li>
              <li>
                  <img src="${data.svg3}" alt="Bồn Tắm Hoa Sen">
              </li>
              <li>
                  <img src="${data.svg4}" alt="Internet Không Dây">
              </li>
          </ul>
          <div class="tag_rivew">
              <ul class="list_tag_review">
                  <li>${data.guest} Khách</li>
                  <li>${data.area}m²</li>
              </ul>
          </div>
          <div class="price-room-same">
              <div>
                  <h4>${data.price}đ/đêm</h4>
              </div>
              <div class=""book-now>
                  <button>Đặt ngay</button>
              </div>
          </div>
      </div>
  </div>`
    );
  }
    getSinggleRoom(renderSinggleRoom);