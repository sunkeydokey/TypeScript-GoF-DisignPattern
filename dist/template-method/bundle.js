/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/template-method/Article.ts":
/*!****************************************!*\
  !*** ./src/template-method/Article.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Article: () => (/* binding */ Article)
/* harmony export */ });
var Article = /** @class */ (function () {
    function Article(title, content, footer) {
        this.title = title;
        this.content = content;
        this.footer = footer;
    }
    Article.prototype.getTitle = function () {
        return this.title;
    };
    Article.prototype.getContent = function () {
        return this.content;
    };
    Article.prototype.getFooter = function () {
        return this.footer;
    };
    return Article;
}());



/***/ }),

/***/ "./src/template-method/DisplayArticleTemplate.ts":
/*!*******************************************************!*\
  !*** ./src/template-method/DisplayArticleTemplate.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayArticleTemplate: () => (/* binding */ DisplayArticleTemplate)
/* harmony export */ });
var DisplayArticleTemplate = /** @class */ (function () {
    function DisplayArticleTemplate(article) {
        var _this = this;
        this.article = article;
        this.displayHtml = function () {
            return "\n      ".concat(_this.titleHtml(), "\n      ").concat(_this.contentHtml(), " \n      ").concat(_this.footerHtml(), "\n    ");
        };
    }
    return DisplayArticleTemplate;
}());



/***/ }),

/***/ "./src/template-method/EditableDisplayArticle.ts":
/*!*******************************************************!*\
  !*** ./src/template-method/EditableDisplayArticle.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditableDisplayArticle: () => (/* binding */ EditableDisplayArticle)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template-method/DisplayArticleTemplate.ts");
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

var EditableDisplayArticle = /** @class */ (function (_super) {
    __extends(EditableDisplayArticle, _super);
    function EditableDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    EditableDisplayArticle.prototype.titleHtml = function () {
        return "\n      <div>\n        <span>\uC81C\uBAA9</span>\n        <input type=\"text\" value=".concat(this.article.getTitle(), " />\n      </div>\n    ");
    };
    EditableDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "".concat(item, "\n"); });
        return "\n    <div>\n      <span>\uB0B4\uC6A9</span><br/>\n      <textarea cols=\"50\" rows=\"5\">".concat(items.join(''), "</textarea>\n    </div>\n  ");
    };
    EditableDisplayArticle.prototype.footerHtml = function () {
        return "\n    <div>\n      <span>\uAE00\uC4F4\uC774</span>\n      <input type=\"text\" value=".concat(this.article.getFooter(), " />\n    </div>\n  ");
    };
    return EditableDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__.DisplayArticleTemplate));



/***/ }),

/***/ "./src/template-method/SimpleDisplayArticle.ts":
/*!*****************************************************!*\
  !*** ./src/template-method/SimpleDisplayArticle.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleDisplayArticle: () => (/* binding */ SimpleDisplayArticle)
/* harmony export */ });
/* harmony import */ var _DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DisplayArticleTemplate */ "./src/template-method/DisplayArticleTemplate.ts");
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

var SimpleDisplayArticle = /** @class */ (function (_super) {
    __extends(SimpleDisplayArticle, _super);
    function SimpleDisplayArticle(article) {
        return _super.call(this, article) || this;
    }
    SimpleDisplayArticle.prototype.titleHtml = function () {
        return "<h1>".concat(this.article.getTitle(), "</h1>");
    };
    SimpleDisplayArticle.prototype.contentHtml = function () {
        var items = this.article.getContent().map(function (item) { return "<li>".concat(item, "</li>"); });
        return "<ul>".concat(items.join(''), "</ul>");
    };
    SimpleDisplayArticle.prototype.footerHtml = function () {
        return "<h3>".concat(this.article.getFooter(), "</h3>");
    };
    return SimpleDisplayArticle;
}(_DisplayArticleTemplate__WEBPACK_IMPORTED_MODULE_0__.DisplayArticleTemplate));



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
/*!**************************************!*\
  !*** ./src/template-method/index.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ "./src/template-method/Article.ts");
/* harmony import */ var _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableDisplayArticle */ "./src/template-method/EditableDisplayArticle.ts");
/* harmony import */ var _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleDisplayArticle */ "./src/template-method/SimpleDisplayArticle.ts");



var article = new _Article__WEBPACK_IMPORTED_MODULE_0__.Article('템플릿 메소드 패턴', ['디자인', '패턴', 'GoF'], 'sunkeydokey');
var display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__.SimpleDisplayArticle(article);
var contentBox = document.querySelector('.content');
var checkbox = document.querySelector('.edit-mode');
checkbox.addEventListener('change', function (_a) {
    var target = _a.target;
    var checked = target.checked;
    var display;
    if (checked) {
        display = new _EditableDisplayArticle__WEBPACK_IMPORTED_MODULE_1__.EditableDisplayArticle(article);
    }
    else {
        display = new _SimpleDisplayArticle__WEBPACK_IMPORTED_MODULE_2__.SimpleDisplayArticle(article);
    }
    contentBox.innerHTML = display.displayHtml();
});
contentBox.innerHTML = display.displayHtml();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDRSxpQkFDVSxLQUFhLEVBQ2IsT0FBc0IsRUFDdEIsTUFBYztRQUZkLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVHLDBCQUFRLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7SUFDRSxnQ0FBc0IsT0FBZ0I7UUFBdEMsaUJBQTBDO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFdEIsZ0JBQVcsR0FBRztZQUM1QixPQUFPLGtCQUNILEtBQUksQ0FBQyxTQUFTLEVBQUUscUJBQ2hCLEtBQUksQ0FBQyxXQUFXLEVBQUUsc0JBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsV0FDcEIsQ0FBQztRQUNKLENBQUMsQ0FBQztJQVJ1QyxDQUFDO0lBYTVDLDZCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUU7QUFFbEU7SUFBNEMsMENBQXNCO0lBNkJoRSxnQ0FBWSxPQUFnQjtlQUMxQixrQkFBTSxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQTlCUywwQ0FBUyxHQUFuQjtRQUNFLE9BQU8sK0ZBR3dCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDRCQUVyRCxDQUFDO0lBQ0osQ0FBQztJQUVTLDRDQUFXLEdBQXJCO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssaUJBQUcsSUFBSSxPQUFJLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDbkUsT0FBTyxvR0FHMEIsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZ0NBRWhELENBQUM7SUFDRixDQUFDO0lBRVMsMkNBQVUsR0FBcEI7UUFDRSxPQUFPLCtGQUdzQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSx3QkFFdEQsQ0FBQztJQUNGLENBQUM7SUFLSCw2QkFBQztBQUFELENBQUMsQ0FoQzJDLDJFQUFzQixHQWdDakU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENpRTtBQUVsRTtJQUEwQyx3Q0FBc0I7SUFjOUQsOEJBQVksT0FBZ0I7ZUFDMUIsa0JBQU0sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFmUyx3Q0FBUyxHQUFuQjtRQUNFLE9BQU8sY0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFPLENBQUM7SUFDL0MsQ0FBQztJQUVTLDBDQUFXLEdBQXJCO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUsscUJBQU8sSUFBSSxVQUFPLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUMxRSxPQUFPLGNBQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBTyxDQUFDO0lBQ3RDLENBQUM7SUFFUyx5Q0FBVSxHQUFwQjtRQUNFLE9BQU8sY0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFPLENBQUM7SUFDaEQsQ0FBQztJQUtILDJCQUFDO0FBQUQsQ0FBQyxDQWpCeUMsMkVBQXNCLEdBaUIvRDs7Ozs7Ozs7VUNwQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQzhCO0FBQ0o7QUFFOUQsSUFBTSxPQUFPLEdBQUcsSUFBSSw2Q0FBTyxDQUN6QixZQUFZLEVBQ1osQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUNwQixhQUFhLENBQ2QsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLElBQUksdUVBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDckUsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQWdCLENBQUM7QUFDckUsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEVBQWlCO1FBQWYsTUFBTTtJQUNuQyxXQUFPLEdBQUssTUFBMEIsUUFBL0IsQ0FBZ0M7SUFDL0MsSUFBSSxPQUFPLENBQUM7SUFFWixJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sR0FBRyxJQUFJLDJFQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9DO1NBQU07UUFDTCxPQUFPLEdBQUcsSUFBSSx1RUFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3QztJQUVELFVBQVUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ0gsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvdGVtcGxhdGUtbWV0aG9kL0FydGljbGUudHMiLCJ3ZWJwYWNrOi8vdHMtZ29mLy4vc3JjL3RlbXBsYXRlLW1ldGhvZC9EaXNwbGF5QXJ0aWNsZVRlbXBsYXRlLnRzIiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS1tZXRob2QvRWRpdGFibGVEaXNwbGF5QXJ0aWNsZS50cyIsIndlYnBhY2s6Ly90cy1nb2YvLi9zcmMvdGVtcGxhdGUtbWV0aG9kL1NpbXBsZURpc3BsYXlBcnRpY2xlLnRzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzLWdvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLWdvZi8uL3NyYy90ZW1wbGF0ZS1tZXRob2QvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFydGljbGUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nLFxyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBBcnJheTxzdHJpbmc+LFxyXG4gICAgcHJpdmF0ZSBmb290ZXI6IHN0cmluZ1xyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb250ZW50KCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRGb290ZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvb3RlcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4vQXJ0aWNsZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFydGljbGU6IEFydGljbGUpIHt9XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBkaXNwbGF5SHRtbCA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICR7dGhpcy50aXRsZUh0bWwoKX1cclxuICAgICAgJHt0aGlzLmNvbnRlbnRIdG1sKCl9IFxyXG4gICAgICAke3RoaXMuZm9vdGVySHRtbCgpfVxyXG4gICAgYDtcclxuICB9O1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdGl0bGVIdG1sKCk6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY29udGVudEh0bWwoKTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBmb290ZXJIdG1sKCk6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi9BcnRpY2xlJztcclxuaW1wb3J0IHsgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB9IGZyb20gJy4vRGlzcGxheUFydGljbGVUZW1wbGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSBleHRlbmRzIERpc3BsYXlBcnRpY2xlVGVtcGxhdGUge1xyXG4gIHByb3RlY3RlZCB0aXRsZUh0bWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+7KCc66qpPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPSR7dGhpcy5hcnRpY2xlLmdldFRpdGxlKCl9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjb250ZW50SHRtbCgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmFydGljbGUuZ2V0Q29udGVudCgpLm1hcCgoaXRlbSkgPT4gYCR7aXRlbX1cXG5gKTtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c3Bhbj7rgrTsmqk8L3NwYW4+PGJyLz5cclxuICAgICAgPHRleHRhcmVhIGNvbHM9XCI1MFwiIHJvd3M9XCI1XCI+JHtpdGVtcy5qb2luKCcnKX08L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNwYW4+6riA7JO07J20PC9zcGFuPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT0ke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XHJcbiAgICBzdXBlcihhcnRpY2xlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gJy4vQXJ0aWNsZSc7XHJcbmltcG9ydCB7IERpc3BsYXlBcnRpY2xlVGVtcGxhdGUgfSBmcm9tICcuL0Rpc3BsYXlBcnRpY2xlVGVtcGxhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZURpc3BsYXlBcnRpY2xlIGV4dGVuZHMgRGlzcGxheUFydGljbGVUZW1wbGF0ZSB7XHJcbiAgcHJvdGVjdGVkIHRpdGxlSHRtbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGA8aDE+JHt0aGlzLmFydGljbGUuZ2V0VGl0bGUoKX08L2gxPmA7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY29udGVudEh0bWwoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5hcnRpY2xlLmdldENvbnRlbnQoKS5tYXAoKGl0ZW0pID0+IGA8bGk+JHtpdGVtfTwvbGk+YCk7XHJcbiAgICByZXR1cm4gYDx1bD4ke2l0ZW1zLmpvaW4oJycpfTwvdWw+YDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBmb290ZXJIdG1sKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYDxoMz4ke3RoaXMuYXJ0aWNsZS5nZXRGb290ZXIoKX08L2gzPmA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihhcnRpY2xlOiBBcnRpY2xlKSB7XHJcbiAgICBzdXBlcihhcnRpY2xlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSAnLi9BcnRpY2xlJztcclxuaW1wb3J0IHsgRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSB9IGZyb20gJy4vRWRpdGFibGVEaXNwbGF5QXJ0aWNsZSc7XHJcbmltcG9ydCB7IFNpbXBsZURpc3BsYXlBcnRpY2xlIH0gZnJvbSAnLi9TaW1wbGVEaXNwbGF5QXJ0aWNsZSc7XHJcblxyXG5jb25zdCBhcnRpY2xlID0gbmV3IEFydGljbGUoXHJcbiAgJ+2FnO2UjOumvyDrqZTshozrk5wg7Yyo7YS0JyxcclxuICBbJ+uUlOyekOyduCcsICftjKjthLQnLCAnR29GJ10sXHJcbiAgJ3N1bmtleWRva2V5J1xyXG4pO1xyXG5cclxuY29uc3QgZGlzcGxheSA9IG5ldyBTaW1wbGVEaXNwbGF5QXJ0aWNsZShhcnRpY2xlKTtcclxuY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykgYXMgSFRNTEVsZW1lbnQ7XHJcbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtbW9kZScpIGFzIEhUTUxFbGVtZW50O1xyXG5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoeyB0YXJnZXQgfTogRXZlbnQpID0+IHtcclxuICBjb25zdCB7IGNoZWNrZWQgfSA9IHRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGxldCBkaXNwbGF5O1xyXG5cclxuICBpZiAoY2hlY2tlZCkge1xyXG4gICAgZGlzcGxheSA9IG5ldyBFZGl0YWJsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkaXNwbGF5ID0gbmV3IFNpbXBsZURpc3BsYXlBcnRpY2xlKGFydGljbGUpO1xyXG4gIH1cclxuXHJcbiAgY29udGVudEJveC5pbm5lckhUTUwgPSBkaXNwbGF5LmRpc3BsYXlIdG1sKCk7XHJcbn0pO1xyXG5jb250ZW50Qm94LmlubmVySFRNTCA9IGRpc3BsYXkuZGlzcGxheUh0bWwoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9