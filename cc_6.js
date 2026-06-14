// Employee Class

class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department}.`;
    }
}
// Manager Class

class Manager extends Employee {

    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
    }
}

// Sample Employees and Managers

let employee1 = new Employee(
    "John Smith",
    "Sales"
);

let employee2 = new Employee(
    "Sarah Johnson",
    "Marketing"
);

let manager1 = new Manager(
    "Michael Brown",
    "IT",
    8
);

let manager2 = new Manager(
    "Emily Davis",
    "Finance",
    5
);
