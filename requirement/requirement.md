# Yêu Cầu Hệ Thống Quản Lý Quán Cafe (Coffee Shop Management System)

Dưới đây là bản phân tích các yêu cầu chức năng cần thiết để xây dựng một hệ thống/trang quản lý quán cafe toàn diện.

## 1. Phân quyền Người dùng (Roles & Permissions)
Hệ thống cần hỗ trợ nhiều vai trò với các quyền hạn khác nhau:
- **Admin/Chủ quán**: Toàn quyền kiểm soát hệ thống, xem mọi báo cáo, cấu hình.
- **Quản lý cửa hàng (Manager)**: Quản lý kho, nhân viên, xử lý các vấn đề trong ca, xem báo cáo cửa hàng.
- **Thu ngân (Cashier)**: Tạo đơn, tính tiền, thanh toán, quản lý két tiền trong ca.
- **Pha chế/Bếp (Barista/Kitchen)**: Nhận order để pha chế, cập nhật trạng thái món (đã xong).
- **Phục vụ (Waiter)**: Ghi order tại bàn, kiểm tra trạng thái món.

## 2. Quản lý Bán hàng (Point of Sale - POS)
Giao diện dành cho thu ngân và phục vụ, cần thao tác nhanh chóng:
- **Quản lý khu vực/Bàn**: Giao diện sơ đồ bàn, trạng thái bàn (trống, đang phục vụ, đã đặt trước). Hỗ trợ cả bán mang đi (Take-away) và giao hàng (Delivery).
- **Tạo và quản lý Đơn hàng (Order)**:
  - Chọn món, chọn size (S, M, L).
  - Tùy chọn thêm (Toppings, lượng đường, lượng đá, ghi chú riêng).
  - Tách/Gộp bàn, chuyển bàn.
- **Thanh toán (Checkout)**:
  - Tính tổng tiền, thuế (VAT), phí phục vụ.
  - Áp dụng mã giảm giá, thẻ thành viên.
  - Hỗ trợ đa dạng phương thức: Tiền mặt, Thẻ tín dụng, Chuyển khoản (QR Code), Ví điện tử.
  - In hóa đơn (kết nối máy in nhiệt).

## 3. Quản lý Sản phẩm & Thực đơn (Menu Management)
Dành cho người quản lý để cập nhật menu:
- **Danh mục sản phẩm**: Phân loại (Cà phê pha máy, Cà phê truyền thống, Trà trái cây, Bánh ngọt, v.v.).
- **Sản phẩm**: Tên, hình ảnh, giá bán, mô tả.
- **Combo/Bán chéo (Cross-sell)**: Tạo các combo (Ví dụ: Cà phê + Bánh giảm giá).
- **Trạng thái**: Bật/Tắt món (khi hết nguyên liệu).

## 4. Quản lý Kho & Nguyên vật liệu (Inventory Management)
Rất quan trọng để kiểm soát chi phí, tránh thất thoát:
- **Danh mục nguyên liệu**: Quản lý chi tiết (Cà phê hạt, Sữa tươi, Đường, Ly nhựa, Ống hút...).
- **Định lượng (Recipe/BOM)**: Thiết lập công thức cho từng món (VD: 1 ly cafe sữa đá = 20g cafe + 30ml sữa đặc + 1 ly nhựa + 1 ống hút). Tự động trừ kho khi bán.
- **Nhập/Xuất kho**: Ghi nhận các phiếu nhập hàng từ nhà cung cấp, xuất kho hủy (do hỏng).
- **Cảnh báo tồn kho**: Cảnh báo khi nguyên liệu xuống dưới mức tối thiểu.
- **Kiểm kho**: Đối chiếu số lượng thực tế với phần mềm cuối ngày/tuần.

## 5. Quản lý Nhân sự (Staff Management)
- **Danh sách nhân viên**: Thông tin cá nhân, vị trí, mức lương.
- **Ca làm việc**: Xếp ca, quản lý đổi ca.
- **Chấm công**: Check-in/Check-out.
- **Tính lương**: Theo giờ hoặc theo tháng, cộng thưởng/phạt.

## 6. Quản lý Khách hàng (CRM & Loyalty)
- **Hồ sơ khách hàng**: Tên, số điện thoại, ngày sinh, lịch sử mua hàng.
- **Thẻ thành viên**: Hạng thành viên (Đồng, Bạc, Vàng).
- **Tích điểm & Đổi thưởng**: Tích điểm theo doanh thu, dùng điểm thanh toán.
- **Marketing**: Gửi SMS/Email chúc mừng sinh nhật, khuyến mãi.

## 7. Báo cáo & Thống kê (Reports & Analytics)
Bảng điều khiển (Dashboard) dành cho chủ quán:
- **Báo cáo doanh thu**: Theo ngày, tuần, tháng, năm. Theo khoảng thời gian tùy chọn.
- **Phân tích sản phẩm**: Món bán chạy nhất, món mang lại lợi nhuận cao nhất.
- **Báo cáo ca/Nhân viên**: Doanh thu theo từng nhân viên thu ngân.
- **Báo cáo kho/Chi phí**: Báo cáo nhập xuất tồn, cảnh báo hao hụt nguyên liệu.
- **Biểu đồ trực quan**: So sánh sự tăng trưởng.
