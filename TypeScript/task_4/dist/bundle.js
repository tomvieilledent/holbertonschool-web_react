/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts"
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cpp: () => (/* binding */ Cpp)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpp = /** @class */ (function (_super) {
    __extends(Cpp, _super);
    function Cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cpp.prototype.getRequirements = function () {
        return "Here is what you need to know to be a Cpp teacher";
    };
    return Cpp;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ },

/***/ "./js/subjects/Java.ts"
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Java: () => (/* binding */ Java)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
/* harmony import */ var _Teacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Teacher */ "./js/subjects/Teacher.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Java = /** @class */ (function (_super) {
    __extends(Java, _super);
    function Java(teacher) {
        return _super.call(this, teacher) || this;
    }
    Java.prototype.getRequirements = function () {
        return "Here is what you need to know to be a Java teacher";
    };
    Java.prototype.getAvailableTeacher = function () {
        return (0,_Teacher__WEBPACK_IMPORTED_MODULE_1__.getAvailableTeacher)(this.teacher);
    };
    return Java;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ },

/***/ "./js/subjects/React.ts"
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   React: () => (/* binding */ React)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ "./js/subjects/Subject.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return "Here is what you need to know to be a React teacher";
    };
    return React;
}(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject));



/***/ },

/***/ "./js/subjects/Subject.ts"
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
var Subject = /** @class */ (function () {
    function Subject(teacher) {
        this.teacher = teacher;
    }
    Subject.prototype.getRequirements = function () {
        return "Here is what you need to know to be a Subject";
    };
    return Subject;
}());



/***/ },

/***/ "./js/subjects/Teacher.ts"
/*!********************************!*\
  !*** ./js/subjects/Teacher.ts ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAvailableTeacher: () => (/* binding */ getAvailableTeacher)
/* harmony export */ });
function getAvailableTeacher(teacher) {
    if (!teacher.experienceTeachingJava) {
        return "No available teacher";
    }
    return "Available Teacher: ".concat(teacher.firstName);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Teacher */ "./js/subjects/Teacher.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");




var teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingJava: 10,
};
var java = new _subjects_Java__WEBPACK_IMPORTED_MODULE_1__.Java(teacher);
var cpp = new _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__.Cpp(teacher);
var react = new _subjects_React__WEBPACK_IMPORTED_MODULE_3__.React(teacher);
console.log((0,_subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__.getAvailableTeacher)(teacher));
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());
console.log(cpp.getRequirements());
console.log(react.getRequirements());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0NwcC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL0phdmEudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9SZWFjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9zdWJqZWN0cy9UZWFjaGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBDcHAgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiSGVyZSBpcyB3aGF0IHlvdSBuZWVkIHRvIGtub3cgdG8gYmUgYSBDcHAgdGVhY2hlclwiO1xuICB9XG59IiwiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1N1YmplY3RcIjtcbmltcG9ydCB7IFRlYWNoZXIsIGdldEF2YWlsYWJsZVRlYWNoZXIgYXMgZ2V0QXZhaWxhYmxlVGVhY2hlckZuIH0gZnJvbSBcIi4vVGVhY2hlclwiO1xuXG5leHBvcnQgY2xhc3MgSmF2YSBleHRlbmRzIFN1YmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgc3VwZXIodGVhY2hlcik7XG4gIH1cblxuICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJIZXJlIGlzIHdoYXQgeW91IG5lZWQgdG8ga25vdyB0byBiZSBhIEphdmEgdGVhY2hlclwiO1xuICB9XG5cbiAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRBdmFpbGFibGVUZWFjaGVyRm4odGhpcy50ZWFjaGVyKTtcbiAgfVxufSIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9TdWJqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBSZWFjdCBleHRlbmRzIFN1YmplY3Qge1xuICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJIZXJlIGlzIHdoYXQgeW91IG5lZWQgdG8ga25vdyB0byBiZSBhIFJlYWN0IHRlYWNoZXJcIjtcbiAgfVxufSIsImltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi9UZWFjaGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBTdWJqZWN0IHtcbiAgdGVhY2hlcjogVGVhY2hlcjtcblxuICBjb25zdHJ1Y3Rvcih0ZWFjaGVyOiBUZWFjaGVyKSB7XG4gICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgfVxuXG4gIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkhlcmUgaXMgd2hhdCB5b3UgbmVlZCB0byBrbm93IHRvIGJlIGEgU3ViamVjdFwiO1xuICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGV4cGVyaWVuY2VUZWFjaGluZ0phdmE/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdmFpbGFibGVUZWFjaGVyKHRlYWNoZXI6IFRlYWNoZXIpOiBzdHJpbmcge1xuICBpZiAoIXRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nSmF2YSkge1xuICAgIHJldHVybiBcIk5vIGF2YWlsYWJsZSB0ZWFjaGVyXCI7XG4gIH1cblxuICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RlYWNoZXIuZmlyc3ROYW1lfWA7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRlYWNoZXIsIGdldEF2YWlsYWJsZVRlYWNoZXIgfSBmcm9tIFwiLi9zdWJqZWN0cy9UZWFjaGVyXCI7XG5pbXBvcnQgeyBKYXZhIH0gZnJvbSBcIi4vc3ViamVjdHMvSmF2YVwiO1xuaW1wb3J0IHsgQ3BwIH0gZnJvbSBcIi4vc3ViamVjdHMvQ3BwXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuL3N1YmplY3RzL1JlYWN0XCI7XG5cbmNvbnN0IHRlYWNoZXI6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogXCJHdWlsbGF1bWVcIixcbiAgbGFzdE5hbWU6IFwiU2FsdmFcIixcbiAgZXhwZXJpZW5jZVRlYWNoaW5nSmF2YTogMTAsXG59O1xuXG5jb25zdCBqYXZhID0gbmV3IEphdmEodGVhY2hlcik7XG5jb25zdCBjcHAgPSBuZXcgQ3BwKHRlYWNoZXIpO1xuY29uc3QgcmVhY3QgPSBuZXcgUmVhY3QodGVhY2hlcik7XG5cbmNvbnNvbGUubG9nKGdldEF2YWlsYWJsZVRlYWNoZXIodGVhY2hlcikpO1xuY29uc29sZS5sb2coamF2YS5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuY29uc29sZS5sb2coamF2YS5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuY29uc29sZS5sb2cocmVhY3QuZ2V0UmVxdWlyZW1lbnRzKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==