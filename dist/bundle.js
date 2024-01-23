/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/Animal.ts":
/*!*******************************!*\
  !*** ./src/adapter/Animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animal: () => (/* binding */ Animal)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());



/***/ }),

/***/ "./src/adapter/Cat.ts":
/*!****************************!*\
  !*** ./src/adapter/Cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cat: () => (/* binding */ Cat)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, " \uC57C\uC639"));
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));



/***/ }),

/***/ "./src/adapter/Dog.ts":
/*!****************************!*\
  !*** ./src/adapter/Dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dog: () => (/* binding */ Dog)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, " \uBA4D\uBA4D"));
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));



/***/ }),

/***/ "./src/adapter/Tiger.ts":
/*!******************************!*\
  !*** ./src/adapter/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tiger: () => (/* binding */ Tiger)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
        this._name = null;
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return '으르렁';
    };
    return Tiger;
}());



/***/ }),

/***/ "./src/adapter/TigerAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapter/TigerAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TigerAdapter: () => (/* binding */ TigerAdapter)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/adapter/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__.Tiger();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log("".concat(this.tiger.name, " ").concat(this.tiger.roar()));
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__.Animal));



/***/ })

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/adapter/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/adapter/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/adapter/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/adapter/TigerAdapter.ts");



var list = [];
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__.Dog('뭉치'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__.Cat('치즈'));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__.Cat('키티'));
// const tiger = new Tiger();
// tiger.name = '어흥이';
// list.push(tiger);
/*
  Argument of type 'Tiger' is not assignable to parameter of type 'Animal'.
  Property 'sound' is missing in type 'Tiger' but required in type 'Animal'
*/
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__.TigerAdapter('어흥이'));
list.forEach(function (animal) {
    animal.sound();
});
/*
Adapter 패턴은 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용할 수 있는 패턴

* 클래스의 코드를 변경하기 어려운 경우
  - 처음부터 코드가 제공되지 않는 클래스의 경우 (컴파일 언어인 경우에 한해서)
  - 이미 많은 프로그램에서 사용되는 공용 클래스로서 공용 클래스가 변경되면 영향을 받는
    다른 프로그램의 코드가 너무 많이 변경되는 경우
  - 어떤 클래스가 버전업되었는데 하위버전의 클래스도 지원해야 하는 경우
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLElBQUksdURBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO0lBQ2xCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7OztFQVFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2FkYXB0ZXIvQW5pbWFsLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9hZGFwdGVyL0NhdC50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvYWRhcHRlci9Eb2cudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2FkYXB0ZXIvVGlnZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2FkYXB0ZXIvVGlnZXJBZGFwdGVyLnRzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9hZGFwdGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBbmltYWwge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gIGFic3RyYWN0IHNvdW5kKCk6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9BbmltYWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhdCBleHRlbmRzIEFuaW1hbCB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcblxyXG4gIHNvdW5kKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSDslbzsmLlgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9BbmltYWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcblxyXG4gIHNvdW5kKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSDrqY3rqY1gKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRpZ2VyIHtcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcm9hcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICfsnLzrpbTroIEnO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XHJcbmltcG9ydCB7IFRpZ2VyIH0gZnJvbSAnLi9UaWdlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlnZXJBZGFwdGVyIGV4dGVuZHMgQW5pbWFsIHtcclxuICBwcml2YXRlIHRpZ2VyOiBUaWdlcjtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICAgIHRoaXMudGlnZXIgPSBuZXcgVGlnZXIoKTtcclxuICAgIHRoaXMudGlnZXIubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBzb3VuZCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKGAke3RoaXMudGlnZXIubmFtZX0gJHt0aGlzLnRpZ2VyLnJvYXIoKX1gKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XHJcbmltcG9ydCB7IENhdCB9IGZyb20gJy4vQ2F0JztcclxuaW1wb3J0IHsgRG9nIH0gZnJvbSAnLi9Eb2cnO1xyXG5pbXBvcnQgeyBUaWdlciB9IGZyb20gJy4vVGlnZXInO1xyXG5pbXBvcnQgeyBUaWdlckFkYXB0ZXIgfSBmcm9tICcuL1RpZ2VyQWRhcHRlcic7XHJcblxyXG5jb25zdCBsaXN0OiBBcnJheTxBbmltYWw+ID0gW107XHJcblxyXG5saXN0LnB1c2gobmV3IERvZygn662J7LmYJykpO1xyXG5saXN0LnB1c2gobmV3IENhdCgn7LmY7KaIJykpO1xyXG5saXN0LnB1c2gobmV3IENhdCgn7YKk7YuwJykpO1xyXG5cclxuLy8gY29uc3QgdGlnZXIgPSBuZXcgVGlnZXIoKTtcclxuLy8gdGlnZXIubmFtZSA9ICfslrTtnaXsnbQnO1xyXG4vLyBsaXN0LnB1c2godGlnZXIpO1xyXG4vKlxyXG4gIEFyZ3VtZW50IG9mIHR5cGUgJ1RpZ2VyJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnQW5pbWFsJy5cclxuICBQcm9wZXJ0eSAnc291bmQnIGlzIG1pc3NpbmcgaW4gdHlwZSAnVGlnZXInIGJ1dCByZXF1aXJlZCBpbiB0eXBlICdBbmltYWwnXHJcbiovXHJcblxyXG5saXN0LnB1c2gobmV3IFRpZ2VyQWRhcHRlcign7Ja07Z2l7J20JykpO1xyXG5saXN0LmZvckVhY2goKGFuaW1hbCkgPT4ge1xyXG4gIGFuaW1hbC5zb3VuZCgpO1xyXG59KTtcclxuXHJcbi8qXHJcbkFkYXB0ZXIg7Yyo7YS07J2AIOy9lOuTnOulvCDrs4Dqsr3tlaAg7IiYIOyXhuuKlCDtgbTrnpjsiqTrpbwg7JuQ7ZWY64qUIO2Yle2DnOuhnCDsgqzsmqntlZjqs6DsnpAg7ZWgIOuVjCDsoIHsmqntlaAg7IiYIOyeiOuKlCDtjKjthLRcclxuXHJcbiog7YG0656Y7Iqk7J2YIOy9lOuTnOulvCDrs4Dqsr3tlZjquLAg7Ja066Ck7Jq0IOqyveyasFxyXG4gIC0g7LKY7J2M67aA7YSwIOy9lOuTnOqwgCDsoJzqs7XrkJjsp4Ag7JWK64qUIO2BtOuemOyKpOydmCDqsr3smrAgKOy7tO2MjOydvCDslrjslrTsnbgg6rK97Jqw7JeQIO2VnO2VtOyEnClcclxuICAtIOydtOuvuCDrp47snYAg7ZSE66Gc6re4656o7JeQ7IScIOyCrOyaqeuQmOuKlCDqs7Xsmqkg7YG0656Y7Iqk66Gc7IScIOqzteyaqSDtgbTrnpjsiqTqsIAg67OA6rK965CY66m0IOyYge2WpeydhCDrsJvripRcclxuICAgIOuLpOuluCDtlITroZzqt7jrnqjsnZgg7L2U65Oc6rCAIOuEiOustCDrp47snbQg67OA6rK965CY64qUIOqyveyasFxyXG4gIC0g7Ja065akIO2BtOuemOyKpOqwgCDrsoTsoITsl4XrkJjsl4jripTrjbAg7ZWY7JyE67KE7KCE7J2YIO2BtOuemOyKpOuPhCDsp4Dsm5DtlbTslbwg7ZWY64qUIOqyveyasFxyXG4qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=