"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_components_pages_dashboard_DashboardPage_js"],{

/***/ "./src/components/pages/dashboard/DashboardPage.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/dashboard/DashboardPage.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/Header.js */ \"./src/components/header/Header.js\");\n\n\n\nvar DashboardAppLazy = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"src_components_dashboard_DashboardApp_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../../dashboard/DashboardApp.js */ \"./src/components/dashboard/DashboardApp.js\"));\n});\nvar DashboardPage = function DashboardPage() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    isLogin = _useState2[0],\n    setIsLogin = _useState2[1];\n  var handleOnLoginButtonClick = function handleOnLoginButtonClick() {\n    if (!isLogin) {\n      navigate('/auth');\n    }\n    setIsLogin(!isLogin);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header_Header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    isLogin: isLogin,\n    onLoginButtonClick: handleOnLoginButtonClick\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DashboardAppLazy, null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardPage);\n\n//# sourceURL=webpack://container/./src/components/pages/dashboard/DashboardPage.js?");

/***/ })

}]);