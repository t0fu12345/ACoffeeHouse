# Thiết kế Trang Xác Thực (Authentication Pages)

## 1. Trang Đăng nhập (`/login`)
- **Layout**: Centered Card Layout (Một khối chữ nhật nằm giữa màn hình, background có thể là hình ảnh quán cafe blur).
- **Form**:
  - Input: Số điện thoại hoặc Tên đăng nhập.
  - Input: Mật khẩu (có icon mắt để xem/ẩn).
  - Checkbox: "Ghi nhớ đăng nhập".
  - Link: "Quên mật khẩu?".
  - Nút: "Đăng Nhập" (Full width, màu chủ đạo).
- **Logic**:
  - Xác thực thông qua API Backend.
  - Nếu là tài khoản Admin/Manager -> Chuyển hướng về `/admin/dashboard`.
  - Nếu là tài khoản Cashier/Barista -> Chuyển hướng về `/pos`.

## 2. Trang Quên mật khẩu (`/forgot-password`)
- **Layout**: Tương tự trang Đăng nhập.
- **Bước 1**: Nhập SĐT/Email. Nút "Gửi mã xác nhận OTP".
- **Bước 2**: Nhập mã OTP đã nhận.
- **Bước 3**: Nhập mật khẩu mới và xác nhận mật khẩu.
