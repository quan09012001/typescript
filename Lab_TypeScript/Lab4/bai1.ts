/* interface như 1 function */

// Định nghĩa một giao diện (interface) có tên là AddFn để định rõ cấu trúc của một hàm
interface AddFn {
    // Hàm không tên (anonymous function) với hai tham số kiểu số nguyên và kiểu trả về là số nguyên
    (a: number, b: number): number;
}

// Khai báo một biến có tên là add với kiểu dữ liệu là AddFn (tuân thủ cấu trúc của giao diện AddFn)
let add: AddFn;

// Gán một hàm vào biến add, hàm này nhận hai tham số số nguyên và trả về tổng của chúng
add = (n1: number, n2: number) => {
    return n1 + n2;
};

// Sử dụng biến add như một hàm bình thường để tính tổng của hai số và lưu kết quả vào biến result
let result = add(5, 3); // Kết quả là 8
console.log(result);
