/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = '<div class="digit-layout"></div>';
            var domLayout_1 = dom.querySelector('.digit-layout');
            this.data.forEach(function (item) {
                var length = item.length;
                for (var i = 0; i < length; i++) {
                    var domCell = document.createElement('div');
                    domCell.style.backgroundColor = item[i] === '1' ? '#ff0' : '#333';
                    domLayout_1.append(domCell);
                }
            });
            console.log(dom);
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = Array(10).fill(null);
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("./data/".concat(n, ".json"));
        console.log(this.pool[n]);
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var length = strNum.length;
        dom.innerHTML = '';
        for (var i = 0; i < length; i++) {
            var div = document.createElement('div');
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.appendChild(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
/*!********************************!*\
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");


var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var target = document.querySelector('#tmp');
var value = 434331;
setInterval(function () {
    var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    number.put(target);
}, 100);
/*
  Fly weight 패턴은 동일한 객체를 여러 번 생성하지 않고
  미리 생성해 두고 공유해 사용할 수 있음

  미리 생성해둔 객체는 공유의 개념으로 사용되므로
  공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있음
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsTUFBTSxDQUFDLENBQUM7QUFDckIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRVI7Ozs7OztFQU1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2ZseXdlaWdodC9EaWdpdC50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmx5d2VpZ2h0L0RpZ2l0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmx5d2VpZ2h0L051bWJlci50cyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZmx5d2VpZ2h0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZ2l0IHtcbiAgcHJpdmF0ZSBkYXRhOiBBcnJheTxzdHJpbmc+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybDogc3RyaW5nKSB7fVxuXG4gIHByaXZhdGUgbG9hZCh1cmw6IHN0cmluZywgZG9tT3V0cHV0OiBFbGVtZW50KSB7XG4gICAgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSBqc29uO1xuICAgICAgICBpZiAoZG9tT3V0cHV0KSB0aGlzLnB1dChkb21PdXRwdXQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1dChkb206IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0YSkgdGhpcy5sb2FkKHRoaXMudXJsLCBkb20pO1xuICAgIGVsc2Uge1xuICAgICAgZG9tLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiZGlnaXQtbGF5b3V0XCI+PC9kaXY+JztcbiAgICAgIGNvbnN0IGRvbUxheW91dCA9IGRvbS5xdWVyeVNlbGVjdG9yKCcuZGlnaXQtbGF5b3V0Jyk7XG5cbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBpdGVtO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgZG9tQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaXRlbVtpXSA9PT0gJzEnID8gJyNmZjAnIDogJyMzMzMnO1xuICAgICAgICAgIGRvbUxheW91dC5hcHBlbmQoZG9tQ2VsbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZG9tKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdCBmcm9tICcuL0RpZ2l0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlnaXRGYWN0b3J5IHtcbiAgcHJpdmF0ZSBwb29sOiBBcnJheTxEaWdpdCB8IG51bGw+ID0gQXJyYXkoMTApLmZpbGwobnVsbCk7XG5cbiAgZ2V0RGlnaXQobjogbnVtYmVyKTogRGlnaXQge1xuICAgIGlmICghdGhpcy5wb29sW25dKSB0aGlzLnBvb2xbbl0gPSBuZXcgRGlnaXQoYC4vZGF0YS8ke259Lmpzb25gKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnBvb2xbbl0pO1xuICAgIHJldHVybiB0aGlzLnBvb2xbbl07XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSAnLi9EaWdpdEZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY3Rvcnk6IERpZ2l0RmFjdG9yeSwgcHJpdmF0ZSBudW06IG51bWJlcikge31cblxuICBwdXQoZG9tOiBFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RyTnVtID0gdGhpcy5udW0udG9TdHJpbmcoKTtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gc3RyTnVtO1xuXG4gICAgZG9tLmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5mYWN0b3J5LmdldERpZ2l0KHBhcnNlSW50KHN0ck51bVtpXSkpLnB1dChkaXYpO1xuICAgICAgZG9tLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSAnLi9EaWdpdEZhY3RvcnknO1xuaW1wb3J0IE51bWJlciBmcm9tICcuL051bWJlcic7XG5cbmNvbnN0IGZhY3RvcnkgPSBuZXcgRGlnaXRGYWN0b3J5KCk7XG5cbmNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0bXAnKTtcblxubGV0IHZhbHVlID0gNDM0MzMxO1xuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKyk7XG5cbiAgbnVtYmVyLnB1dCh0YXJnZXQpO1xufSwgMTAwKTtcblxuLypcbiAgRmx5IHdlaWdodCDtjKjthLTsnYAg64+Z7J287ZWcIOqwneyytOulvCDsl6zrn6wg67KIIOyDneyEse2VmOyngCDslYrqs6BcbiAg66+466asIOyDneyEse2VtCDrkZDqs6Ag6rO17Jyg7ZW0IOyCrOyaqe2VoCDsiJgg7J6I7J2MXG5cbiAg66+466asIOyDneyEse2VtOuRlCDqsJ3ssrTripQg6rO17Jyg7J2YIOqwnOuFkOycvOuhnCDsgqzsmqnrkJjrr4DroZxcbiAg6rO17Jyg7ZWgIOyGjeyEseqzvCDqs7XsnKDtlZjsp4Ag7JWK7J2EIOyGjeyEseydhCDqtazrtoTtlZjsl6wg7ISk6rOE7ZWgIO2VhOyalOqwgCDsnojsnYxcbiovXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=