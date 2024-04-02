// Định nghĩa decorator Log, nhận hai đối số: target (tham chiếu đến class) và propertyName (tên thuộc tính)
function Log(target: any, propertyName: string | Symbol) {
    // Ghi log để chỉ ra rằng đây là decorator của thuộc tính
    console.log('Property decorator!');
    // Ghi log target (tham chiếu đến class) và propertyName (tên của thuộc tính)
    console.log(target, propertyName);
}

// Định nghĩa class Product
class Product {
    // Áp dụng decorator Log cho thuộc tính title
    @Log
    title: string;
    
    // Khai báo một thuộc tính private _price
    private _price: number;

    // Định nghĩa setter cho thuộc tính price
    set price(val: number) {
        this._price = val;
    }

    // Constructor của class Product
    constructor(t: string, p: number) {
        // Gán giá trị cho thuộc tính title và _price
        this.title = t;
        this._price = p;
    }

    // Định nghĩa phương thức getPriceWithTax
    getPriceWithTax() {}
}
