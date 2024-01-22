/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (N) {
        return (N * (N + 1)) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        for (var i = 1; i <= N; i++)
            sum += i;
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


/***/ }),

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N);
        domOutput.innerHTML = "1 ~ ".concat(N, "\uAE4C\uC9C0\uC758 \uCD1D\uD569 = ").concat(value);
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


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
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/strategy/GaussSumStrategy.ts");
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/strategy/LoopSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");



var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_2__["default"]();
var dom1 = document.createElement('h1');
document.body.append(dom1);
var dom2 = document.createElement('h1');
document.body.append(dom2);
printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom1);
printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__["default"](), 100, dom2);
/*
Strategy 패턴은 어떤 기능에 대한 특정 알고리즘을 느슨하게 결합시키는 패턴

어떤 알고리즘이 느슨하게 결합되면 추후 더 나은 알고리즘으로 쉽게 변경할 수 있을 뿐만 아니라
프로그램이 실행 중에 상황에 맞는 알고리즘으로 쉽게 변경할 수 있음

기존의 알고리즘을 유지하면서 새로운 알고리즘을 효과적으로 추가할 수 있음
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUlBLENBQUM7SUFIQyw4QkFBRyxHQUFILFVBQUksQ0FBUztRQUNYLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0lBQUE7SUFNQSxDQUFDO0lBTEMsNkJBQUcsR0FBSCxVQUFJLENBQVM7UUFDWCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7SUFBQTtJQUtBLENBQUM7SUFKQywwQkFBSyxHQUFMLFVBQU0sUUFBcUIsRUFBRSxDQUFTLEVBQUUsU0FBa0I7UUFDeEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixTQUFTLENBQUMsU0FBUyxHQUFHLGNBQU8sQ0FBQywrQ0FBWSxLQUFLLENBQUUsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNGO0FBQ1Y7QUFFdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxtREFBVSxFQUFFLENBQUM7QUFFakMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUzQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSx3REFBZSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSx5REFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVqRDs7Ozs7OztFQU9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL3N0cmF0ZWd5L0dhdXNzU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL3N0cmF0ZWd5L0xvb3BTdW1TdHJhdGVneS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvc3RyYXRlZ3kvU3VtUHJpbnRlci50cyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvc3RyYXRlZ3kvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gJy4vU3VtU3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F1c3NTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcclxuICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoTiAqIChOICsgMSkpIC8gMjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gJy4vU3VtU3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9vcFN1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3kge1xyXG4gIGdldChOOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOOyBpKyspIHN1bSArPSBpO1xyXG4gICAgcmV0dXJuIHN1bTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gJy4vU3VtU3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VtUHJpbnRlciB7XHJcbiAgcHJpbnQoc3RyYXRlZ3k6IFN1bVN0cmF0ZWd5LCBOOiBudW1iZXIsIGRvbU91dHB1dDogRWxlbWVudCkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBzdHJhdGVneS5nZXQoTik7XHJcbiAgICBkb21PdXRwdXQuaW5uZXJIVE1MID0gYDEgfiAke0596rmM7KeA7J2YIOy0ne2VqSA9ICR7dmFsdWV9YDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tICcuL0dhdXNzU3VtU3RyYXRlZ3knO1xyXG5pbXBvcnQgTG9vcFN1bVN0cmF0ZWd5IGZyb20gJy4vTG9vcFN1bVN0cmF0ZWd5JztcclxuaW1wb3J0IFN1bVByaW50ZXIgZnJvbSAnLi9TdW1QcmludGVyJztcclxuXHJcbmNvbnN0IHByaW50ZXIgPSBuZXcgU3VtUHJpbnRlcigpO1xyXG5cclxuY29uc3QgZG9tMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGRvbTEpO1xyXG5cclxuY29uc3QgZG9tMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGRvbTIpO1xyXG5cclxucHJpbnRlci5wcmludChuZXcgTG9vcFN1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSk7XHJcbnByaW50ZXIucHJpbnQobmV3IEdhdXNzU3VtU3RyYXRlZ3koKSwgMTAwLCBkb20yKTtcclxuXHJcbi8qXHJcblN0cmF0ZWd5IO2MqO2EtOydgCDslrTrlqQg6riw64ql7JeQIOuMgO2VnCDtirnsoJUg7JWM6rOg66as7KaY7J2EIOuKkOyKqO2VmOqyjCDqsrDtlansi5ztgqTripQg7Yyo7YS0XHJcblxyXG7slrTrlqQg7JWM6rOg66as7KaY7J20IOuKkOyKqO2VmOqyjCDqsrDtlanrkJjrqbQg7LaU7ZuEIOuNlCDrgpjsnYAg7JWM6rOg66as7KaY7Jy866GcIOyJveqyjCDrs4Dqsr3tlaAg7IiYIOyeiOydhCDrv5Drp4wg7JWE64uI6528XHJcbu2UhOuhnOq3uOueqOydtCDsi6Ttlokg7KSR7JeQIOyDge2ZqeyXkCDrp57ripQg7JWM6rOg66as7KaY7Jy866GcIOyJveqyjCDrs4Dqsr3tlaAg7IiYIOyeiOydjFxyXG5cclxu6riw7KG07J2YIOyVjOqzoOumrOymmOydhCDsnKDsp4DtlZjrqbTshJwg7IOI66Gc7Jq0IOyVjOqzoOumrOymmOydhCDtmqjqs7zsoIHsnLzroZwg7LaU6rCA7ZWgIOyImCDsnojsnYxcclxuKi9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9