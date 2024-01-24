/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxDecorator: () => (/* binding */ BoxDecorator)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (index) {
        return this.targetItem.getLength(index) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (index) {
        var maxWidth = this.getMaxLength();
        if (index === 0 || index === this.getLinesCount() - 1) {
            return "<span style=\"color: yellow\">+".concat('-'.repeat(maxWidth - 2), "+</span>");
        }
        else {
            return ("<span style=\"color: yellow\">|</span>" +
                "".concat(this.targetItem.getString(index - 1)).concat(' '.repeat(maxWidth - this.getLength(index - 1))) +
                "<span style=\"color: yellow\">|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__.Decorator));



/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Decorator: () => (/* binding */ Decorator)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__.Item));



/***/ }),

/***/ "./src/decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var lineCounts = this.getLinesCount();
        for (var i = 0; i < lineCounts; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join('\n');
    };
    return Item;
}());



/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideDecorator: () => (/* binding */ SideDecorator)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (index) {
        return this.targetItem.getLength(index) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (index) {
        return ("<span style=\"color: gray\">".concat(this.ch, "</span>") +
            "".concat(this.targetItem.getString(index), "</span>") +
            "<span style=\"color: gray\">".concat(this.ch, "</span>"));
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__.Decorator));



/***/ }),

/***/ "./src/decorator/Strings.ts":
/*!**********************************!*\
  !*** ./src/decorator/Strings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Strings: () => (/* binding */ Strings)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = [];
        return _this;
    }
    Strings.prototype.add = function (string) {
        this.data.push(string);
    };
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (index) {
        return this.data[index].length;
    };
    Strings.prototype.getMaxLength = function () {
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    };
    Strings.prototype.getString = function (index) {
        return this.data[index];
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__.Item));



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
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strings */ "./src/decorator/Strings.ts");



var string = new _Strings__WEBPACK_IMPORTED_MODULE_2__.Strings();
string.add('Hi');
string.add('I am sunkeydokey.');
string.add('I am Front-end Developer.');
string.add('Study Design Patterns.');
var preDom = document.querySelector('pre');
string.print(preDom);
var sideDecorator = new _SideDecorator__WEBPACK_IMPORTED_MODULE_1__.SideDecorator(string, '"');
sideDecorator.print(preDom);
var boxDecorator = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__.BoxDecorator(string);
boxDecorator.print(preDom);
var boxDecorator2 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__.BoxDecorator(sideDecorator);
boxDecorator2.print(preDom);
/*
  Decorator 패턴은 어떤 객체에 기능을 적용할 때 그 객체와 적용될 기능을 동일시할 수 있음

  데이터와 기능을 동일시할 수 있으므로 다양한 기능을 중첩해서 적용할 수 있으며 적용되는 기능의 순서에 따라 다른 결과를 얻을 수 있음
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLENBQUMsQ0FBQztBQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQU0sYUFBYSxHQUFHLElBQUksdURBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0RCxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRTVCOzs7O0VBSUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0JveERlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0RlY29yYXRvci50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL2RlY29yYXRvci9TaWRlRGVjb3JhdG9yLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy9kZWNvcmF0b3IvU3RyaW5ncy50cyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtZ29mL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvZGVjb3JhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY29yYXRvciB9IGZyb20gJy4vRGVjb3JhdG9yJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94RGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtKSB7XHJcbiAgICBzdXBlcih0YXJnZXRJdGVtKTtcclxuICB9XHJcblxyXG4gIGdldExpbmVzQ291bnQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpICsgMjtcclxuICB9XHJcblxyXG4gIGdldExlbmd0aChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGluZGV4KSArIDI7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyAyO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RyaW5nKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmdldE1heExlbmd0aCgpO1xyXG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSB0aGlzLmdldExpbmVzQ291bnQoKSAtIDEpIHtcclxuICAgICAgcmV0dXJuIGA8c3BhbiBzdHlsZT1cImNvbG9yOiB5ZWxsb3dcIj4rJHsnLScucmVwZWF0KG1heFdpZHRoIC0gMil9Kzwvc3Bhbj5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBgPHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93XCI+fDwvc3Bhbj5gICtcclxuICAgICAgICBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGluZGV4IC0gMSl9JHsnICcucmVwZWF0KFxyXG4gICAgICAgICAgbWF4V2lkdGggLSB0aGlzLmdldExlbmd0aChpbmRleCAtIDEpXHJcbiAgICAgICAgKX1gICtcclxuICAgICAgICBgPHNwYW4gc3R5bGU9XCJjb2xvcjogeWVsbG93XCI+fDwvc3Bhbj5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERlY29yYXRvciBleHRlbmRzIEl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YXJnZXRJdGVtOiBJdGVtKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbSB7XHJcbiAgYWJzdHJhY3QgZ2V0TGluZXNDb3VudCgpOiBudW1iZXI7XHJcbiAgYWJzdHJhY3QgZ2V0TGVuZ3RoKGluZGV4OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgYWJzdHJhY3QgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlcjtcclxuICBhYnN0cmFjdCBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgcHJpbnQoZG9tOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBjb25zdCBsaW5lQ291bnRzID0gdGhpcy5nZXRMaW5lc0NvdW50KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lQ291bnRzOyBpKyspIHtcclxuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSk7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9tLmlubmVySFRNTCA9IHJlc3VsdC5qb2luKCdcXG4nKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGVjb3JhdG9yIH0gZnJvbSAnLi9EZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaWRlRGVjb3JhdG9yIGV4dGVuZHMgRGVjb3JhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOiBJdGVtLCBwcml2YXRlIGNoOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHRhcmdldEl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRMaW5lc0NvdW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXRMZW5ndGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpbmRleCkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyB0aGlzLmNoLmxlbmd0aCAqIDI7XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBgPHNwYW4gc3R5bGU9XCJjb2xvcjogZ3JheVwiPiR7dGhpcy5jaH08L3NwYW4+YCArXHJcbiAgICAgIGAke3RoaXMudGFyZ2V0SXRlbS5nZXRTdHJpbmcoaW5kZXgpfTwvc3Bhbj5gICtcclxuICAgICAgYDxzcGFuIHN0eWxlPVwiY29sb3I6IGdyYXlcIj4ke3RoaXMuY2h9PC9zcGFuPmBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ3MgZXh0ZW5kcyBJdGVtIHtcclxuICBwcml2YXRlIGRhdGE6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYWRkKHN0cmluZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGEucHVzaChzdHJpbmcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXRMZW5ndGgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XS5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgIGxldCBtYXhMZW5ndGggPSAwO1xyXG4gICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID4gbWF4TGVuZ3RoKSBtYXhMZW5ndGggPSBpdGVtLmxlbmd0aDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBtYXhMZW5ndGg7XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmcoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhW2luZGV4XTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBCb3hEZWNvcmF0b3IgfSBmcm9tICcuL0JveERlY29yYXRvcic7XHJcbmltcG9ydCB7IFNpZGVEZWNvcmF0b3IgfSBmcm9tICcuL1NpZGVEZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSAnLi9TdHJpbmdzJztcclxuXHJcbmNvbnN0IHN0cmluZyA9IG5ldyBTdHJpbmdzKCk7XHJcblxyXG5zdHJpbmcuYWRkKCdIaScpO1xyXG5zdHJpbmcuYWRkKCdJIGFtIHN1bmtleWRva2V5LicpO1xyXG5zdHJpbmcuYWRkKCdJIGFtIEZyb250LWVuZCBEZXZlbG9wZXIuJyk7XHJcbnN0cmluZy5hZGQoJ1N0dWR5IERlc2lnbiBQYXR0ZXJucy4nKTtcclxuXHJcbmNvbnN0IHByZURvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByZScpO1xyXG5cclxuc3RyaW5nLnByaW50KHByZURvbSk7XHJcblxyXG5jb25zdCBzaWRlRGVjb3JhdG9yID0gbmV3IFNpZGVEZWNvcmF0b3Ioc3RyaW5nLCAnXCInKTtcclxuc2lkZURlY29yYXRvci5wcmludChwcmVEb20pO1xyXG5cclxuY29uc3QgYm94RGVjb3JhdG9yID0gbmV3IEJveERlY29yYXRvcihzdHJpbmcpO1xyXG5ib3hEZWNvcmF0b3IucHJpbnQocHJlRG9tKTtcclxuY29uc3QgYm94RGVjb3JhdG9yMiA9IG5ldyBCb3hEZWNvcmF0b3Ioc2lkZURlY29yYXRvcik7XHJcbmJveERlY29yYXRvcjIucHJpbnQocHJlRG9tKTtcclxuXHJcbi8qIFxyXG4gIERlY29yYXRvciDtjKjthLTsnYAg7Ja065akIOqwneyytOyXkCDquLDriqXsnYQg7KCB7Jqp7ZWgIOuVjCDqt7gg6rCd7LK07JmAIOyggeyaqeuQoCDquLDriqXsnYQg64+Z7J287Iuc7ZWgIOyImCDsnojsnYxcclxuXHJcbiAg642w7J207YSw7JmAIOq4sOuKpeydhCDrj5nsnbzsi5ztlaAg7IiYIOyeiOycvOuvgOuhnCDri6TslpHtlZwg6riw64ql7J2EIOykkeyyqe2VtOyEnCDsoIHsmqntlaAg7IiYIOyeiOycvOupsCDsoIHsmqnrkJjripQg6riw64ql7J2YIOyInOyEnOyXkCDrlLDrnbwg64uk66W4IOqysOqzvOulvCDslrvsnYQg7IiYIOyeiOydjFxyXG4qL1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=