/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[handle]",{

/***/ "./components/layouts/PageWithBreadcrumbs/PageWithBreadcrumbs.tsx":
/*!************************************************************************!*\
  !*** ./components/layouts/PageWithBreadcrumbs/PageWithBreadcrumbs.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PageWithBreadcrumbs_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWithBreadcrumbs.styled */ \"./components/layouts/PageWithBreadcrumbs/PageWithBreadcrumbs.styled.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/isaacraskin/cloudshelf-fs-test/components/layouts/PageWithBreadcrumbs/PageWithBreadcrumbs.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar PageWithBreadcrumbs = function PageWithBreadcrumbs(_ref) {\n  var title = _ref.title,\n      children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageWithBreadcrumbs_styled__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageWithBreadcrumbs_styled__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this), \"/\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 10\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PageWithBreadcrumbs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageWithBreadcrumbs);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageWithBreadcrumbs\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL1BhZ2VXaXRoQnJlYWRjcnVtYnMvUGFnZVdpdGhCcmVhZGNydW1icy50c3g/MDRlYiJdLCJuYW1lcyI6WyJQYWdlV2l0aEJyZWFkY3J1bWJzIiwidGl0bGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUF5QjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkQsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBQSw0QkFDRSw4REFBQyxvRUFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixvQkFJRztBQUFBLGtCQUFPRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU9HQyxRQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FaRDs7S0FBTUYsbUI7QUFjTiwrREFBZUEsbUJBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvUGFnZVdpdGhCcmVhZGNydW1icy9QYWdlV2l0aEJyZWFkY3J1bWJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgV3JhcHBlciwgQnJlYWRjcnVtYnMgfSBmcm9tICcuL1BhZ2VXaXRoQnJlYWRjcnVtYnMuc3R5bGVkJztcblxuY29uc3QgUGFnZVdpdGhCcmVhZGNydW1icyA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8QnJlYWRjcnVtYnM+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAvPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgIDwvQnJlYWRjcnVtYnM+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVdpdGhCcmVhZGNydW1icztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/PageWithBreadcrumbs/PageWithBreadcrumbs.tsx\n");

/***/ })

});