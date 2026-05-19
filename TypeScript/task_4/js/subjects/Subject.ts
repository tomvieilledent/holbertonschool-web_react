import { Teacher } from "./Teacher";

export class Subject {
    teacher: Teacher;

    constructor(teacher: Teacher) {
        this.teacher = teacher;
    }

    getRequirements(): string {
        return "Here is what you need to know to be a Subject";
    }
}