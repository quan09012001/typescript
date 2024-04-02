// Định nghĩa interface ValidatorConfig để lưu trữ cấu hình validator
interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[]
    }
}

// Khởi tạo đối tượng registeredValidators để lưu trữ các validators đã đăng ký
const registeredValidators: ValidatorConfig = {};

// Decorator Required: đánh dấu thuộc tính yêu cầu phải có giá trị
function Required(target: any, propName: string) {
    const className = target.constructor.name;
    registeredValidators[className] = {
        ...registeredValidators[className],
        [propName]: [...(registeredValidators[className]?.[propName] ?? []), 'required']
    };
}

// Decorator PositiveNumber: đánh dấu thuộc tính phải là số dương
function PositiveNumber(target: any, propName: string) {
    const className = target.constructor.name;
    registeredValidators[className] = {
        ...registeredValidators[className],
        [propName]: [...(registeredValidators[className]?.[propName] ?? []), 'positive']
    };
}

// Hàm validate: kiểm tra tính hợp lệ của đối tượng dựa trên cấu hình validators đã đăng ký
function validate(obj: any) {
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
    @Required // Áp dụng decorator Required cho thuộc tính title
    title: string;
    @PositiveNumber // Áp dụng decorator PositiveNumber cho thuộc tính price
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

// Lắng nghe sự kiện submit của form
const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', event => {
    event.preventDefault();

    // Lấy giá trị từ các input
    const titleEl = document.querySelector('#title') as HTMLInputElement;
    const priceEl = document.querySelector('#price') as HTMLInputElement;
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