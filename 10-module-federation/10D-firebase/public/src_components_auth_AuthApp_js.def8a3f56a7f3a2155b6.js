"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_components_auth_AuthApp_js"],{

/***/ "./src/components/auth/AuthApp.js":
/*!****************************************!*\
  !*** ./src/components/auth/AuthApp.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var auth_AuthApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! auth/AuthApp */ \"webpack/container/remote/auth/AuthApp\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n\n\n\nvar AuthApp = function AuthApp() {\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log('ref.current: ', ref.current);\n    if (ref.current) {\n      (0,auth_AuthApp__WEBPACK_IMPORTED_MODULE_1__.mount)(ref.current, {\n        defaultPath: '/auth/signin',\n        email: 'pedro@gmail.com',\n        password: 'pedro@123',\n        onSignIn: function onSignIn(email, password) {\n          console.log('container.onSignIn: ', {\n            email: email,\n            password: password\n          });\n          navigate('/dashboard');\n        }\n      });\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    ref: ref\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthApp);\n\n//# sourceURL=webpack://container/./src/components/auth/AuthApp.js?");

/***/ })

}]);