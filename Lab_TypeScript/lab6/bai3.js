var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Định nghĩa decorator Log, nhận hai đối số: target (tham chiếu đến class) và propertyName (tên thuộc tính)
function Log(target, propertyName) {
    // Ghi log để chỉ ra rằng đây là decorator của thuộc tính
    console.log('Property decorator!');
    // Ghi log target (tham chiếu đến class) và propertyName (tên của thuộc tính)
    console.log(target, propertyName);
}
// Định nghĩa class Product
class Product {
    // Định nghĩa setter cho thuộc tính price
    set price(val) {
        this._price = val;
    }
    // Constructor của class Product
    constructor(t, p) {
        // Gán giá trị cho thuộc tính title và _price
        this.title = t;
        this._price = p;
    }
    // Định nghĩa phương thức getPriceWithTax
    getPriceWithTax() { }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
