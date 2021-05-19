/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Products/Products.tsx":
/*!******************************************!*\
  !*** ./components/Products/Products.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-scroller */ \"./node_modules/react-infinite-scroller/index.js\");\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _lib_formatCurrency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/formatCurrency */ \"./lib/formatCurrency.ts\");\n/* harmony import */ var _get_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-products */ \"./components/Products/get-products.ts\");\n/* harmony import */ var _Products_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Products.styled */ \"./components/Products/Products.styled.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/isaacraskin/cloudshelf-fs-test/components/Products/Products.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Products = function Products(props) {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(_get_products__WEBPACK_IMPORTED_MODULE_6__.GET_PRODUCTS),\n      data = _useQuery.data,\n      fetchMore = _useQuery.fetchMore;\n\n  var hasNextPage = (data === null || data === void 0 ? void 0 : data.products.pageInfo.hasNextPage) || props.hasNextPage;\n  var items = (data === null || data === void 0 ? void 0 : data.products.edges) || props.products; // attempt to load more data by scrolling\n\n  var loadMore = function loadMore() {\n    fetchMore({\n      variables: {\n        after: items[items.length - 1].cursor\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_4___default()), {\n    loadMore: loadMore,\n    hasMore: hasNextPage,\n    element: _Products_styled__WEBPACK_IMPORTED_MODULE_7__.Wrapper,\n    children: items.map(function (_ref) {\n      var node = _ref.node;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products_styled__WEBPACK_IMPORTED_MODULE_7__.Item, {\n        onClick: function onClick() {\n          return router.push(\"/product/\".concat(node.handle));\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          src: node.images.edges[0].node.originalSrc,\n          alt: node.title,\n          width: node.images.edges[0].node.width,\n          height: node.images.edges[0].node.height,\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products_styled__WEBPACK_IMPORTED_MODULE_7__.Details, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products_styled__WEBPACK_IMPORTED_MODULE_7__.Title, {\n            children: node.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products_styled__WEBPACK_IMPORTED_MODULE_7__.Price, {\n            children: (0,_lib_formatCurrency__WEBPACK_IMPORTED_MODULE_5__.default)(node.priceRange.maxVariantPrice.amount)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, node.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Products, \"rSe3UYqYwyc7/qeT2/gYRhJS/QI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useQuery];\n});\n\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c;\n\n$RefreshReg$(_c, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy9Qcm9kdWN0cy50c3g/NjBiNCJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUXVlcnkiLCJHRVRfUFJPRFVDVFMiLCJkYXRhIiwiZmV0Y2hNb3JlIiwiaGFzTmV4dFBhZ2UiLCJwcm9kdWN0cyIsInBhZ2VJbmZvIiwiaXRlbXMiLCJlZGdlcyIsImxvYWRNb3JlIiwidmFyaWFibGVzIiwiYWZ0ZXIiLCJsZW5ndGgiLCJjdXJzb3IiLCJXcmFwcGVyIiwibWFwIiwibm9kZSIsInB1c2giLCJoYW5kbGUiLCJpbWFnZXMiLCJvcmlnaW5hbFNyYyIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtYXRDdXJyZW5jeSIsInByaWNlUmFuZ2UiLCJtYXhWYXJpYW50UHJpY2UiLCJhbW91bnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUNqQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQURpQyxrQkFHTEMsd0RBQVEsQ0FBQ0MsdURBQUQsQ0FISDtBQUFBLE1BR3pCQyxJQUh5QixhQUd6QkEsSUFIeUI7QUFBQSxNQUduQkMsU0FIbUIsYUFHbkJBLFNBSG1COztBQUtqQyxNQUFNQyxXQUFvQixHQUN4QixDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsUUFBTixDQUFlQyxRQUFmLENBQXdCRixXQUF4QixLQUF1Q1AsS0FBSyxDQUFDTyxXQUQvQztBQUVBLE1BQU1HLEtBQW9CLEdBQUcsQ0FBQUwsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLFFBQU4sQ0FBZUcsS0FBZixLQUF3QlgsS0FBSyxDQUFDUSxRQUEzRCxDQVBpQyxDQVNqQzs7QUFDQSxNQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCTixhQUFTLENBQUM7QUFBRU8sZUFBUyxFQUFFO0FBQUVDLGFBQUssRUFBRUosS0FBSyxDQUFDQSxLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUFoQixDQUFMLENBQXdCQztBQUFqQztBQUFiLEtBQUQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UsOERBQUMsZ0VBQUQ7QUFBZ0IsWUFBUSxFQUFFSixRQUExQjtBQUFvQyxXQUFPLEVBQUVMLFdBQTdDO0FBQTBELFdBQU8sRUFBRVUscURBQW5FO0FBQUEsY0FDR1AsS0FBSyxDQUFDUSxHQUFOLENBQVU7QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSwwQkFDVCw4REFBQyxrREFBRDtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNbEIsTUFBTSxDQUFDbUIsSUFBUCxvQkFBd0JELElBQUksQ0FBQ0UsTUFBN0IsRUFBTjtBQUFBLFNBRlg7QUFBQSxnQ0FJRSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFMLENBQVlYLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJRLElBQXJCLENBQTBCSSxXQURqQztBQUVFLGFBQUcsRUFBRUosSUFBSSxDQUFDSyxLQUZaO0FBR0UsZUFBSyxFQUFFTCxJQUFJLENBQUNHLE1BQUwsQ0FBWVgsS0FBWixDQUFrQixDQUFsQixFQUFxQlEsSUFBckIsQ0FBMEJNLEtBSG5DO0FBSUUsZ0JBQU0sRUFBRU4sSUFBSSxDQUFDRyxNQUFMLENBQVlYLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJRLElBQXJCLENBQTBCTyxNQUpwQztBQUtFLG1CQUFTLEVBQUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBV0UsOERBQUMscURBQUQ7QUFBQSxrQ0FDRSw4REFBQyxtREFBRDtBQUFBLHNCQUFRUCxJQUFJLENBQUNLO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLG1EQUFEO0FBQUEsc0JBQ0dHLDREQUFjLENBQUNSLElBQUksQ0FBQ1MsVUFBTCxDQUFnQkMsZUFBaEIsQ0FBZ0NDLE1BQWpDO0FBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUEsU0FDT1gsSUFBSSxDQUFDWSxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUztBQUFBLEtBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0F0Q0Q7O0dBQU1oQyxRO1VBQ1dHLGtELEVBRWFDLG9EOzs7S0FIeEJKLFE7QUF3Q04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcblxuaW1wb3J0IHsgUHJvZHVjdEVkZ2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZm9ybWF0Q3VycmVuY3kgZnJvbSAnLi4vLi4vbGliL2Zvcm1hdEN1cnJlbmN5JztcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJy4vZ2V0LXByb2R1Y3RzJztcbmltcG9ydCB7IFdyYXBwZXIsIEl0ZW0sIERldGFpbHMsIFRpdGxlLCBQcmljZSB9IGZyb20gJy4vUHJvZHVjdHMuc3R5bGVkJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvZHVjdHM6IFByb2R1Y3RFZGdlW107XG4gIGhhc05leHRQYWdlOiBib29sZWFuO1xuICBlbmRDdXJzb3I6IHN0cmluZztcbn1cblxuY29uc3QgUHJvZHVjdHMgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YSwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFMpO1xuXG4gIGNvbnN0IGhhc05leHRQYWdlOiBib29sZWFuID1cbiAgICBkYXRhPy5wcm9kdWN0cy5wYWdlSW5mby5oYXNOZXh0UGFnZSB8fCBwcm9wcy5oYXNOZXh0UGFnZTtcbiAgY29uc3QgaXRlbXM6IFByb2R1Y3RFZGdlW10gPSBkYXRhPy5wcm9kdWN0cy5lZGdlcyB8fCBwcm9wcy5wcm9kdWN0cztcblxuICAvLyBhdHRlbXB0IHRvIGxvYWQgbW9yZSBkYXRhIGJ5IHNjcm9sbGluZ1xuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcbiAgICBmZXRjaE1vcmUoeyB2YXJpYWJsZXM6IHsgYWZ0ZXI6IGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmN1cnNvciB9IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEluZmluaXRlU2Nyb2xsIGxvYWRNb3JlPXtsb2FkTW9yZX0gaGFzTW9yZT17aGFzTmV4dFBhZ2V9IGVsZW1lbnQ9e1dyYXBwZXJ9PlxuICAgICAge2l0ZW1zLm1hcCgoeyBub2RlIH0pID0+IChcbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBrZXk9e25vZGUuaWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7bm9kZS5oYW5kbGV9YCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17bm9kZS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyY31cbiAgICAgICAgICAgIGFsdD17bm9kZS50aXRsZX1cbiAgICAgICAgICAgIHdpZHRoPXtub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtub2RlLmltYWdlcy5lZGdlc1swXS5ub2RlLmhlaWdodH1cbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERldGFpbHM+XG4gICAgICAgICAgICA8VGl0bGU+e25vZGUudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgIDxQcmljZT5cbiAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KG5vZGUucHJpY2VSYW5nZS5tYXhWYXJpYW50UHJpY2UuYW1vdW50KX1cbiAgICAgICAgICAgIDwvUHJpY2U+XG4gICAgICAgICAgPC9EZXRhaWxzPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICApKX1cbiAgICA8L0luZmluaXRlU2Nyb2xsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products/Products.tsx\n");

/***/ })

});