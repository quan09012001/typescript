// Định nghĩa decorator Autobind, nhận ba đối số, nhưng chỉ sử dụng đối số thứ ba
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    // Lấy ra phương thức gốc
    const originalMethod = descriptor.value;
    // Tạo một mô tả thuộc tính mới
    const adjDescriptor: PropertyDescriptor = {
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
    // Khai báo một thuộc tính message
    message = 'This works!';

    // Áp dụng decorator Autobind cho phương thức showMessage
    @Autobind
    showMessage() {
        // Log ra giá trị của thuộc tính message
        console.log(this.message);
    }
}

// Tạo một instance của class Printer
const p = new Printer();
// Gọi phương thức showMessage của instance p
p.showMessage();

// Lấy ra một button từ DOM
const button = document.querySelector('button')!;
// Thêm một event listener cho button, sử dụng phương thức showMessage của instance p
button.addEventListener('click', p.showMessage);
