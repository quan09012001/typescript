/* interface như 1 function */
// Khai báo một biến có tên là add với kiểu dữ liệu là AddFn (tuân thủ cấu trúc của giao diện AddFn)
var add;
// Gán một hàm vào biến add, hàm này nhận hai tham số số nguyên và trả về tổng của chúng
add = function (n1, n2) {
    return n1 + n2;
};
// Sử dụng biến add như một hàm bình thường để tính tổng của hai số và lưu kết quả vào biến result
var result = add(5, 3); // Kết quả là 8
console.log(result);
