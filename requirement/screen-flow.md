# Screen Flow & Page Structure (Hệ Thống Quản Lý Quán Cafe)

Dựa trên 7 module yêu cầu, hệ thống sẽ được chia thành các nhóm trang (Pages) dành cho từng đối tượng người dùng cụ thể.

## 1. Xác thực (Authentication)
*Dành cho tất cả người dùng.*
- `/login`: Đăng nhập hệ thống (bằng SĐT/Email và Mật khẩu hoặc mã PIN cho POS).
- `/forgot-password`: Quên mật khẩu.

## 2. Hệ thống POS (Point of Sale)
*Giao diện tối ưu thao tác nhanh trên máy tính bảng hoặc máy POS cảm ứng. Dành cho Thu ngân, Phục vụ, Pha chế.*
- **`/pos` (Trang chủ POS - Sơ đồ bàn/Khu vực)**: 
  - Xem danh sách bàn (Trống, Đang phục vụ, Bán mang đi).
  - Chọn bàn để bắt đầu order.
- **`/pos/order/:tableId` (Màn hình Ghi nhận Order)**: 
  - Chia theo danh mục (Cà phê, Trà, Bánh).
  - Chọn món, popup chọn Size, Topping, Ghi chú.
  - Xem giỏ hàng tạm thời, gửi order xuống bếp.
- **`/pos/checkout/:orderId` (Màn hình Thanh toán)**: 
  - Hiển thị chi tiết hóa đơn, thuế, phí.
  - Quét mã thẻ thành viên, nhập mã giảm giá.
  - Chọn phương thức thanh toán (Tiền mặt, Thẻ, QR Code).
  - In hóa đơn.
- **`/pos/kitchen` (Màn hình Bếp/Pha chế)**: 
  - Hiển thị danh sách các món cần làm (thời gian order, bàn nào).
  - Nút bấm xác nhận "Đã pha chế xong" để thông báo cho phục vụ.

## 3. Hệ thống Quản trị (Admin Dashboard)
*Giao diện Web App đầy đủ tính năng. Dành cho Admin và Quản lý.*

### 3.1. Tổng quan (Dashboard)
- **`/admin/dashboard`**: Biểu đồ doanh thu hôm nay, đơn hàng mới, top sản phẩm bán chạy, cảnh báo tồn kho thấp.

### 3.2. Quản lý Bán hàng (Sales)
- **`/admin/orders`**: Lịch sử tất cả các hóa đơn bán hàng.
- **`/admin/orders/:id`**: Xem chi tiết một hóa đơn cụ thể (món, nhân viên thu ngân, phương thức thanh toán, thời gian).

### 3.3. Quản lý Thực đơn (Menu Management)
- **`/admin/categories`**: Quản lý danh mục (Thêm/Sửa/Xóa).
- **`/admin/products`**: Danh sách tất cả món ăn/đồ uống.
- **`/admin/products/create` & `/admin/products/:id`**: Trang Thêm/Sửa chi tiết sản phẩm (Upload hình ảnh, giá, mô tả, bật/tắt món).
- **`/admin/products/:id/recipe`**: Cấu hình định lượng nguyên liệu cho sản phẩm.

### 3.4. Quản lý Kho & Nguyên liệu (Inventory)
- **`/admin/inventory/materials`**: Danh sách nguyên vật liệu, số lượng tồn kho hiện tại.
- **`/admin/inventory/import`**: Tạo phiếu nhập kho (chọn nhà cung cấp, mặt hàng, số lượng, giá nhập).
- **`/admin/inventory/export`**: Tạo phiếu xuất/hủy kho (lý do hủy, số lượng).
- **`/admin/inventory/history`**: Lịch sử nhập xuất tồn.

### 3.5. Quản lý Nhân sự (Staff)
- **`/admin/staff`**: Danh sách nhân sự đang làm việc.
- **`/admin/staff/:id`**: Hồ sơ chi tiết, phân quyền vai trò (Admin, Thu ngân, Pha chế).
- **`/admin/timesheet`**: Bảng chấm công, xếp ca làm việc.
- **`/admin/payroll`**: Quản lý và tính lương nhân viên cuối tháng.

### 3.6. Quản lý Khách hàng (CRM)
- **`/admin/customers`**: Danh sách khách hàng, điểm tích lũy, hạng thẻ.
- **`/admin/customers/:id`**: Lịch sử mua hàng của khách.
- **`/admin/promotions`**: Quản lý các chương trình khuyến mãi, tạo mã giảm giá (Coupon).

### 3.7. Báo cáo (Reports)
- **`/admin/reports/sales`**: Báo cáo doanh thu chi tiết (lọc theo ngày/tháng/nhân viên).
- **`/admin/reports/inventory`**: Báo cáo hao hụt, giá trị tồn kho.

### 3.8. Cài đặt hệ thống (Settings)
- **`/admin/settings/general`**: Thông tin quán (Tên, Logo, Địa chỉ, SĐT in trên bill).
- **`/admin/settings/tax`**: Cấu hình Thuế VAT, phí phục vụ.
- **`/admin/settings/printers`**: Cấu hình máy in hóa đơn, máy in bếp.
