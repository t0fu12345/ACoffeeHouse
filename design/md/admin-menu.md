# Thiết kế Trang Quản lý Thực đơn (Menu Management)

## 1. Quản lý Danh mục (`/admin/categories`)
- **Mục đích**: Phân loại sản phẩm để hiển thị trên POS thuận tiện.
- **Layout**: Bảng dữ liệu (Table) kết hợp Header Actions.
- **Tính năng**: 
  - Bảng hiển thị: ID, Tên danh mục, Số lượng món bên trong, Trạng thái hoạt động.
  - Hành động: Thêm mới (Mở Modal), Chỉnh sửa (Modal), Xóa.
- **Form Modal Thêm/Sửa**: 
  - Input: Tên danh mục.
  - Upload ảnh đại diện nhỏ (Tùy chọn).

## 2. Quản lý Sản phẩm (`/admin/products`)
- **Layout**: Danh sách (List/Table) với bộ lọc mạnh mẽ.
- **Bộ lọc (Filter Bar)**: Lọc theo danh mục (Dropdown), Lọc theo trạng thái (Đang bán/Ngừng bán), Ô tìm kiếm theo tên.
- **Bảng dữ liệu**:
  - Các cột: Ảnh đại diện (Thumbnail), Mã SP, Tên sản phẩm, Danh mục, Giá cơ bản, Trạng thái (Toggle Switch Bật/Tắt nhanh).
  - Cột Hành động: Icon Chỉnh sửa, Icon Cài đặt Định lượng, Icon Xóa.
- **Thao tác**: Nút "Thêm sản phẩm mới" chuyển hướng sang trang chi tiết.

## 3. Trang Chi tiết Thêm/Sửa Sản phẩm (`/admin/products/create` | `/admin/products/:id`)
- **Layout**: Form nhập liệu chia làm 2 cột tỷ lệ 7:3.
- **Cột Trái (Thông tin chính)**:
  - Input: Tên sản phẩm, Mã sản phẩm (SKU).
  - Textarea: Mô tả sản phẩm (Hiển thị cho app order online sau này).
  - **Quản lý Biến thể (Variants/Sizes)**:
    - Bảng nhập liệu động: Thêm các size (VD: S, M, L) và Giá tương ứng. Cột giá gốc, cột giá bán.
  - **Quản lý Tùy chọn (Modifiers)**:
    - Select Box chọn nhóm Topping được phép áp dụng cho món này (VD: Nhóm Thạch, Nhóm Trân châu).
- **Cột Phải (Cài đặt phụ)**:
  - Khối Upload hình ảnh: Vùng kéo thả (Drag & Drop) ảnh sản phẩm.
  - Khối Phân loại: Chọn Danh mục (Dropdown).
  - Trạng thái: Radio (Đang bán / Hết hàng tạm thời).
  - Nút Action: Lưu lại, Hủy.

## 4. Trang Định lượng Nguyên liệu (`/admin/products/:id/recipe`)
- **Mục đích**: Gắn kết sản phẩm bán ra với nguyên liệu kho để tự động trừ kho (BOM - Bill of Materials).
- **Layout**: Dạng Form Master-Detail.
- **Hiển thị**: 
  - Header: Tên món ăn/thức uống, Ảnh thu nhỏ.
  - Nếu món có nhiều Size, thiết kế dạng Tabs (Tab Size S, Tab Size M...) để định lượng riêng.
- **Bảng Định Lượng**:
  - Danh sách các nguyên liệu cấu thành.
  - Cột: Tên nguyên liệu, Số lượng tiêu hao, Đơn vị tính.
  - Icon Xóa nguyên liệu khỏi công thức.
- **Form Thêm nguyên liệu**: Select box tìm kiếm nguyên liệu từ hệ thống Kho, Input nhập số lượng, Nút "Thêm vào công thức".
