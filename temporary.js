// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const fromDate = $('.fromDate');
// const toDate = $('.toDate');
// const totalPrice = $('.total-price');
// const tempBtn = $('.button-temp');

// function temporaryStart(){
//     temporary();
//   }
  
// function temporary(){
//     const fromDate = $('.fromDate').val();
//     const toDate = $('.toDate').val();
//     if(toDate <= fromDate){
//       alert("Ngày trả phải lớn hơn ngày nhận");
//       return false;
//     }
//     const donGia = $('.price.product-price').html();
//     const valuGia = $('.bost-price').html();
//     const thoiGianGiuaHaiNgay = (ngayDau,ngayCuoi) => (ngayCuoi - ngayDau)/1000*3600*24;
//     const ngayDau = new Date(fromDate);
//     const ngayCuoi = new Date(toDate);
//     const ketQua = thoiGianGiuaHaiNgay(ngayDau , ngayCuoi);
//     var tongTien;
//     tongTien = ketQua * valuGia;
//     btnTemp.addEventListener('click' , () =>{
//     var totalPrice = document.getElementById("total-price");
//         totalPrice.innerHTML = '<div class="div-tam-tinh"> <div class="gia-niem-yet">Giá niêm yết('+ ketQua + 'x' + donGia +'</div><div class="tong-gia><div class="title-tong-gia">Tổng tiền</div><div>(' + tongTien +')</div></div></div>';
//   });
//   }
  