// Định nghĩa decorator Logger
function Logger(constructor: Function) {
  // Ghi log thông tin bắt đầu
  console.log('««««« Logging »»»»»');
  // Ghi log constructor của class
  console.log(constructor);
}

// Áp dụng decorator Logger cho class Person
@Logger
class Person {
  // Khai báo thuộc tính name với giá trị 'Max'
  name = 'Max';
  
  // Constructor của class Person
  constructor() {
      // Ghi log khi tạo một đối tượng person
      console.log('Creating person object');
  }
}

// Tạo một đối tượng từ class Person
const pers = new Person();
// Ghi log đối tượng pers
console.log(pers);
