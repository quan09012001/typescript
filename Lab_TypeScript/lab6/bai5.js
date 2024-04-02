var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Định nghĩa decorator Autobind, nhận ba đối số, nhưng chỉ sử dụng đối số thứ ba
function Autobind(_, _2, descriptor) {
    // Lấy ra phương thức gốc
    const originalMethod = descriptor.value;
    // Tạo một mô tả thuộc tính mới
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // Bind phương thức gốc với context của instance hiện tại và trả về
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    // Trả về mô tả thuộc tính mới
    return adjDescriptor;
}
// Định nghĩa class Printer
class Printer {
    constructor() {
        // Khai báo một thuộc tính message
        this.message = 'This works!';
    }
    // Áp dụng decorator Autobind cho phương thức showMessage
    showMessage() {
        // Log ra giá trị của thuộc tính message
        console.log(this.message);
    }
}
__decorate([
    Autobind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "showMessage", null);
// Tạo một instance của class Printer
const p = new Printer();
// Gọi phương thức showMessage của instance p
p.showMessage();
// Lấy ra một button từ DOM
const button = document.querySelector('button');
// Thêm một event listener cho button, sử dụng phương thức showMessage của instance p
button.addEventListener('click', p.showMessage);
