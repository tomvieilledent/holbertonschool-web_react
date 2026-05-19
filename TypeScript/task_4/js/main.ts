import { Teacher, getAvailableTeacher } from "./subjects/Teacher";
import { Java } from "./subjects/Java";
import { Cpp } from "./subjects/Cpp";
import { React } from "./subjects/React";

const teacher: Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingJava: 10,
};

const java = new Java(teacher);
const cpp = new Cpp(teacher);
const react = new React(teacher);

console.log(getAvailableTeacher(teacher));
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());
console.log(cpp.getRequirements());
console.log(react.getRequirements());