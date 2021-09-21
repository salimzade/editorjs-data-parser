/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tools/checklist.ts":
/*!********************************!*\
  !*** ./src/tools/checklist.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checklist": () => (/* binding */ checklist)
/* harmony export */ });
var checklist = function (param) {
    var checklistValue = '';
    param.array.forEach(function (element) {
        checklistValue += "<div class=\"form-checklist\">\n                                <input \n                                    class=\"form-checklist__input\" \n                                    type=\"radio\" name=\"checklist\" \n                                    id=\"form-checklist\" \n                                    value=\"option1\" \n                                    " + (element.checked ? 'checked' : '') + "/>\n                                <label \n                                    class=\"form-checklist__label\" \n                                    for=\"form-checklist\">\n                                    " + element.text + "\n                                </label>\n                            </div>";
    });
    return checklistValue;
};


/***/ }),

/***/ "./src/tools/code.ts":
/*!***************************!*\
  !*** ./src/tools/code.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code)
/* harmony export */ });
var code = function (param) {
    return "<pre>" + param.data.code + "</pre>";
};


/***/ }),

/***/ "./src/tools/embed.ts":
/*!****************************!*\
  !*** ./src/tools/embed.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embed": () => (/* binding */ embed)
/* harmony export */ });
var embed = function (param) {
    var embedValue = '';
    embedValue += "<iframe style=\"border: none;\" width='100%' height='" + (param.height + 100) + "' src='" + param.embed + "'></iframe>";
    return embedValue;
};


/***/ }),

/***/ "./src/tools/header.ts":
/*!*****************************!*\
  !*** ./src/tools/header.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
var header = function (param, type) {
    var headerValue = '';
    switch (type) {
        case 1:
            headerValue += "<h1>" + param + "</h1>";
            break;
        case 2:
            headerValue += "<h2>" + param + "</h2a>";
            break;
        case 3:
            headerValue += "<h3>" + param + "</h3a>";
            break;
        case 4:
            headerValue += "<h4>" + param + "</h4a>";
            break;
        case 5:
            headerValue += "<h5>" + param + "</h5a>";
            break;
        case 6:
            headerValue += "<h6>" + param + "</h6a>";
            break;
    }
    return headerValue;
};


/***/ }),

/***/ "./src/tools/image.ts":
/*!****************************!*\
  !*** ./src/tools/image.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "image": () => (/* binding */ image)
/* harmony export */ });
var image = function (param) {
    return "<img src='" + param.file.url + "' alt='" + param.caption + "'/>";
};


/***/ }),

/***/ "./src/tools/index.ts":
/*!****************************!*\
  !*** ./src/tools/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checklist": () => (/* reexport safe */ _checklist__WEBPACK_IMPORTED_MODULE_0__.checklist),
/* harmony export */   "code": () => (/* reexport safe */ _code__WEBPACK_IMPORTED_MODULE_1__.code),
/* harmony export */   "embed": () => (/* reexport safe */ _embed__WEBPACK_IMPORTED_MODULE_2__.embed),
/* harmony export */   "header": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_3__.header),
/* harmony export */   "image": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_4__.image),
/* harmony export */   "link": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_5__.link),
/* harmony export */   "list": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_6__.list),
/* harmony export */   "paragraph": () => (/* reexport safe */ _paragraph__WEBPACK_IMPORTED_MODULE_7__.paragraph),
/* harmony export */   "quote": () => (/* reexport safe */ _quote__WEBPACK_IMPORTED_MODULE_8__.quote),
/* harmony export */   "raw": () => (/* reexport safe */ _raw__WEBPACK_IMPORTED_MODULE_9__.raw),
/* harmony export */   "table": () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_10__.table),
/* harmony export */   "warning": () => (/* reexport safe */ _warning__WEBPACK_IMPORTED_MODULE_11__.warning)
/* harmony export */ });
/* harmony import */ var _checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist */ "./src/tools/checklist.ts");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code */ "./src/tools/code.ts");
/* harmony import */ var _embed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embed */ "./src/tools/embed.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/tools/header.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./src/tools/image.ts");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link */ "./src/tools/link.ts");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list */ "./src/tools/list.ts");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paragraph */ "./src/tools/paragraph.ts");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quote */ "./src/tools/quote.ts");
/* harmony import */ var _raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./raw */ "./src/tools/raw.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table */ "./src/tools/table.ts");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warning */ "./src/tools/warning.ts");














/***/ }),

/***/ "./src/tools/link.ts":
/*!***************************!*\
  !*** ./src/tools/link.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "link": () => (/* binding */ link)
/* harmony export */ });
var link = function (param) {
    return "<a href='" + param + "' target='_blank'>" + param + "</a>";
};


/***/ }),

/***/ "./src/tools/list.ts":
/*!***************************!*\
  !*** ./src/tools/list.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list": () => (/* binding */ list)
/* harmony export */ });
var list = function (param) {
    var listValue = '';
    listValue += "<ol>";
    param.forEach(function (items) {
        listValue += "<li>" + items + "</li>";
    });
    listValue += "</ol>";
    return listValue;
};


/***/ }),

/***/ "./src/tools/paragraph.ts":
/*!********************************!*\
  !*** ./src/tools/paragraph.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paragraph": () => (/* binding */ paragraph)
/* harmony export */ });
var paragraph = function (param) {
    return "<p>" + param + "</p>";
};


/***/ }),

/***/ "./src/tools/quote.ts":
/*!****************************!*\
  !*** ./src/tools/quote.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quote": () => (/* binding */ quote)
/* harmony export */ });
var quote = function (caption, text) {
    var quoteValue = '';
    quoteValue += "<blockquote class=\"blockquote\">\n                    " + text + "\n                    <footer class=\"blockquote-footer\">" + caption + "</footer>\n                 </blockquote>";
    return quoteValue;
};


/***/ }),

/***/ "./src/tools/raw.ts":
/*!**************************!*\
  !*** ./src/tools/raw.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raw": () => (/* binding */ raw)
/* harmony export */ });
var raw = function (param) {
    var rawValue = '';
    rawValue += param;
    return rawValue;
};


/***/ }),

/***/ "./src/tools/table.ts":
/*!****************************!*\
  !*** ./src/tools/table.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "table": () => (/* binding */ table)
/* harmony export */ });
var table = function (params) {
    var tableHeader = '';
    var tableBody = '';
    var template = '';
    params.data.content[0].forEach(function (header) {
        tableHeader += "<th>" + header + "</th>";
    });
    for (var i = 1; i < params.data.content.length; i++) {
        tableBody += "<tr>";
        params.data.content[i].forEach(function (body) {
            tableBody += "<td>" + body + "</td>";
        });
        tableBody += "</tr>";
    }
    template = "\n    <table class='table'>\n        <thead class='thead'>\n            <tr>\n                " + tableHeader + "\n            <tr>\n        </thead>\n        <tbody>\n            " + tableBody + "\n        </tbody>\n    </table>\n  ";
    return template;
};


/***/ }),

/***/ "./src/tools/warning.ts":
/*!******************************!*\
  !*** ./src/tools/warning.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
var warning = function (params) {
    return "<figure id='figure'>\n                <figcaption>" + params.title + "</figcaption>\n                <p>" + params.message + "</p>\n            </figure>";
};


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parser": () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/tools/index.ts");

var parser = function (value) {
    var editorData = '';
    value.array.forEach(function (element) {
        switch (element.type) {
            case 'checklist':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.checklist)(element.data.items);
                break;
            case 'code':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.code)(element);
            case 'embed':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.embed)(element.data);
                break;
            case 'header':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.header)(element.data.text, element.data.level);
                break;
            case 'image':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.image)(element.data);
                break;
            case 'link':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.link)(element.data.link);
                break;
            case 'list':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.list)(element.data.items);
                break;
            case 'paragraph':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.paragraph)(element.data.text);
                break;
            case 'quote':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.quote)(element.data.caption, element.data.text);
                break;
            case 'raw':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.raw)(element.data.html);
                break;
            case 'table':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.table)(element);
                break;
            case 'warning':
                editorData += (0,_tools__WEBPACK_IMPORTED_MODULE_0__.warning)(element.data);
                break;
            default:
                editorData += '';
        }
    });
    return editorData;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cnNlci8uL3NyYy90b29scy9jaGVja2xpc3QudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvY29kZS50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci8uL3NyYy90b29scy9lbWJlZC50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci8uL3NyYy90b29scy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvaW1hZ2UudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvbGluay50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci8uL3NyYy90b29scy9saXN0LnRzIiwid2VicGFjazovL2VkaXRvcmpzLWRhdGEtcGFyc2VyLy4vc3JjL3Rvb2xzL3BhcmFncmFwaC50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci8uL3NyYy90b29scy9xdW90ZS50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci8uL3NyYy90b29scy9yYXcudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvLi9zcmMvdG9vbHMvd2FybmluZy50cyIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWRpdG9yanMtZGF0YS1wYXJzZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZGl0b3Jqcy1kYXRhLXBhcnNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VkaXRvcmpzLWRhdGEtcGFyc2VyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjaGVja2xpc3QgPSAocGFyYW06IHtcclxuICAgIGFycmF5OiB7IGNoZWNrZWQ6IGJvb2xlYW47IHRleHQ6IHN0cmluZyB9W107XHJcbn0pID0+IHtcclxuICAgIGxldCBjaGVja2xpc3RWYWx1ZSA9ICcnO1xyXG4gICAgcGFyYW0uYXJyYXkuZm9yRWFjaCgoZWxlbWVudDogeyBjaGVja2VkOiBib29sZWFuOyB0ZXh0OiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgIGNoZWNrbGlzdFZhbHVlICs9IGA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVja2xpc3RfX2lucHV0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaGVja2xpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3JtLWNoZWNrbGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9wdGlvbjFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbGVtZW50LmNoZWNrZWQgPyAnY2hlY2tlZCcgOiAnJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrbGlzdF9fbGFiZWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPVwiZm9ybS1jaGVja2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbGVtZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjaGVja2xpc3RWYWx1ZTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNvZGUgPSAocGFyYW06IHsgZGF0YTogeyBjb2RlOiBhbnkgfSB9KSA9PiB7XHJcbiAgICByZXR1cm4gYDxwcmU+JHtwYXJhbS5kYXRhLmNvZGV9PC9wcmU+YDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGVtYmVkID0gKHBhcmFtOiB7IGhlaWdodDogbnVtYmVyOyBlbWJlZDogYW55IH0pID0+IHtcclxuICAgIGxldCBlbWJlZFZhbHVlID0gJyc7XHJcbiAgICBlbWJlZFZhbHVlICs9IGA8aWZyYW1lIHN0eWxlPVwiYm9yZGVyOiBub25lO1wiIHdpZHRoPScxMDAlJyBoZWlnaHQ9JyR7XHJcbiAgICAgICAgcGFyYW0uaGVpZ2h0ICsgMTAwXHJcbiAgICB9JyBzcmM9JyR7cGFyYW0uZW1iZWR9Jz48L2lmcmFtZT5gO1xyXG4gICAgcmV0dXJuIGVtYmVkVmFsdWU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBoZWFkZXIgPSAocGFyYW06IHN0cmluZywgdHlwZTogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgaGVhZGVyVmFsdWUgPSAnJztcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgaGVhZGVyVmFsdWUgKz0gYDxoMT4ke3BhcmFtfTwvaDE+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBoZWFkZXJWYWx1ZSArPSBgPGgyPiR7cGFyYW19PC9oMmE+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBoZWFkZXJWYWx1ZSArPSBgPGgzPiR7cGFyYW19PC9oM2E+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBoZWFkZXJWYWx1ZSArPSBgPGg0PiR7cGFyYW19PC9oNGE+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBoZWFkZXJWYWx1ZSArPSBgPGg1PiR7cGFyYW19PC9oNWE+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICBoZWFkZXJWYWx1ZSArPSBgPGg2PiR7cGFyYW19PC9oNmE+YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVhZGVyVmFsdWU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBpbWFnZSA9IChwYXJhbTogeyBmaWxlOiB7IHVybDogc3RyaW5nIH07IGNhcHRpb246IHN0cmluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gYDxpbWcgc3JjPScke3BhcmFtLmZpbGUudXJsfScgYWx0PScke3BhcmFtLmNhcHRpb259Jy8+YDtcclxufTtcclxuIiwiZXhwb3J0IHsgY2hlY2tsaXN0IH0gZnJvbSAnLi9jaGVja2xpc3QnO1xyXG5leHBvcnQgeyBjb2RlIH0gZnJvbSAnLi9jb2RlJztcclxuZXhwb3J0IHsgZW1iZWQgfSBmcm9tICcuL2VtYmVkJztcclxuZXhwb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5leHBvcnQgeyBpbWFnZSB9IGZyb20gJy4vaW1hZ2UnO1xyXG5leHBvcnQgeyBsaW5rIH0gZnJvbSAnLi9saW5rJztcclxuZXhwb3J0IHsgbGlzdCB9IGZyb20gJy4vbGlzdCc7XHJcbmV4cG9ydCB7IHBhcmFncmFwaCB9IGZyb20gJy4vcGFyYWdyYXBoJztcclxuZXhwb3J0IHsgcXVvdGUgfSBmcm9tICcuL3F1b3RlJztcclxuZXhwb3J0IHsgcmF3IH0gZnJvbSAnLi9yYXcnO1xyXG5leHBvcnQgeyB0YWJsZSB9IGZyb20gJy4vdGFibGUnO1xyXG5leHBvcnQgeyB3YXJuaW5nIH0gZnJvbSAnLi93YXJuaW5nJzsiLCJleHBvcnQgY29uc3QgbGluayA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYDxhIGhyZWY9JyR7cGFyYW19JyB0YXJnZXQ9J19ibGFuayc+JHtwYXJhbX08L2E+YDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGxpc3QgPSAocGFyYW06IGFueVtdKSA9PiB7XHJcbiAgICBsZXQgbGlzdFZhbHVlID0gJyc7XHJcblxyXG4gICAgbGlzdFZhbHVlICs9IGA8b2w+YDtcclxuXHJcbiAgICBwYXJhbS5mb3JFYWNoKChpdGVtczogYW55KSA9PiB7XHJcbiAgICAgICAgbGlzdFZhbHVlICs9IGA8bGk+JHtpdGVtc308L2xpPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsaXN0VmFsdWUgKz0gYDwvb2w+YDtcclxuXHJcbiAgICByZXR1cm4gbGlzdFZhbHVlO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcGFyYWdyYXBoID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBgPHA+JHtwYXJhbX08L3A+YDtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHF1b3RlID0gKGNhcHRpb246IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcXVvdGVWYWx1ZSA9ICcnO1xyXG4gICAgcXVvdGVWYWx1ZSArPSBgPGJsb2NrcXVvdGUgY2xhc3M9XCJibG9ja3F1b3RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJibG9ja3F1b3RlLWZvb3RlclwiPiR7Y2FwdGlvbn08L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgICA8L2Jsb2NrcXVvdGU+YDtcclxuICAgIHJldHVybiBxdW90ZVZhbHVlO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgcmF3ID0gKHBhcmFtOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgbGV0IHJhd1ZhbHVlID0gJyc7XHJcbiAgICByYXdWYWx1ZSArPSBwYXJhbTtcclxuXHJcbiAgICByZXR1cm4gcmF3VmFsdWU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB0YWJsZSA9IChwYXJhbXM6IHsgZGF0YTogeyBjb250ZW50OiBzdHJpbmdbXVtdIH0gfSkgPT4ge1xyXG4gICAgbGV0IHRhYmxlSGVhZGVyID0gJyc7XHJcbiAgICBsZXQgdGFibGVCb2R5ID0gJyc7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSAnJztcclxuXHJcbiAgICBwYXJhbXMuZGF0YS5jb250ZW50WzBdLmZvckVhY2goKGhlYWRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGFibGVIZWFkZXIgKz0gYDx0aD4ke2hlYWRlcn08L3RoPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhcmFtcy5kYXRhLmNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YWJsZUJvZHkgKz0gYDx0cj5gO1xyXG5cclxuICAgICAgICBwYXJhbXMuZGF0YS5jb250ZW50W2ldLmZvckVhY2goKGJvZHkpID0+IHtcclxuICAgICAgICAgICAgdGFibGVCb2R5ICs9IGA8dGQ+JHtib2R5fTwvdGQ+YDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YWJsZUJvZHkgKz0gYDwvdHI+YDtcclxuICAgIH1cclxuXHJcbiAgICB0ZW1wbGF0ZSA9IGBcclxuICAgIDx0YWJsZSBjbGFzcz0ndGFibGUnPlxyXG4gICAgICAgIDx0aGVhZCBjbGFzcz0ndGhlYWQnPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAke3RhYmxlSGVhZGVyfVxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICR7dGFibGVCb2R5fVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gIGA7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgd2FybmluZyA9IChwYXJhbXM6IHsgdGl0bGU6IHN0cmluZzsgbWVzc2FnZTogc3RyaW5nIH0pID0+IHtcclxuICAgIHJldHVybiBgPGZpZ3VyZSBpZD0nZmlndXJlJz5cclxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7cGFyYW1zLnRpdGxlfTwvZmlnY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgIDxwPiR7cGFyYW1zLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5gO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgICBjaGVja2xpc3QsXHJcbiAgICBjb2RlLFxyXG4gICAgZW1iZWQsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBpbWFnZSxcclxuICAgIGxpbmssXHJcbiAgICBsaXN0LFxyXG4gICAgcGFyYWdyYXBoLFxyXG4gICAgcXVvdGUsXHJcbiAgICByYXcsXHJcbiAgICB0YWJsZSxcclxuICAgIHdhcm5pbmcsXHJcbn0gZnJvbSAnLi90b29scyc7XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VyID0gKHZhbHVlOiB7IGFycmF5OiBhbnlbXSB9KSA9PiB7XHJcbiAgICBsZXQgZWRpdG9yRGF0YSA9ICcnO1xyXG5cclxuICAgIHZhbHVlLmFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdjaGVja2xpc3QnOlxyXG4gICAgICAgICAgICAgICAgZWRpdG9yRGF0YSArPSBjaGVja2xpc3QoZWxlbWVudC5kYXRhLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb2RlJzpcclxuICAgICAgICAgICAgICAgIGVkaXRvckRhdGEgKz0gY29kZShlbGVtZW50KTtcclxuICAgICAgICAgICAgY2FzZSAnZW1iZWQnOlxyXG4gICAgICAgICAgICAgICAgZWRpdG9yRGF0YSArPSBlbWJlZChlbGVtZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JEYXRhICs9IGhlYWRlcihlbGVtZW50LmRhdGEudGV4dCwgZWxlbWVudC5kYXRhLmxldmVsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JEYXRhICs9IGltYWdlKGVsZW1lbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbGluayc6XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JEYXRhICs9IGxpbmsoZWxlbWVudC5kYXRhLmxpbmspO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xpc3QnOlxyXG4gICAgICAgICAgICAgICAgZWRpdG9yRGF0YSArPSBsaXN0KGVsZW1lbnQuZGF0YS5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncGFyYWdyYXBoJzpcclxuICAgICAgICAgICAgICAgIGVkaXRvckRhdGEgKz0gcGFyYWdyYXBoKGVsZW1lbnQuZGF0YS50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdxdW90ZSc6XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JEYXRhICs9IHF1b3RlKGVsZW1lbnQuZGF0YS5jYXB0aW9uLCBlbGVtZW50LmRhdGEudGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncmF3JzpcclxuICAgICAgICAgICAgICAgIGVkaXRvckRhdGEgKz0gcmF3KGVsZW1lbnQuZGF0YS5odG1sKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd0YWJsZSc6XHJcbiAgICAgICAgICAgICAgICBlZGl0b3JEYXRhICs9IHRhYmxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgICAgICAgICAgZWRpdG9yRGF0YSArPSB3YXJuaW5nKGVsZW1lbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGVkaXRvckRhdGEgKz0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVkaXRvckRhdGE7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==