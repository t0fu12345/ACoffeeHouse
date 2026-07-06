# Thiết kế Trang POS (Point of Sale)

Giao diện POS dành cho thao tác nhanh bằng cảm ứng trên máy tính bảng hoặc màn hình cảm ứng (Touch-friendly). Cần tối giản, nút bấm to, và phản hồi tức thì.

## 1. Màn hình Sơ đồ bàn (`/pos`)
- **Layout**: 
  - **Header**: Tên nhân viên, ca làm việc, đồng hồ, nút chuyển đổi tab (Sơ đồ bàn / Mang đi - Delivery). Nút Đăng xuất.
  - **Sidebar (Left)**: Danh sách lọc theo khu vực (Tầng 1, Tầng 2, Sân vườn).
  - **Main Content**: Lưới (Grid) các Component `TableCard`.
- **Component `TableCard`**:
  - Trạng thái màu sắc: Trống (màu xám nhạt/trắng), Đang phục vụ (màu xanh/cam), Đã đặt trước (màu vàng).
  - Nội dung: Tên bàn (VD: T1-01), Thời gian khách vào, Tổng tiền tạm tính.
- **Logic**: Click vào bàn sẽ chuyển hướng sang màn hình Order: `/pos/order/:tableId`.

## 2. Màn hình Ghi nhận Order (`/pos/order/:tableId`)
- **Layout**: Chia màn hình làm 2 cột. (Cột trái lớn hơn chiếm 65%: Menu. Cột phải 35%: Giỏ hàng).
- **Phần Trái (Menu)**:
  - Thanh danh mục ngang (Tabs): Cà phê, Trà, Bánh ngọt, Đồ ăn vặt... có thể vuốt ngang.
  - Lưới hiển thị `ProductCard` (Ảnh thu nhỏ, Tên món, Giá tiền). Có thanh tìm kiếm nhanh bằng text.
- **Phần Phải (Giỏ hàng/Cart)**:
  - Header: Thông tin bàn hiện tại, nút "Đổi bàn/Gộp bàn".
  - Danh sách `CartItem`: Tên món, Size, Topping, Nút (+/-) thay đổi số lượng, Giá tổng của món, Nút Xóa (Thùng rác).
  - Footer: Tổng tiền, Nút "Gửi bếp" (Lưu tạm và in phiếu bếp), Nút "Thanh toán" (Chuyển sang checkout).
- **Popup Tùy chọn Món (Modifier Modal)**: 
  - Hiển thị khi bấm vào một món trên Menu.
  - Radio button chọn Size (S/M/L) - cập nhật giá trực tiếp.
  - Checkbox chọn Topping (Trân châu, thạch...).
  - Radio button cho Tùy chọn đặc biệt (Ít đường, Không đá).
  - Textarea cho ghi chú riêng biệt.

## 3. Màn hình Thanh toán (`/pos/checkout/:orderId`)
- **Layout**: Modal Popup lớn hoặc một màn hình riêng biệt che nửa phải màn hình.
- **Cột Trái (Hóa đơn)**: Hiển thị lại danh sách các món, không cho phép chỉnh sửa, Tổng tiền hàng, Thuế (VAT), Phí dịch vụ (nếu có).
- **Cột Phải (Thanh toán)**:
  - Khối Khách hàng: Ô nhập số điện thoại để tích điểm, áp dụng mã thẻ.
  - Khối Khuyến mãi: Ô nhập Mã giảm giá, hoặc chọn từ danh sách khả dụng.
  - Khối Phương thức: Các nút to (Tiền mặt, Thẻ tín dụng, Momo, VNPay).
  - Giao diện nhập tiền mặt: Gợi ý nhanh các mệnh giá khách thường đưa (50k, 100k, 200k, 500k), tự động tính Tiền thối lại.
  - Nút Action: "Hoàn tất & In hóa đơn".

## 4. Màn hình Bếp/Pha chế (`/pos/kitchen`)
- **Layout**: List View dạng Kanban ngang (Horizontal Scroll) hoặc Lưới Thẻ. Giao diện nền tối (Dark mode) thường được ưa chuộng ở khu vực bếp.
- **Component `TicketCard`**:
  - Header Thẻ: Bàn số X / Mang đi, Giờ order, Đếm ngược thời gian (Đổi màu cam/đỏ nếu để khách đợi quá lâu).
  - Body Thẻ: Danh sách món cần pha chế (in đậm), Ghi chú tùy chọn đi kèm (in nghiêng).
  - Footer Thẻ: Nút xác nhận "Đã xong" (Đánh dấu món hoàn thành, thông báo lên màn hình POS của phục vụ/thu ngân).
