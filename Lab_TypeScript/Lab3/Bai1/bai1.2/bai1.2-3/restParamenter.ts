//*Rest Parameter (Tham số rest):
const dongVat = (name, ...info) => {
    console.log(`${name}, ${info}`);
}
dongVat("Chó", 5, "Trắng", "Mũi đỏ");