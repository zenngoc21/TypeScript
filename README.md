# 30 Bài Tập OOP với TypeScript

Đây là lời giải cho 30 bài tập lập trình hướng đối tượng (OOP) bằng TypeScript, mỗi bài là một file riêng trong thư mục `src/`.

## 1. Cài đặt môi trường

### Bước 1: Cài Node.js
Tải và cài Node.js (bản LTS) tại: https://nodejs.org

Kiểm tra đã cài thành công:
```bash
node -v
npm -v
```

### Bước 2: Cài các gói cần thiết
Trong thư mục dự án (nơi có file `package.json`), chạy:
```bash
npm install
```
Lệnh này sẽ cài `typescript`, `ts-node` và `@types/node`.

## 2. Cách chạy từng bài

Chạy trực tiếp một file `.ts` bằng `ts-node` mà không cần biên dịch trước:
```bash
npx ts-node src/01-person.ts
npx ts-node src/05-bank-account.ts
npx ts-node src/17-singleton-logger.ts
```
Cứ đổi tên file tương ứng để chạy bài bạn muốn.

## 3. Cách biên dịch sang JavaScript (tuỳ chọn)

Nếu muốn biên dịch toàn bộ ra JavaScript (thư mục `dist/`) rồi chạy bằng Node.js thuần:
```bash
npx tsc
node dist/01-person.js
```

## 4. Danh sách bài tập

| # | File | Nội dung |
|---|------|----------|
| 1 | 01-person.ts | Class Person, hiển thị thông tin |
| 2 | 02-student.ts | Student kế thừa Person |
| 3 | 03-car.ts | Class Car |
| 4 | 04-rectangle.ts | Rectangle: diện tích, chu vi |
| 5 | 05-bank-account.ts | BankAccount: deposit/withdraw |
| 6 | 06-book.ts | Class Book |
| 7 | 07-user.ts | User: private + getter/setter |
| 8 | 08-product-filter.ts | Product: lọc mảng theo giá |
| 9 | 09-animal-interface.ts | Interface Animal |
| 10 | 10-account-modifiers.ts | Account: public/private/readonly |
| 11 | 11-animal-dog-cat.ts | Animal → Dog, Cat |
| 12 | 12-flyable-swimmable.ts | Interfaces Flyable, Swimmable |
| 13 | 13-shape-abstract.ts | Abstract Shape → Square, Circle |
| 14 | 14-employee-manager-developer.ts | Employee → Manager, Developer |
| 15 | 15-library.ts | Library chứa Book và User |
| 16 | 16-generic-box.ts | Generic class Box<T> |
| 17 | 17-singleton-logger.ts | Singleton Logger |
| 18 | 18-mathutil-static.ts | Static class MathUtil |
| 19 | 19-polymorphism.ts | Method overriding / đa hình |
| 20 | 20-vehicle-interface.ts | Interface Vehicle → Car, Bike |
| 21 | 21-generic-repository.ts | Generic Repository<T> |
| 22 | 22-stack.ts | Class Stack |
| 23 | 23-payment-interface.ts | Interface Payment → CashPayment, CardPayment |
| 24 | 24-appliance-abstract.ts | Abstract Appliance → Fan, AirConditioner |
| 25 | 25-shape-static.ts | Static method describe() |
| 26 | 26-order.ts | Order: tính tổng tiền |
| 27 | 27-teacher.ts | Teacher kế thừa Person |
| 28 | 28-animal-protected.ts | Protected method makeSound() |
| 29 | 29-movable-interface.ts | Interface Movable → Car, Robot |
| 30 | 30-school.ts | School chứa Student và Teacher |

## 5. Ghi chú học tập

- **Kế thừa (Inheritance)**: bài 2, 11, 14, 19, 27, 28 — dùng `extends`.
- **Interface**: bài 9, 12, 20, 23, 29 — dùng `implements`.
- **Abstract class**: bài 13, 24 — không thể khởi tạo trực tiếp, bắt buộc lớp con cài đặt phương thức trừu tượng.
- **Generic**: bài 16, 21 — dùng `<T>` để viết code tái sử dụng cho nhiều kiểu dữ liệu.
- **Static**: bài 17, 18, 25 — thuộc về class chứ không thuộc về từng instance.
- **Access modifiers**: `public`, `private`, `protected`, `readonly` — xuất hiện xuyên suốt, đặc biệt rõ ở bài 7, 10, 28.
