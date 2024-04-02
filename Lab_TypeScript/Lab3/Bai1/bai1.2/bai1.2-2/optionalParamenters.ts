//*Optional Parameters (Tham số tùy chọn):
const tenTuoi = (name, age = 18) => {
    return `${name}, ${age} tuổi`;
}
console.log(tenTuoi("Quân"));
console.log(tenTuoi("Quấn", 10));