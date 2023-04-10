const roomDetailHandle = document.querySelector('.room-detail')

var apiSingleRoom = 'http://localhost:3000/singleroom';
function getSingleRoom(callback) {
    fetch(apiSingleRoom)
        .then(function (respone) {
            return respone.json();
        })
        .then(callback);
}
function getSingleRoomId(rooms) {
    const roomId = localStorage.getItem('roomId')
    const singleRoomDetail = rooms.find(room => room.id == roomId)
    renderSingleRoomDetail(singleRoomDetail)
}
function renderSingleRoomDetail(singleRoomDetail) {
    roomDetailHandle.innerHTML = ` <div class="container-main">
    <div class="ul-main">
      <ul class="bread-crumb">
        <li>
          <div class="home-main-svg">
            <a href="homepage.html">Trang chủ</a>
            <span class="svg-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </li>
        <li>
          <div class="home-main-svg">
            <a href="phongdon.html">Phòng đơn</a>
            <span class="svg-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </div>
        </li>
        <li>
          <div>
            <a class="title-a" href="">Phòng đơn tiêu chuẩn</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="img-main">
    <div class="sub-img-main">
      <img src="./assets/img/anh_don_view_dep.webp" alt="ảnh phòng đơn" />
    </div>
    <div class="sub-img-main main">
      <img src="./assets/img/anh_don_view_dep.webp" alt="ảnh phòng đơn" />
    </div>
    <div class="sub-img-main">
      <img src="./assets/img/anh_don_view_dep.webp" alt="ảnh phòng đơn" />
    </div>
  </div>

  <div class="title-form-main">
    <div class="title-main">
      <div class="sub-title-main">
        <h3>Phòng đơn tiêu chuẩn</h3>
        <div class="tag-info-room">
          <div class="item-tag-info">
            <img src="./assets/img/tag_people.webp" alt="số người" />
            <p>01 người lớn</p>
          </div>
          <div class="item-tag-info">
            <img src="./assets/img/tag_people.webp" alt="số người" />
            <p>01 trẻ em</p>
          </div>
          <div class="item-tag-info">
            <img src="./assets/img/tag_size.webp" alt="diện tích phòng" />
            <p>Phòng 20m²</p>
          </div>
        </div>

        <div class="content-intro-main">
          <p>
            Các phòng trang nhã và dãy phòng trang nghiêm của chúng tôi
            gợi nhớ về một thời đại đã qua.&nbsp;Mỗi tính năng như đường
            cong, thảm sang trọng, trần nhà cao, phòng tắm lát đá cẩm
            thạch, thiết bị làm sạch và nhiều không gian đều được bố trí
            một cách chu đáo để gọi cho riêng bạn.&nbsp;Tông màu nâu phong
            phú và gỗ sồi tự nhiên tạo nên những khu bảo tồn yên tĩnh và
            yên tĩnh, được tôn lên một cách tuyệt vời bởi đồ nội thất
            trang nhã.
          </p>
        </div>

        <div class="room-service">
          <div class="sub-room-service">
            <div class="title-room-service">
              <p>Dịch vụ phòng</p>
            </div>
            <div class="svg-room-service">
              <ul class="list-tag-room">
                <li class="sub-list-tag">
                  <div class="item-service">
                    <img
                      src="./assets/img/tag_icon_cafe.svg"
                      alt="cafe buổi sáng"
                    />
                    <p>Cafe buổi sáng</p>
                  </div>
                </li>
                <li class="sub-list-tag">
                  <div class="item-service">
                    <img
                      src="./assets/img/tag_icon_bontam.svg"
                      alt="Bồn tắm hoa sen"
                    />
                    <p>Bồn tắm hoa sen</p>
                  </div>
                </li>
                <li class="sub-list-tag">
                  <div class="item-service">
                    <img
                      src="./assets/img/tag_icon_internet.svg"
                      alt="Internet không dây"
                    />
                    <p>Bồn tắm hoa sen</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-main">
      <form id="booking-form" class="booking-form">
        <span id="price" class="price product-price">${singleRoomDetail.price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    })}/đêm</span>
        <table class="table-form">
          <tr>
            <td><p>Họ và tên*</p></td>
            <td><p>Số điện thoại*</p></td>
          </tr>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Họ và tên"
              />
            </td>
            <td>
              <input
                id="phone"
                name="phone"
                required
                type="text"
                placeholder="Số điện thoại"
              />
            </td>
          </tr>
          <tr>
            <td><p>Ngày đến*</p></td>
            <td><p>Ngày đi*</p></td>
          </tr>
          <tr>
            <td>
              <input
                type="date"
                id="check-in"
                class="fromDate"
                name="check-in"
                required
              />
            </td>
            <td>
              <input
                type="date"
                id="check-out"
                class="toDate"
                name="check-out"
                required
              />
            </td>
          </tr>
          <tr>
            <td><p>Người lớn*</p></td>
            <td><p>Trẻ em*</p></td>
          </tr>
          <tr>
            <td>
              <input
                type="number"
                id="adult"
                name="adult"
                min="1"
                max="4"
                required
              />
            </td>
            <td>
              <input
                type="number"
                id="child"
                name="child"
                min="1"
                max="4"
                required
              />
            </td>
          </tr>
          <tr>
            <td><br /></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div id="content"></div>
            </td>
            <td>
              <div id="sub-content"></div>
            </td>
          </tr>

          <tr>
            <td>
              <div id="total-price"></div>
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" class="button-temp" id="btnTemp">
                <p>Tạm tính</p>
              </button>
            </td>
            <td>
              <button type="submit" class="book"><p>Đặt phòng</p></button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
  <br />
  <br />

  <div class="container-table-d-c">
    <div class="onclick-desc-conveni">
      <button onclick="openCity('London')" class="a">Mô tả</button>
      <button onclick="openCity('Paris')" class="a">Tiện nghi</button>
    </div>
    <div class="desc-conven">
      <div id="London" class="w3-container city">
        <p>
          Với cảnh quan tuyệt đẹp của thành phố về đêm bạn sẽ ngắm được
          toàn cảnh thành phố với những ánh đèn và bản nhạc chill đem lại
          cho bạn sự thư thái và nhẹ nhàng trong tâm hồn, Đến với chúng
          tôi bạn sẽ tận hưởng đầy đủ kỳ nghỉ với các dịch vụ hoàn hảo.
          Ngoài ra khách đặt phòng còn được miễn phí ăn sáng. Tiện ích
          phòng đầy đủ máy lạnh, tivi màn hình phẳng và nhiều tiện ích
          khác nữa.
        </p>
        <p>
          <b>Dịch vụ miễn phí:</b> Ăn sáng tự chọn, Nước khoáng trên phòng
          nghỉ, Dịch Internet không dây (wifi)
        </p>
        <p>
          <b>Hình thức Thanh toán:</b> Tiền mặt (VND, USD, EURO, …) thẻ
          tín dụng Visa và Master
        </p>
        <p>
          * Nếu Quý khách thanh toán bằng ngoại tệ thì theo tỷ giá hối
          đoái của Ngân hàng hiện thời.
        </p>
        <p>Lưu ý:</p>
        <p>- Không hút thuốc trên giường</p>

        <p>- Không mang thú cưng</p>

        <p>
          - Quy định nhận phòng: quý khách vui lòng mang theo CMND (ID)
          hoặc Hộ Chiếu (Passport) (đối với người nước ngoài) hoặc thẻ tạm
          trú (đối với khách nước ngoài đi công tác) cùng phiếu xác nhận
          đặt phòng.
        </p>
      </div>

      <div id="Paris" class="w3-container city">
        <div class="contant_pro">
          Liên hệ hotline:
          <a title="1900 6750" href="tel:19006750">1900 6750</a> để nhận
          được ưu đãi đặt phòng sớm nhất !
        </div>
        <div class="title_tien_nghi">Các tiện nghi của TDK Hotel</div>
        <table class="table-tien-nghi">
          <tr>
            <td>
              <div class="item_tien_nghi">
                <h3>
                  <i
                    class="facilityGroupIcon tuda_icon mask_icon parking"
                  ></i
                  >Chỗ đậu xe
                </h3>
                <ul>
                  <li>
                    <span class="free-badge">Miễn phí!</span> Chỗ đậu xe
                    miễn phí
                  </li>
                  <li>Có chỗ đỗ xe riêng, an toàn</li>
                </ul>
              </div>
            </td>
            <td>
              <div class="item_tien_nghi">
                <h3>
                  <i
                    class="facilityGroupIcon tuda_icon mask_icon guest"
                  ></i
                  >Tiện ích ngoài trời
                </h3>
                <ul>
                  <li>Karaoke</li>
                  <li>
                    <span class="free-badge">Miễn phí!</span> Truyền hình
                    cáp free
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="item_tien_nghi">
                <h3>
                  <i
                    class="facilityGroupIcon tuda_icon mask_icon outdoor"
                  ></i
                  >Tiện ích ngoài trời
                </h3>
                <ul>
                  <li>BBQ</li>
                  <li>Bàn ghế ngoài trời</li>
                  <li>Ban công</li>
                  <li>Sân hiên</li>
                  <li>Sân vườn &amp; Cây xanh</li>
                  <li>Sân thượng</li>
                </ul>
              </div>
            </td>
            <td>
              <div class="item_tien_nghi">
                <h3>
                  <i
                    class="facilityGroupIcon tuda_icon mask_icon guest"
                  ></i
                  >Dịch vụ lau dọn
                </h3>
                <ul>
                  <li>Giặt khô</li>
                  <li>Giặt ủi</li>
                  <li>Dọn phòng hàng ngày</li>
                </ul>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <br />
  <br />

  `
}



getSingleRoom(getSingleRoomId)