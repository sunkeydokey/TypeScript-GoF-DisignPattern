/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");


var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('쿠크다스', 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('새우깡', 1300),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('빼빼로', 1200),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('빈츠', 3200),
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var items_1 = iter.current();
    var domItem = document.createElement('div');
    domItem.innerHTML = "".concat(items_1.name, ": ").concat(items_1.cost, "\uC6D0");
    document.body.appendChild(domItem);
    domItem.classList.add('iterator-item');
}
/*
Iterator 패턴은 배열이나 Linked-List, Tree처럼 다른 자료구조를 갖는 Aggregator의 구성항목을
표준화된 공통 API로 접근할 수 있음

자료구조가 다른 Aggregator일 지라도 구성항목을 표준화된 공통 API로 접근할 수 있으므로
하나의 공통된 알고리즘으로 처리할 수 있음
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQUssT0FBSyxDQUFDLElBQUksV0FBRyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0NBQ3hDO0FBRUQ7Ozs7OztFQU1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2l0ZXJhdG9yL0FycmF5LnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9pdGVyYXRvci9BcnJheUl0ZXJhdG9yLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9pdGVyYXRvci9JdGVtLnRzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9pdGVyYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWdncmVnYXRvciBmcm9tICcuL0FnZ3JlZ2F0b3InO1xyXG5pbXBvcnQgQXJyYXlJdGVyYXRvciBmcm9tICcuL0FycmF5SXRlcmF0b3InO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5pbXBvcnQgSXRlcmF0b3IgZnJvbSAnLi9pdGVyYXRvcic7XHJcblxyXG5jbGFzcyBBcnJheSBpbXBsZW1lbnRzIEFnZ3JlZ2F0b3I8SXRlbT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IEl0ZW1bXSkge31cclxuXHJcbiAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBjb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGl0ZXJhdG9yKCk6IEl0ZXJhdG9yPEl0ZW0+IHtcclxuICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycmF5O1xyXG4iLCJpbXBvcnQgQXJyYXkgZnJvbSAnLi9BcnJheSc7XHJcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XHJcbmltcG9ydCBJdGVyYXRvciBmcm9tICcuL2l0ZXJhdG9yJztcclxuXHJcbmNsYXNzIEFycmF5SXRlcmF0b3IgaW1wbGVtZW50cyBJdGVyYXRvcjxJdGVtPiB7XHJcbiAgcHJpdmF0ZSBpbmRleDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFycmF5OiBBcnJheSkge1xyXG4gICAgdGhpcy5pbmRleCA9IC0xO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiBib29sZWFuIHtcclxuICAgIHRoaXMuaW5kZXgrKztcclxuICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudDtcclxuICB9XHJcbiAgY3VycmVudCgpOiBJdGVtIHtcclxuICAgIHJldHVybiB0aGlzLmFycmF5LmdldEl0ZW0odGhpcy5pbmRleCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJheUl0ZXJhdG9yO1xyXG4iLCJjbGFzcyBJdGVtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcsIHByaXZhdGUgX2Nvc3Q6IG51bWJlcikge31cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcbiAgZ2V0IGNvc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29zdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEFycmF5IGZyb20gJy4vQXJyYXknO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgbmV3IEl0ZW0oJ+y/oO2BrOuLpOyKpCcsIDI1MDApLFxyXG4gIG5ldyBJdGVtKCfsg4jsmrDquaEnLCAxMzAwKSxcclxuICBuZXcgSXRlbSgn67m867m866GcJywgMTIwMCksXHJcbiAgbmV3IEl0ZW0oJ+u5iOy4oCcsIDMyMDApLFxyXG5dO1xyXG5cclxuY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoaXRlbXMpO1xyXG5jb25zdCBpdGVyID0gYXJyYXkuaXRlcmF0b3IoKTtcclxuXHJcbndoaWxlIChpdGVyLm5leHQoKSkge1xyXG4gIGNvbnN0IGl0ZW1zID0gaXRlci5jdXJyZW50KCk7XHJcbiAgY29uc3QgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRvbUl0ZW0uaW5uZXJIVE1MID0gYCR7aXRlbXMubmFtZX06ICR7aXRlbXMuY29zdH3sm5BgO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tSXRlbSk7XHJcblxyXG4gIGRvbUl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlcmF0b3ItaXRlbScpO1xyXG59XHJcblxyXG4vKiBcclxuSXRlcmF0b3Ig7Yyo7YS07J2AIOuwsOyXtOydtOuCmCBMaW5rZWQtTGlzdCwgVHJlZeyymOufvCDri6Trpbgg7J6Q66OM6rWs7KGw66W8IOqwluuKlCBBZ2dyZWdhdG9y7J2YIOq1rOyEse2VreuqqeydhFxyXG7tkZzspIDtmZTrkJwg6rO17Ya1IEFQSeuhnCDsoJHqt7ztlaAg7IiYIOyeiOydjFxyXG5cclxu7J6Q66OM6rWs7KGw6rCAIOuLpOuluCBBZ2dyZWdhdG9y7J28IOyngOudvOuPhCDqtazshLHtla3rqqnsnYQg7ZGc7KSA7ZmU65CcIOqzte2GtSBBUEnroZwg7KCR6re87ZWgIOyImCDsnojsnLzrr4DroZxcclxu7ZWY64KY7J2YIOqzte2GteuQnCDslYzqs6DrpqzsppjsnLzroZwg7LKY66as7ZWgIOyImCDsnojsnYxcclxuKi9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9