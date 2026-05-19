export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingJava?: number;
}

export function getAvailableTeacher(teacher: Teacher): string {
    if (!teacher.experienceTeachingJava) {
        return "No available teacher";
    }

    return `Available Teacher: ${teacher.firstName}`;
}