interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attributeName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 17
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

const StudentClass: StudentClassConstructor = class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
};

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
