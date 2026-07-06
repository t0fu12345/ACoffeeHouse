# Thiết kế Trang Nhân sự & CRM

## 1. Quản lý Nhân sự (`/admin/staff`)
- **Danh sách nhân sự**: Bảng hiển thị thông tin cơ bản (Mã NV, Tên, Số điện thoại, Vai trò/Chức vụ, Trạng thái làm việc). Nút Thêm nhân viên.
- **Trang Chi tiết Nhân viên (Profile/Edit)**:
  - **Thông tin cá nhân**: Họ tên, Ngày sinh, CCCD, Địa chỉ, Ngày vào làm.
  - **Thông tin Tài khoản**: Username (SĐT), Reset Mật khẩu.
  - **Phân quyền (Role)**: Select box gán vai trò (Admin, Manager, Cashier, Barista, Waiter). Quyết định quyền truy cập vào các module trên Web App và POS.
  - **Lương thưởng**: Cài đặt mức lương cơ bản (theo giờ hoặc theo tháng).

## 2. Chấm công & Xếp ca (`/admin/timesheet`)
- **Giao diện Xếp ca (Roster)**:
  - Dạng Lịch (Calendar View). Trục hoành là Ngày trong tuần, Trục tung là Nhân viên.
  - Kéo thả (Drag & Drop) khối thời gian ca làm việc (Sáng, Chiều, Tối) gán cho nhân viên.
- **Bảng Chấm công Thực tế**:
  - Ghi nhận giờ Check-in / Check-out của từng người. 
  - Tính tổng số giờ làm hợp lệ trong ngày.

## 3. Tính lương (`/admin/payroll`)
- **Bảng Lương Tổng hợp**: 
  - Chọn Tháng cần tính.
  - Hệ thống tự động tính toán: (Tổng giờ làm x Lương theo giờ) + Phụ cấp.
  - Các cột Input: Nhập tiền Thưởng, Nhập tiền Phạt (Đi trễ).
  - Cột Tổng lương thực nhận. Nút "Chốt lương/Đã thanh toán".

## 4. Quản lý Khách hàng (`/admin/customers`)
- **Danh sách Hội viên**: Bảng thông tin khách hàng (Tên, SĐT, Cấp bậc thành viên - Đồng/Bạc/Vàng, Điểm tích lũy hiện có).
- **Chi tiết Khách hàng**:
  - Thống kê lịch sử mua hàng (Tổng số đơn, Tổng tiền đã chi tiêu, Món ăn yêu thích nhất).
  - Lịch sử tích/tiêu điểm.
  - Nút thao tác nhanh: Cập nhật hạng thẻ thủ công, Cộng/Trừ điểm thủ công.

## 5. Quản lý Khuyến mãi (`/admin/promotions`)
- **Mục đích**: Thiết lập các chương trình Marketing để thu ngân áp dụng lúc thanh toán.
- **Danh sách Mã giảm giá**: Bảng các Coupon đang chạy (Mã CODE, Mức giảm, Hạn sử dụng, Trạng thái).
- **Form Tạo Khuyến mãi Mới**:
  - Nhập Mã CODE (VD: SUMMER20).
  - Loại giảm giá: Radio button (Giảm theo số tiền VND / Giảm theo phần trăm %).
  - Giá trị giảm: VD 20,000 hoặc 15%. (Nếu là % thì có thêm Input "Mức giảm tối đa").
  - Điều kiện áp dụng: Tổng giá trị đơn hàng tối thiểu.
  - Thời gian: Ngày bắt đầu - Ngày kết thúc.
