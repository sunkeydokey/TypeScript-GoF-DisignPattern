/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/CaptionDisplay.ts":
/*!**************************************!*\
  !*** ./src/bridge/CaptionDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaptionDisplay: () => (/* binding */ CaptionDisplay)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("\uC81C\uBAA9: ".concat(draft.getTitle()));
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("\uC800\uC790: ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        console.log('내용: ');
        var content = draft.getContent();
        content.forEach(function (item) {
            console.log("    ".concat(item));
        });
    };
    return CaptionDisplay;
}());



/***/ }),

/***/ "./src/bridge/CharacterCounter.ts":
/*!****************************************!*\
  !*** ./src/bridge/CharacterCounter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterCounter: () => (/* binding */ CharacterCounter)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
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

var CharacterCounter = /** @class */ (function (_super) {
    __extends(CharacterCounter, _super);
    function CharacterCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharacterCounter.prototype.getCharacterCount = function () {
        var count = 0;
        count += _super.prototype.getTitle.call(this).length;
        count += _super.prototype.getAuthor.call(this).length;
        _super.prototype.getContent.call(this).forEach(function (item) { return (count += item.length); });
        return count;
    };
    return CharacterCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__.Draft));



/***/ }),

/***/ "./src/bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draft: () => (/* binding */ Draft)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () {
        return this.title;
    };
    Draft.prototype.getAuthor = function () {
        return this.author;
    };
    Draft.prototype.getContent = function () {
        return this.content;
    };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());



/***/ }),

/***/ "./src/bridge/SimpleDisplay.ts":
/*!*************************************!*\
  !*** ./src/bridge/SimpleDisplay.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleDisplay: () => (/* binding */ SimpleDisplay)
/* harmony export */ });
var SimpleDisplay = /** @class */ (function () {
    function SimpleDisplay() {
    }
    SimpleDisplay.prototype.title = function (draft) {
        console.log(draft.getTitle());
    };
    SimpleDisplay.prototype.author = function (draft) {
        console.log(draft.getAuthor());
    };
    SimpleDisplay.prototype.content = function (draft) {
        var content = draft.getContent();
        content.forEach(function (item) {
            console.log(item);
        });
    };
    return SimpleDisplay;
}());



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
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDisplay */ "./src/bridge/CaptionDisplay.ts");
/* harmony import */ var _CharacterCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterCounter */ "./src/bridge/CharacterCounter.ts");
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
/* harmony import */ var _SimpleDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleDisplay */ "./src/bridge/SimpleDisplay.ts");




var title = 'Bridge pattern';
var author = 'sunkeydokey';
var content = [
    '큰 클래스 또는 밀접하게 관련된 클래스들의 집합을 두 개의 개별 계층구조​(추상화 및 구현)​로 나눈다.',
    '개별 계층구조를 각각 독립적으로 개발한다.',
];
var draft = new _Draft__WEBPACK_IMPORTED_MODULE_2__.Draft(title, author, content);
var simpleDisplay = new _SimpleDisplay__WEBPACK_IMPORTED_MODULE_3__.SimpleDisplay();
var captionDisplay = new _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__.CaptionDisplay();
console.log('SimpleDisplay');
draft.print(simpleDisplay);
console.log('CaptionDisplay');
draft.print(captionDisplay);
var characterCounter = new _CharacterCounter__WEBPACK_IMPORTED_MODULE_1__.CharacterCounter(title, author, content);
console.log('characterCounter');
characterCounter.print(captionDisplay);
console.log(characterCounter.getCharacterCount());
/*
Bridge 패턴은 기능 계층과 구현 계층을 분리함

새로운 기능을 추가할 때는 기능 계층을 확장하고 새로운 구현을 추가할 때는 구현 계층을 확장함으로써
복잡도를 효과적으로 낮출 수 있음

기능 계층과 구현 계층은 서로 위임을 통해서 통신함

기능 계층과 구현 계층을 분리함으로써 클래스들 간의 관계를 단순하게 유지시켜줌
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNoQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFFbEQ7Ozs7Ozs7OztFQVNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2JyaWRnZS9DYXB0aW9uRGlzcGxheS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvYnJpZGdlL0NoYXJhY3RlckNvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2JyaWRnZS9EcmFmdC50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvYnJpZGdlL1NpbXBsZURpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2JyaWRnZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi9EaXNwbGF5JztcclxuaW1wb3J0IHsgRHJhZnQgfSBmcm9tICcuL0RyYWZ0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXB0aW9uRGlzcGxheSBpbXBsZW1lbnRzIERpc3BsYXkge1xyXG4gIHRpdGxlKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYOygnOuqqTogJHtkcmFmdC5nZXRUaXRsZSgpfWApO1xyXG4gIH1cclxuXHJcbiAgYXV0aG9yKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coYOyggOyekDogJHtkcmFmdC5nZXRBdXRob3IoKX1gKTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnQoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygn64K07JqpOiAnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkcmFmdC5nZXRDb250ZW50KCk7XHJcbiAgICBjb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYCAgICAke2l0ZW19YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRHJhZnQgfSBmcm9tICcuL0RyYWZ0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJDb3VudGVyIGV4dGVuZHMgRHJhZnQge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGF1dGhvcjogc3RyaW5nLCBjb250ZW50OiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KTtcclxuICB9XHJcblxyXG4gIGdldENoYXJhY3RlckNvdW50KCk6IG51bWJlciB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgIGNvdW50ICs9IHN1cGVyLmdldFRpdGxlKCkubGVuZ3RoO1xyXG4gICAgY291bnQgKz0gc3VwZXIuZ2V0QXV0aG9yKCkubGVuZ3RoO1xyXG4gICAgc3VwZXIuZ2V0Q29udGVudCgpLmZvckVhY2goKGl0ZW0pID0+IChjb3VudCArPSBpdGVtLmxlbmd0aCkpO1xyXG5cclxuICAgIHJldHVybiBjb3VudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyxcclxuICAgIHByaXZhdGUgY29udGVudDogQXJyYXk8c3RyaW5nPlxyXG4gICkge31cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcbiAgZ2V0QXV0aG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xyXG4gIH1cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIHByaW50KGRpc3BsYXk6IERpc3BsYXkpOiB2b2lkIHtcclxuICAgIGRpc3BsYXkudGl0bGUodGhpcyk7XHJcbiAgICBkaXNwbGF5LmF1dGhvcih0aGlzKTtcclxuICAgIGRpc3BsYXkuY29udGVudCh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4vRGlzcGxheSc7XHJcbmltcG9ydCB7IERyYWZ0IH0gZnJvbSAnLi9EcmFmdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlRGlzcGxheSBpbXBsZW1lbnRzIERpc3BsYXkge1xyXG4gIHRpdGxlKGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZHJhZnQuZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBhdXRob3IoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhkcmFmdC5nZXRBdXRob3IoKSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRyYWZ0LmdldENvbnRlbnQoKTtcclxuICAgIGNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IENhcHRpb25EaXNwbGF5IH0gZnJvbSAnLi9DYXB0aW9uRGlzcGxheSc7XHJcbmltcG9ydCB7IENoYXJhY3RlckNvdW50ZXIgfSBmcm9tICcuL0NoYXJhY3RlckNvdW50ZXInO1xyXG5pbXBvcnQgeyBEcmFmdCB9IGZyb20gJy4vRHJhZnQnO1xyXG5pbXBvcnQgeyBTaW1wbGVEaXNwbGF5IH0gZnJvbSAnLi9TaW1wbGVEaXNwbGF5JztcclxuXHJcbmNvbnN0IHRpdGxlID0gJ0JyaWRnZSBwYXR0ZXJuJztcclxuY29uc3QgYXV0aG9yID0gJ3N1bmtleWRva2V5JztcclxuY29uc3QgY29udGVudCA9IFtcclxuICAn7YGwIO2BtOuemOyKpCDrmJDripQg67CA7KCR7ZWY6rKMIOq0gOugqOuQnCDtgbTrnpjsiqTrk6TsnZgg7KeR7ZWp7J2EIOuRkCDqsJzsnZgg6rCc67OEIOqzhOy4teq1rOyhsOKAiyjstpTsg4HtmZQg67CPIOq1rO2YhCnigIvroZwg64KY64iI64ukLicsXHJcbiAgJ+qwnOuzhCDqs4TsuLXqtazsobDrpbwg6rCB6rCBIOuPheumveyggeycvOuhnCDqsJzrsJztlZzri6QuJyxcclxuXTtcclxuXHJcbmNvbnN0IGRyYWZ0ID0gbmV3IERyYWZ0KHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpO1xyXG5cclxuY29uc3Qgc2ltcGxlRGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5KCk7XHJcblxyXG5jb25zdCBjYXB0aW9uRGlzcGxheSA9IG5ldyBDYXB0aW9uRGlzcGxheSgpO1xyXG5cclxuY29uc29sZS5sb2coJ1NpbXBsZURpc3BsYXknKTtcclxuZHJhZnQucHJpbnQoc2ltcGxlRGlzcGxheSk7XHJcbmNvbnNvbGUubG9nKCdDYXB0aW9uRGlzcGxheScpO1xyXG5kcmFmdC5wcmludChjYXB0aW9uRGlzcGxheSk7XHJcblxyXG5jb25zdCBjaGFyYWN0ZXJDb3VudGVyID0gbmV3IENoYXJhY3RlckNvdW50ZXIodGl0bGUsIGF1dGhvciwgY29udGVudCk7XHJcbmNvbnNvbGUubG9nKCdjaGFyYWN0ZXJDb3VudGVyJyk7XHJcbmNoYXJhY3RlckNvdW50ZXIucHJpbnQoY2FwdGlvbkRpc3BsYXkpO1xyXG5cclxuY29uc29sZS5sb2coY2hhcmFjdGVyQ291bnRlci5nZXRDaGFyYWN0ZXJDb3VudCgpKTtcclxuXHJcbi8qXHJcbkJyaWRnZSDtjKjthLTsnYAg6riw64qlIOqzhOy4teqzvCDqtaztmIQg6rOE7Li17J2EIOu2hOumrO2VqFxyXG5cclxu7IOI66Gc7Jq0IOq4sOuKpeydhCDstpTqsIDtlaAg65WM64qUIOq4sOuKpSDqs4TsuLXsnYQg7ZmV7J6l7ZWY6rOgIOyDiOuhnOyatCDqtaztmITsnYQg7LaU6rCA7ZWgIOuVjOuKlCDqtaztmIQg6rOE7Li17J2EIO2Zleyepe2VqOycvOuhnOyNqFxyXG7rs7XsnqHrj4Trpbwg7Zqo6rO87KCB7Jy866GcIOuCruy2nCDsiJgg7J6I7J2MXHJcblxyXG7quLDriqUg6rOE7Li16rO8IOq1rO2YhCDqs4TsuLXsnYAg7ISc66GcIOychOyehOydhCDthrXtlbTshJwg7Ya17Iug7ZWoXHJcblxyXG7quLDriqUg6rOE7Li16rO8IOq1rO2YhCDqs4TsuLXsnYQg67aE66as7ZWo7Jy866Gc7I2oIO2BtOuemOyKpOuTpCDqsITsnZgg6rSA6rOE66W8IOuLqOyInO2VmOqyjCDsnKDsp4Dsi5zsvJzspIxcclxuKi9cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9