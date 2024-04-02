// interface Named {
//     readonly name?: string;
//     outputName?: string;
// }

// interface Greetable extends Named {
//     greet (phrase: string): void;
// }

// let user1: Greetable;
// user1 = new Person();
// user1.greet('Hi there - I am')
// console.log(user1);



// Định nghĩa một interface tên là Named với một thuộc tính tùy chọn là name có kiểu string và một thuộc tính tùy chọn khác là outputName có kiểu string.
interface Named {
    readonly name?: string;
    outputName?: string;
}

// Định nghĩa một interface Greetable mở rộng từ interface Named.
interface Greetable extends Named {
    // Định nghĩa một phương thức greet có một tham số là phrase có kiểu string và không có giá trị trả về.
    greet(phrase: string): void;
}

// Định nghĩa một lớp Person triển khai interface Greetable.
class Person implements Greetable {
    // Khai báo thuộc tính name có kiểu string, có thể có giá trị hoặc không.
    name?: string;
    // Khai báo thuộc tính outputName có kiểu string, có thể có giá trị hoặc không.
    outputName?: string;

    // Constructor của lớp Person, nhận vào hai tham số có thể có giá trị hoặc không, và gán chúng vào các thuộc tính tương ứng.
    constructor(name?: string, outputName?: string) {
        this.name = name;
        this.outputName = outputName;
    }

    // Triển khai phương thức greet từ interface Greetable, nhận vào một tham số phrase có kiểu string và không có giá trị trả về.
    greet(phrase: string) {
        // In ra màn hình câu chào với phrase và tên của người đó (nếu có).
        console.log(`${phrase} ${this.name}`);
    }
}

// Khai báo một biến user1 có kiểu là Greetable và gán cho nó một đối tượng của lớp Person.
let user1: Greetable = new Person('John', 'Doe');
// Gọi phương thức greet trên đối tượng user1 với một câu chào.
user1.greet('Hi there - I am');
// In ra đối tượng user1 lên màn hình.
console.log(user1);
