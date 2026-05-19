interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Tom",
    lastName: "Vieilledent",
    age: 33,
    location: "Rodez"
}

const student2: Student = {
    firstName: "Nabil",
    lastName: "Zinini",
    age: 33,
    location: "Rodez"
}

const list: Student[] = [student1, student2];

console.log(list);
