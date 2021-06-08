/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/createUser.ts":
/*!*************************************!*\
  !*** ./src/functions/createUser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst handle = async (event) => {\r\n    const { userid } = event.pathParameters;\r\n    const { title, deadline } = JSON.parse(event.body);\r\n    await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.put({\r\n        TableName: \"users\",\r\n        Item: {\r\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\r\n            user_id: userid,\r\n            title,\r\n            done: false,\r\n            deadline: new Date(deadline).toDateString(),\r\n        }\r\n    }).promise();\r\n    return {\r\n        statusCode: 201,\r\n        body: JSON.stringify({\r\n            message: \"User successfuly created\",\r\n        }),\r\n        headers: {\r\n            \"content-type\": \"application/json\"\r\n        }\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVVzZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzY2hhbGxlbmdlLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVVc2VyLnRzP2MzM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2R5bmFtb2RiQ2xpZW50XCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tIFwidXVpZFwiXHJcblxyXG5pbnRlcmZhY2UgSUNyZWF0ZVVzZXIge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGRlYWRsaW5lOiBEYXRlLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJpZCB9ID0gZXZlbnQucGF0aFBhcmFtZXRlcnM7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBkZWFkbGluZSB9ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KSBhcyBJQ3JlYXRlVXNlcjtcclxuXHJcbiAgICBhd2FpdCBkb2N1bWVudC5wdXQoe1xyXG4gICAgICAgIFRhYmxlTmFtZTogXCJ1c2Vyc1wiLFxyXG4gICAgICAgIEl0ZW06IHtcclxuICAgICAgICAgICAgaWQ6IHV1aWQoKSxcclxuICAgICAgICAgICAgdXNlcl9pZDogdXNlcmlkLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlYWRsaW5lOiBuZXcgRGF0ZShkZWFkbGluZSkudG9EYXRlU3RyaW5nKCksXHJcbiAgICAgICAgfVxyXG4gICAgfSkucHJvbWlzZSgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdHVzQ29kZTogMjAxLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJVc2VyIHN1Y2Nlc3NmdWx5IGNyZWF0ZWRcIixcclxuICAgICAgICB9KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/createUser.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst options = {\r\n    region: \"localhost\",\r\n    endpoint: \"http://localhost:8000\"\r\n};\r\nconst isOffline = () => {\r\n    return process.env.IS_OFFLINE;\r\n};\r\nconst document = isOffline()\r\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\r\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzY2hhbGxlbmdlLy4vc3JjL3V0aWxzL2R5bmFtb2RiQ2xpZW50LnRzPzQ1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREIgfSBmcm9tIFwiYXdzLXNka1wiO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHJlZ2lvbjogXCJsb2NhbGhvc3RcIixcclxuICAgIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiXHJcbn07XHJcblxyXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpXHJcbiAgICA/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxyXG4gICAgOiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/createUser.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;