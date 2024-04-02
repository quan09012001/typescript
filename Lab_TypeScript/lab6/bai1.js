var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Định nghĩa decorator Logger
function Logger(constructor) {
    // Ghi log thông tin bắt đầu
    console.log('««««« Logging »»»»»');
    // Ghi log constructor của class
    console.log(constructor);
}
// Áp dụng decorator Logger cho class Person
let Person = class Person {
    // Constructor của class Person
    constructor() {
        // Khai báo thuộc tính name với giá trị 'Max'
        this.name = 'Max';
        // Ghi log khi tạo một đối tượng person
        console.log('Creating person object');
    }
};
Person = __decorate([
    Logger,
    __metadata("design:paramtypes", [])
], Person);
// Tạo một đối tượng từ class Person
const pers = new Person();
// Ghi log đối tượng pers
console.log(pers);
