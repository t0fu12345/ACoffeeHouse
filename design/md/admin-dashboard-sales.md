# Thiết kế Trang Dashboard & Bán hàng (Admin Sales)

## 1. Tổng quan Dashboard (`/admin/dashboard`)
- **Mục đích**: Cung cấp cái nhìn toàn cảnh về hoạt động kinh doanh cho chủ quán.
- **Layout**: CSS Grid, gồm nhiều Card thông tin dạng Widget.
- **Widget Thống kê nhanh (Cards)**:
  - Doanh thu hôm nay (Kèm % tăng/giảm so với hôm qua).
  - Số lượng đơn hàng đã bán.
  - Khách hàng thành viên mới.
- **Biểu đồ (Charts)** (Sử dụng thư viện Recharts hoặc Chart.js):
  - **Biểu đồ Cột/Đường (Line/Bar Chart)**: Hiển thị doanh thu 7 ngày hoặc 30 ngày gần nhất.
  - **Biểu đồ Tròn (Pie Chart)**: Cơ cấu doanh thu theo Danh mục sản phẩm.
- **Bảng xếp hạng (Top Lists)**:
  - Bảng Top 5 sản phẩm bán chạy nhất trong tháng.
  - Bảng Top nhân viên có doanh số chốt đơn cao nhất.
- **Khu vực Cảnh báo (Alerts)**:
  - Danh sách các nguyên liệu sắp hết tồn kho cần nhập thêm.

## 2. Quản lý Đơn hàng (`/admin/orders`)
- **Mục đích**: Tra cứu lịch sử bán hàng, giải quyết khiếu nại.
- **Layout**: Bảng dữ liệu với thanh công cụ lọc chi tiết phía trên.
- **Thanh lọc (Filter Tool bar)**:
  - Date Range Picker (Chọn từ ngày - đến ngày).
  - Dropdown: Phương thức thanh toán, Trạng thái đơn hàng, Thu ngân thực hiện.
- **Bảng Dữ liệu**:
  - Mã đơn hàng (VD: #ORD-00123).
  - Thời gian tạo đơn.
  - Tên/SĐT Khách hàng (nếu có lưu).
  - Tổng tiền thanh toán.
  - Trạng thái (Đã hoàn thành, Đã hủy).
  - Nút Action: "Xem chi tiết".

## 3. Chi tiết Đơn hàng (`/admin/orders/:id`)
- **Layout**: Mô phỏng hình ảnh tờ Hóa đơn dài (Receipt) hoặc trang chi tiết chia khối.
- **Khối Thông tin Chung**: Mã đơn, Trạng thái, Thu ngân, Thời gian, Kênh bán (Tại bàn số mấy / Mang đi).
- **Khối Danh sách Món**:
  - Liệt kê các món, tùy chọn size/topping, đơn giá, số lượng, thành tiền từng dòng.
- **Khối Tổng kết Tài chính**:
  - Tổng tiền hàng.
  - Chiết khấu/Khuyến mãi (hiển thị mã áp dụng).
  - Thuế VAT, Phí.
  - Tổng thanh toán cuối cùng.
  - Phương thức khách đã trả.
- **Thao tác**: Nút "In lại hóa đơn", Nút "Hoàn tiền/Hủy đơn" (Yêu cầu quyền Admin).
