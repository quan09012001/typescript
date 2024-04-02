var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Định nghĩa decorator Log3, nhận ba đối số: target (tham chiếu đến class), name (tên của phương thức), và descriptor (mô tả của thuộc tính)
function Log3(target, name, descriptor) {
    // Ghi log để chỉ ra rằng đây là decorator của phương thức
    console.log('Method decorator!');
    // Ghi log tham chiếu đến class
    console.log(target);
    // Ghi log tên của phương thức
    console.log(name);
    // Ghi log mô tả của thuộc tính
    console.log(descriptor);
}
// Định nghĩa class Product
class Product {
    // Định nghĩa setter cho thuộc tính price
    set price(val) { }
    // Constructor của class Product
    constructor(t, p) {
        // Gán giá trị cho thuộc tính title và _price
        this.title = t;
        this._price = p;
    }
    // Áp dụng decorator Log3 cho phương thức getPriceWithTax
    getPriceWithTax() { }
}
__decorate([
    Log3,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
