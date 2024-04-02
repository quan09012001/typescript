// Định nghĩa một lớp trừu tượng Department
var Department = /** @class */ (function () {
    // Thuộc tính id và name, id chỉ đọc (readonly)
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // Mảng chứa danh sách nhân viên, được bảo vệ (protected)
        this.employees = [];
    }
    // Phương thức tĩnh tạo mới một nhân viên
    Department.createEmployee = function (name) {
        return { name: name };
    };
    // Phương thức thêm nhân viên vào mảng employees
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    // Phương thức in thông tin về nhân viên
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    // Thuộc tính tĩnh fiscalYear với giá trị mặc định là 2020
    Department.fiscalYear = 2020;
    return Department;
}());
// Sử dụng lớp Department
var department = new Department(1, 'IT');
department.addEmployee(Department.createEmployee('John'));
department.addEmployee(Department.createEmployee('Jane'));
department.printEmployeeInformation();
console.log(Department.fiscalYear);
