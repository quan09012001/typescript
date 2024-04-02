// Định nghĩa decorator Logger nhận một chuỗi làm đối số
function Logger(logString: string) {
  // Trả về một decorator mới nhận constructor của class
  return function (constructor: Function) {
      // Ghi log chuỗi được truyền vào khi áp dụng decorator
      console.log(logString);
      // Ghi log constructor của class
      console.log(constructor);
  };
}

// Áp dụng decorator Logger với chuỗi "LOGGING PERSON" cho class Person
@Logger("LOGGING PERSON")
class Person {
  // Khai báo thuộc tính name với giá trị "Max"
  name = "Max";

  // Constructor của class Person
  constructor() {
      // Ghi log khi tạo một đối tượng person
      console.log("Creating person object...");
  }
}

// Tạo một đối tượng từ class Person
const person = new Person();
