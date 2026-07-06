# Thiết kế Trang Quản lý Kho (Inventory Management)

## 1. Danh sách Nguyên vật liệu (`/admin/inventory/materials`)
- **Mục đích**: Quản lý danh mục các mặt hàng lưu kho, thiết lập ngưỡng cảnh báo.
- **Layout**: Bảng dữ liệu có khả năng sắp xếp (Sortable Table).
- **Các cột hiển thị**: 
  - Mã SKU.
  - Tên nguyên liệu.
  - Phân loại (Hạt, Sữa, Cốc/Ly, Đóng chai...).
  - Đơn vị tính cơ bản (Kg, Gram, Lít, ML, Hộp, Cái).
  - Tồn kho thực tế hiện tại.
  - Tồn kho tối thiểu (Ngưỡng cảnh báo).
- **Trực quan hóa**: Dòng nguyên liệu nào có Tồn kho <= Tồn kho tối thiểu sẽ được highlight đỏ hoặc có icon cảnh báo để quản lý biết cần nhập hàng.
- **Action**: Nút Thêm mới nguyên liệu (Mở Modal).

## 2. Quản lý Nhập kho (`/admin/inventory/import`)
- **Màn hình Lịch sử nhập**: 
  - Bảng liệt kê các Phiếu Nhập Kho (Mã phiếu, Ngày nhập, Nhà cung cấp, Người lập phiếu, Tổng giá trị).
  - Nút "Tạo Phiếu Nhập Mới".
- **Màn hình Tạo Phiếu Nhập Kho Mới**:
  - **Khối Thông tin chung**: Chọn Nhà cung cấp (Dropdown), Chọn Ngày nhập hàng, Ghi chú phiếu.
  - **Khối Chi tiết hàng nhập**: Bảng nhập liệu dạng Spreadsheet.
    - Autocomplete Input để tìm tên nguyên liệu.
    - Cột Số lượng nhập.
    - Cột Đơn giá nhập.
    - Cột Thành tiền (Tính tự động).
    - Nút "Thêm dòng" để nhập nhiều loại nguyên liệu cùng lúc.
  - **Tổng kết**: Hiển thị Tổng tiền phiếu nhập. Nút "Lưu và Chốt phiếu". Khi chốt, số lượng tồn kho tự động được cộng dồn.

## 3. Quản lý Xuất/Hủy kho (`/admin/inventory/export`)
- **Mục đích**: Quản lý các trường hợp xuất kho tiêu hao nội bộ, hoặc hủy do hỏng hóc, hết hạn (Không phải xuất bán).
- **Layout**: Tương tự quy trình Nhập Kho.
- **Màn hình Tạo Phiếu Xuất/Hủy**:
  - Chọn Loại phiếu: Xuất sử dụng / Xuất hủy.
  - Nhập Lý do chi tiết.
  - Bảng chọn Nguyên liệu và số lượng cần xuất/hủy.
  - Nút "Chốt phiếu". Khi chốt, số lượng tồn kho tự động bị trừ đi.

## 4. Lịch sử Kho (`/admin/inventory/history`)
- **Sổ kho (Ledger)**: Bảng ghi nhận mọi biến động (In/Out) của một nguyên liệu cụ thể.
- **Cột**: Thời gian, Loại hành động (Bán hàng, Nhập kho, Hủy kho), Mã Phiếu/Đơn hàng liên quan, Số lượng thay đổi (+/-), Tồn kho sau đó.
