// interface Named {
//     readonly name?: string;
//     outputName?: string;
// }
// Định nghĩa một lớp Person triển khai interface Greetable.
var Person = /** @class */ (function () {
    // Constructor của lớp Person, nhận vào hai tham số có thể có giá trị hoặc không, và gán chúng vào các thuộc tính tương ứng.
    function Person(name, outputName) {
        this.name = name;
        this.outputName = outputName;
    }
    // Triển khai phương thức greet từ interface Greetable, nhận vào một tham số phrase có kiểu string và không có giá trị trả về.
    Person.prototype.greet = function (phrase) {
        // In ra màn hình câu chào với phrase và tên của người đó (nếu có).
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
// Khai báo một biến user1 có kiểu là Greetable và gán cho nó một đối tượng của lớp Person.
var user1 = new Person('John', 'Doe');
// Gọi phương thức greet trên đối tượng user1 với một câu chào.
user1.greet('Hi there - I am');
// In ra đối tượng user1 lên màn hình.
console.log(user1);
