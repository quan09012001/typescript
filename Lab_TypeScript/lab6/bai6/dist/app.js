"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Khởi tạo đối tượng registeredValidators để lưu trữ các validators đã đăng ký
const registeredValidators = {};
// Decorator Required: đánh dấu thuộc tính yêu cầu phải có giá trị
function Required(target, propName) {
    var _a, _b;
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: [...((_b = (_a = registeredValidators[className]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
// Decorator PositiveNumber: đánh dấu thuộc tính phải là số dương
function PositiveNumber(target, propName) {
    var _a, _b;
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [propName]: [...((_b = (_a = registeredValidators[className]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
// Hàm validate: kiểm tra tính hợp lệ của đối tượng dựa trên cấu hình validators đã đăng ký
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true; // Không có cấu hình validator, trả về true
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop]; // Kiểm tra thuộc tính có giá trị không
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0; // Kiểm tra thuộc tính là số dương
                    break;
            }
        }
    }
    return isValid; // Trả về kết quả cuối cùng của việc kiểm tra
}
// Định nghĩa class Course
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required // Áp dụng decorator Required cho thuộc tính title
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber // Áp dụng decorator PositiveNumber cho thuộc tính price
], Course.prototype, "price", void 0);
// Lắng nghe sự kiện submit của form
const courseForm = document.querySelector('form');
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener('submit', event => {
    event.preventDefault();
    // Lấy giá trị từ các input
    const titleEl = document.querySelector('#title');
    const priceEl = document.querySelector('#price');
    const title = titleEl.value;
    const price = +priceEl.value; // Chuyển đổi giá trị nhập vào thành số
    // Tạo đối tượng Course từ giá trị nhập vào
    const createdCourse = new Course(title, price);
    // Kiểm tra tính hợp lệ của đối tượng và hiển thị thông báo nếu không hợp lệ
    if (!validate(createdCourse)) {
        alert("Invalid input.");
        return;
    }
});
// ValidatorConfig là một interface để định nghĩa cấu hình validator.
// registeredValidators là một đối tượng dùng để lưu trữ cấu hình validator đã đăng ký.
// Decorators Required và PositiveNumber được sử dụng để đánh dấu các thuộc tính của class Course và lưu trữ thông tin validator vào registeredValidators.
// Hàm validate kiểm tra tính hợp lệ của một đối tượng dựa trên cấu hình validator đã đăng ký.
// Sự kiện submit của form được lắng nghe, sau đó giá trị từ các input được sử dụng để tạo một đối tượng Course mới, và sau đó kiểm tra tính hợp lệ của đối tượng này bằng cách gọi hàm validate.
