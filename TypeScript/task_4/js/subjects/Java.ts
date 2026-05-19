import { Subject } from "./Subject";
import { Teacher, getAvailableTeacher as getAvailableTeacherFn } from "./Teacher";

export class Java extends Subject {
    constructor(teacher: Teacher) {
        super(teacher);
    }

    getRequirements(): string {
        return "Here is what you need to know to be a Java teacher";
    }

    getAvailableTeacher(): string {
        return getAvailableTeacherFn(this.teacher);
    }
}