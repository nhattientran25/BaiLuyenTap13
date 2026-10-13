// Khởi tạo Vue 3 và gắn ứng dụng vào phần tử #app trong html/index.html.
Vue.createApp({
  // data() trả về dữ liệu gốc của giao diện. Vue theo dõi thay đổi để tự cập nhật DOM.
  data() {
    return {
      // Đủ 8 sản phẩm mẫu; mỗi sản phẩm có ảnh cục bộ trong thư mục images/.
      products: [
        { id: 1, ten: 'Ốp lưng trong suốt', anh: '../images/op-lung.png', gia: 79000, nhan: 'Ốp lưng', moTa: 'Chống sốc, ôm sát máy và không ố vàng.' },
        { id: 2, ten: 'Tai nghe Bluetooth', anh: '../images/tai-nghe.png', gia: 399000, nhan: 'Âm thanh', moTa: 'Pin 20 giờ, kết nối ổn định, chống ồn nhẹ.' },
        { id: 3, ten: 'Củ sạc Samsung 25W GaN Type-C', anh: '../images/sac-nhanh-samsung-25w.png', gia: 199000, nhan: 'Samsung · GaN', moTa: 'Củ sạc nhanh Samsung công suất 25W, cổng Type-C, ứng dụng công nghệ GaN.' },
        { id: 4, ten: 'Cáp sạc Type-C 1m', anh: '../images/cap-sac-type-c.png', gia: 199000, nhan: 'Cáp sạc', moTa: 'Cáp sạc Type-C màu trắng, thiết kế gọn gàng, tiện lợi sử dụng hằng ngày.' },
        { id: 5, ten: 'Pin dự phòng Trusmi 22.5W', anh: '../images/pin-du-phong-trusmi.png', gia: 349000, nhan: 'Sạc nhanh 22.5W', moTa: 'Thiết kế nhỏ gọn, màn hình hiển thị dung lượng pin và hỗ trợ sạc nhanh 22.5W.' },
        { id: 6, ten: 'Kính cường lực KingKong', anh: '../images/kinh-cuong-luc-kingkong.png', gia: 49000, nhan: 'KingKong · 9H', moTa: 'Kính cường lực bảo vệ toàn màn hình, độ cứng 9H, hạn chế trầy xước.' },
        { id: 7, ten: 'Giá đỡ điện thoại để bàn', anh: '../images/gia-do-dien-thoai.png', gia: 89000, nhan: 'Giá đỡ để bàn', moTa: 'Chân đế vững chắc, có thể điều chỉnh góc và độ cao để xem điện thoại rảnh tay.' },
        { id: 8, ten: 'Sạc không dây từ tính', anh: '../images/sac-khong-day-tu-tinh.png', gia: 259000, nhan: 'Sạc từ tính', moTa: 'Đế sạc không dây từ tính màu trắng, thiết kế nhỏ gọn, tiện lợi khi sử dụng.' }
      ],
      cart: [],
      tuKhoa: '',
      dichVuDangMo: null,
      dichVuChamSoc: [
        {
          ten: 'Tư vấn chọn phụ kiện',
          moTa: 'Chọn phụ kiện phù hợp với dòng điện thoại, nhu cầu sử dụng và ngân sách của bạn.',
          huongDan: [
            'Mở mục Sản phẩm và tìm tên phụ kiện bạn đang cần.',
            'Chuẩn bị tên dòng điện thoại để đối chiếu khả năng tương thích.',
            'Gọi hotline cửa hàng nếu cần nhân viên tư vấn trực tiếp.'
          ]
        },
        {
          ten: 'Hỗ trợ đặt hàng',
          moTa: 'Xem lại sản phẩm đã chọn và liên hệ cửa hàng để được hướng dẫn đặt mua.',
          huongDan: [
            'Nhấn biểu tượng giỏ hàng để xem các sản phẩm đã chọn và tổng tiền.',
            'Ghi lại tên sản phẩm cùng số lượng cần mua.',
            'Gọi hotline để xác nhận đơn hàng. Trang hiện là bản giới thiệu, chưa có chức năng thanh toán trực tuyến.'
          ]
        },
        {
          ten: 'Thông tin giao hàng',
          moTa: 'Liên hệ cửa hàng để hỏi khu vực giao hàng, thời gian dự kiến và phí vận chuyển cho đơn của bạn.',
          huongDan: [
            'Chuẩn bị địa chỉ nhận hàng và sản phẩm muốn mua.',
            'Gọi hotline cửa hàng để xác nhận phí và thời gian giao hàng.',
            'Phí vận chuyển sẽ được thông báo khi xác nhận đơn hàng.'
          ]
        },
        {
          ten: 'Đổi trả & bảo hành',
          moTa: 'Liên hệ cửa hàng để kiểm tra điều kiện đổi trả hoặc bảo hành áp dụng cho sản phẩm.',
          huongDan: [
            'Giữ lại hoá đơn hoặc thông tin đặt hàng.',
            'Chuẩn bị tên sản phẩm và mô tả tình trạng cần hỗ trợ.',
            'Gọi hotline để được hướng dẫn quy trình và điều kiện cụ thể.'
          ]
        },
        {
          ten: 'Giải đáp thắc mắc',
          moTa: 'Gửi câu hỏi về sản phẩm, giá bán hoặc cách sử dụng để cửa hàng hỗ trợ.',
          huongDan: [
            'Ghi lại tên sản phẩm hoặc nội dung bạn đang cần hỏi.',
            'Gọi hotline 0900 000 000 để trao đổi với cửa hàng.'
          ]
        }
      ]
    };
  },

  // computed chỉ tính lại khi dữ liệu phụ thuộc thay đổi; đây là dữ liệu dẫn xuất,
  // không phải thao tác DOM thủ công như cách làm bằng Vanilla JS.
  computed: {
    // Tổng số món (kể cả các sản phẩm trùng nhau) để cập nhật huy hiệu ở header.
    cartCount() {
      return this.cart.length;
    },

    // Cộng giá từng món trong giỏ; Vue tự tính lại khi thêm hoặc xoá sản phẩm.
    tongTien() {
      return this.cart.reduce((tong, sanPham) => tong + sanPham.gia, 0);
    },

    // Lọc danh sách dựa trên từ khoá; v-for chỉ render kết quả, không dựng lại toàn bộ catalog.
    danhSachLoc() {
      const tuKhoa = this.tuKhoa.trim().toLocaleLowerCase('vi');
      if (!tuKhoa) return this.products;

      return this.products.filter(sanPham =>
        `${sanPham.ten} ${sanPham.moTa} ${sanPham.nhan}`
          .toLocaleLowerCase('vi')
          .includes(tuKhoa)
      );
    }
  },

  methods: {
    // Thêm sản phẩm vào dữ liệu cart. Nhờ Vue reactivity, số lượng header,
    // danh sách giỏ hàng và tổng tiền tự cập nhật; Vanilla JS phải querySelector
    // và cập nhật DOM thủ công mỗi lần dữ liệu thay đổi.
    themVaoGio(sanPham) {
      this.cart.push(sanPham);
    },

    // Xoá đúng một món ở vị trí index; Vue tự đồng bộ mọi phần giao diện liên quan.
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },

    // Định dạng số tiền theo quy ước hiển thị Việt Nam.
    dinhDangGia(gia) {
      return `${gia.toLocaleString('vi-VN')}đ`;
    },

    moChamSocKhachHang(dichVu) {
      this.dichVuDangMo = dichVu;
    },

    dongChamSocKhachHang() {
      this.dichVuDangMo = null;
    },

    xuLyPhimChamSocKhachHang(event) {
      if (event.key === 'Escape') {
        this.dongChamSocKhachHang();
      }
    }
  },

  mounted() {
    window.addEventListener('keydown', this.xuLyPhimChamSocKhachHang);
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.xuLyPhimChamSocKhachHang);
  }
}).mount('#app');
