// Định nghĩa một lớp trừu tượng Department
class Department {
    // Thuộc tính id và name, id chỉ đọc (readonly)
    constructor(public readonly id: number, public name: string) {
        // Mảng chứa danh sách nhân viên, được bảo vệ (protected)
        this.employees = [];
    }

    // Phương thức tĩnh tạo mới một nhân viên
    static createEmployee(name: string) {
        return { name: name };
    }

    // Phương thức thêm nhân viên vào mảng employees
    addEmployee(employee: any) {
        this.employees.push(employee);
    }

    // Phương thức in thông tin về nhân viên
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }

    // Thuộc tính tĩnh fiscalYear với giá trị mặc định là 2020
    static fiscalYear = 2020;

    protected employees: any[];
}

// Sử dụng lớp Department
const department = new Department(1, 'IT');
department.addEmployee(Department.createEmployee('John'));
department.addEmployee(Department.createEmployee('Jane'));
department.printEmployeeInformation();
console.log(Department.fiscalYear);
