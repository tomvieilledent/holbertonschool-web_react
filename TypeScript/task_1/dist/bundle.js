/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var director1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('John', 'Doe');
console.log(student.displayName());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWFBLElBQU0sU0FBUyxHQUFZO0lBQ3ZCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztJQUNmLGVBQWUsRUFBRSxFQUFFO0NBQ3RCLENBQUM7QUFNRixJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUMzRCxPQUFPLFVBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQzFDLENBQUM7QUFXRCxJQUFNLFlBQVk7SUFDZCxzQkFBb0IsU0FBaUIsRUFBVSxRQUFnQjtRQUEzQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBUTtJQUFJLENBQUM7SUFFcEUscUNBQWMsR0FBZDtRQUNJLE9BQU8sbUJBQW1CLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxJQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFthdHRyaWJ1dGVOYW1lOiBzdHJpbmddOiBhbnk7XG59XG5cbmludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY29uc3QgZGlyZWN0b3IxOiBUZWFjaGVyID0ge1xuICAgIGZpcnN0TmFtZTogJ0pvaG4nLFxuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICAgIGxhc3ROYW1lOiAnRG9lJyxcbiAgICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gICAgY29udHJhY3Q6IGZhbHNlLFxuICAgIG51bWJlck9mUmVwb3J0czogMTdcbn07XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IHtcbiAgICByZXR1cm4gYCR7Zmlyc3ROYW1lWzBdfS4gJHtsYXN0TmFtZX1gO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudENsYXNzQ29uc3RydWN0b3Ige1xuICAgIG5ldyhmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRDbGFzc0ludGVyZmFjZTtcbn1cblxuY29uc3QgU3R1ZGVudENsYXNzOiBTdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciA9IGNsYXNzIFN0dWRlbnRDbGFzcyBpbXBsZW1lbnRzIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJzdE5hbWU6IHN0cmluZywgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nKSB7IH1cblxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgICB9XG59O1xuXG5jb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcygnSm9obicsICdEb2UnKTtcbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=