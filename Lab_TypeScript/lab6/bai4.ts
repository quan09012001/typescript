// Định nghĩa decorator Log3, nhận ba đối số: target (tham chiếu đến class), name (tên của phương thức), và descriptor (mô tả của thuộc tính)
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
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
    // Khai báo một thuộc tính title
    title: string;
    // Khai báo một thuộc tính private _price
    private _price: number;

    // Định nghĩa setter cho thuộc tính price
    set price(val: number) { }

    // Constructor của class Product
    constructor(t: string, p: number) {
        // Gán giá trị cho thuộc tính title và _price
        this.title = t;
        this._price = p;
    }

    // Áp dụng decorator Log3 cho phương thức getPriceWithTax
    @Log3
    getPriceWithTax() { }
}
