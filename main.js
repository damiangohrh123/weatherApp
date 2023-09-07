/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Light.woff */ \"./src/fonts/Lato-Light.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --fontColor: rgb(63, 63, 63);\n  --card: rgb(255, 255, 255);\n}\n\n@font-face {\n  font-family: 'baseFont'; /* The name you want to use for the font */\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'); /* Path to the font file */\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  font-family: 'baseFont';\n  letter-spacing: 6px;\n\n  color: var(--fontColor);\n}\n\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 30px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\np {\n  font-size: 20px;\n}\n\nbody {\n  font-family: Helvetica, sans-serif;\n  max-height: 100vh;\n  overflow: hidden;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 4fr 2fr;\n  grid-template-rows: 8% 3fr 2fr 3fr;\n  gap: 20px;\n\n  padding: 50px;\n}\n\n.searchForm {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.searchBar {\n  width: 100%;\n  height: 80%;\n\n  padding: 0 20px;\n\n  font-size: 22px;\n  background-color: var(--card);\n  border: none;\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.errorMsg {\n  padding: 0 20px;\n\n  font-size: 20px;\n  font-weight: 900;\n  color: rgb(223, 21, 21);\n}\n\n.errorMsgHidden {\n  display: none;\n}\n\n.errorMsgActive {\n  display: block;\n}\n\n.searchBar:focus {\n  outline: none;\n}\n\n.weatherInfo {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  grid-template-columns: 4fr 2fr;\n  align-items: center;\n\n  padding: 20px;\n  max-height: 240px;\n\n  background-color: var(--card);\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.weatherInfoIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#location {\n  max-width: 700px;\n  white-space: nowrap;\n  overflow-x: auto;\n  \n  font-size: 30px;\n}\n\n#temperature {\n  font-size: 100px;\n}\n\n#weatherIcon {\n  width: 90px;\n  height: 90px;\n}\n\n.weatherDetailsContainer {\n  grid-area: 3 / 1 / 4 / 2;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  height: 150px;\n  padding: 20px;\n\n  background-color: var(--card);\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.weatherDetails {\n  display: flex;\n  gap: 20px;\n}\n\n.weatherDetails p {\n  font-size: 20px;\n}\n\n.weatherDetailsIcon {\n  width: 40px;\n  height: 40px;\n\n  filter: invert(28%);\n}\n\n.hourlyForecastContainer {\n  grid-area: 4 / 1 / 5 / 2;\n\n  display: flex;\n  justify-content: space-around;\n\n  padding: 20px;\n\n  background-color: var(--card);\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.hourlyForecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.hourlyForecast img{\n  width: 60px;\n  height: 60px;\n}\n\n.hourlyForecastTemperature {\n  font-size: 30px;\n}\n\n.dailyForecastContainer {\n  grid-area: 1 / 2 / 5 / 3;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  padding: 20px;\n\n  background-color: var(--card);\n  border-radius: 0.5rem;\n  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.dailyForecast {\n  display: grid;\n  grid-template-columns: 2fr 3fr 20%;\n  align-items: center;\n  gap: 20px;\n\n  padding-left: 10px;\n}\n\n.dailyForecastDay {\n  font-weight: 900;\n}\n\n.conditionContainer {\n  display: flex;\n  align-items: center;\n}\n\n.watermark {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.githubLogo {\n  width: 20px;\n  height: 20px;\n}\n\n/* Scrollbar styling */\n::-webkit-scrollbar {\n  width: 5px; /* Set the width of the scrollbar */\n  height: 5px;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #ebebeb; /* Set the color of the thumb (scrollable area) */\n  border-radius: 6px; /* Round the corners of the thumb */\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #acacac; /* Change the color on hover */\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst getWeatherData = async (location) => {\n  const response = await fetch(\n    `http://api.weatherapi.com/v1/forecast.json?key=195eeb5762ae44fab22142534232908&q=${location}&days=7`,\n    { mode: 'cors' },\n  );\n\n  if (response.status === 200) {\n    let json = await response.json();\n    let processedData = processData(json);\n\n    // Debugging purposes\n    console.log(json);\n    console.log(processedData);\n\n    displayData(processedData);\n\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeErrorMsg)();\n  } else {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.throwErrorMsg)();\n    throw new Error('Failed to fetch data');\n  }\n};\n\nconst processData = (weatherData) => {\n\n  /**\n   * Grab all the data and I want to display on the page\n   * This data is for the current day\n   *  */ \n  const myData = {\n    condition: weatherData.current.condition.text,\n    feelsLike: {\n      c: `${weatherData.current.feelslike_c}°C`,\n      f: `${weatherData.current.feelslike_f} ℉`,\n    },\n    currentTemp: {\n      c: `${weatherData.current.temp_c}°C`,\n      f: `${weatherData.current.temp_f} ℉`,\n    },\n    wind: `${weatherData.current.wind_kph} km/h`,\n    humidity: `${weatherData.current.humidity} %`,\n    location: `${weatherData.location.name.toUpperCase()}, ${weatherData.location.country.toUpperCase()}`,\n    time: new Date(weatherData.location.localtime),\n    chanceToRain: `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain} %`,\n    isDay: weatherData.current.is_day,\n    icon: weatherData.current.condition.icon,\n\n  /**\n   * This data is the current day's forecast\n   *  */ \n    forecastDay: weatherData.forecast.forecastday[0].hour,\n    forecastNextDay: weatherData.forecast.forecastday[1].hour,\n\n  /**\n   * This data is the forecast for the entire week\n   */\n    forecastWeek: weatherData.forecast.forecastday,\n\n  };\n\n  return myData;\n};\n\nconst displayData = (processedData) => {\n\n  // Weather description\n  document.querySelector('#description').textContent = processedData.condition;\n  document.querySelector('#location').textContent = processedData.location;\n  document.querySelector('#temperature').textContent = processedData.currentTemp.c;\n  document.querySelector('#date').textContent = processedData.time.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });\n\n  // Weather details\n  document.querySelector('#feelsLike').textContent = processedData.feelsLike.c;\n  document.querySelector('#humidity').textContent = processedData.humidity;\n  document.querySelector('#chanceOfRain').textContent = processedData.chanceToRain;\n  document.querySelector('#windSpeed').textContent = processedData.wind;\n\n  // Condition Icon\n  const absoluteUrl = `https:${processedData.icon}`;\n  document.querySelector('#weatherIcon').src = absoluteUrl;\n\n  // Hourly forecast for current day\n  const forecastStartTime = new Date(processedData.time).getHours();\n  let forecastEndTime = forecastStartTime + 6;\n\n  if (forecastEndTime > 24 || forecastEndTime === 24) {\n    const remainingTime = forecastEndTime - 24;\n    const indexLeftOff = 6 - (remainingTime + 1);\n\n    for (let i = forecastStartTime, elementIndex = 0; i < 24; i++, elementIndex++){\n      const nextHour = (i + 1) % 24;\n\n      if (nextHour !== 0) {\n        const forecastedTime = processedData.forecastDay[nextHour];\n        const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');\n\n        document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;\n        document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;\n        document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c}°C`;\n\n      } else if (nextHour === 0){\n        const forecastedTime = processedData.forecastNextDay[nextHour];\n        const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');\n\n        document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;\n        document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;\n        document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c}°C`;\n      }\n    }\n\n    for (let i = 1 ; i < remainingTime + 1; i++) {\n      let nextDayIndex = indexLeftOff + i;\n\n      const forecastedTime = processedData.forecastNextDay[i];\n      const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');\n      \n      document.querySelector(`#hourlyForecastTime${nextDayIndex}`).textContent = `${forecastedHour}00`;\n      document.querySelector(`#hourlyForecastIcon${nextDayIndex}`).src = `https:${forecastedTime.condition.icon}`;\n      document.querySelector(`#hourlyForecastTemperature${nextDayIndex}`).textContent = `${forecastedTime.temp_c}°C`;\n    }\n\n  } else {\n    for (let i = forecastStartTime, elementIndex = 0; i < forecastEndTime; i++, elementIndex++) {\n      const nextTime = i + 1;\n\n      const forecastedTime = processedData.forecastDay[nextTime];\n      const forecastedHour = String(new Date(forecastedTime.time).getHours()).padStart(2, '0');\n\n      document.querySelector(`#hourlyForecastTime${elementIndex}`).textContent = `${forecastedHour}00`;\n      document.querySelector(`#hourlyForecastIcon${elementIndex}`).src = `https:${forecastedTime.condition.icon}`;\n      document.querySelector(`#hourlyForecastTemperature${elementIndex}`).textContent = `${forecastedTime.temp_c}°C`;\n    }\n  }\n\n  // Daily forecast for current day and next 6 days\n  const daysArray = [];\n  for (let i = 0; i < 7; i++) {\n    daysArray.push(processedData.forecastWeek[i]);\n  }\n\n  // For debugging purposes\n  //console.log(daysArray);\n\n  for (let i = 0; i < daysArray.length; i++) {\n    const date = new Date(daysArray[i].date);\n\n    // Get the day name\n    const dayName = date.toLocaleDateString('en-US', {weekday: 'short'});\n\n    // Change the first day's name to 'Today', display the next 6 days normally\n    if ( i !== 0) {\n      document.querySelector(`#dailyForecastDay${i}`).textContent = dayName;\n    } else if ( i === 0) {\n      document.querySelector(`#dailyForecastDay${i}`).textContent = 'Today';\n    }\n\n    document.querySelector(`#dailyForecastIcon${i}`).src = `https:${daysArray[i].day.condition.icon}`;\n    document.querySelector(`#condition${i}`).textContent = daysArray[i].day.condition.text;\n    document.querySelector(`#temperatureMin${i}`).textContent = `${daysArray[i].day.mintemp_c}° C`;\n    document.querySelector(`#temperatureMax${i}`).textContent = `${daysArray[i].day.maxtemp_c}° C`;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDailyForecast: () => (/* binding */ createDailyForecast),\n/* harmony export */   createHourlyForecast: () => (/* binding */ createHourlyForecast),\n/* harmony export */   createSearch: () => (/* binding */ createSearch),\n/* harmony export */   createWeatherDetails: () => (/* binding */ createWeatherDetails),\n/* harmony export */   createWeatherInfo: () => (/* binding */ createWeatherInfo),\n/* harmony export */   removeErrorMsg: () => (/* binding */ removeErrorMsg),\n/* harmony export */   throwErrorMsg: () => (/* binding */ throwErrorMsg),\n/* harmony export */   watermark: () => (/* binding */ watermark)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _images_githublogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/githublogo.png */ \"./src/images/githublogo.png\");\n\n\n\n\nconst content = document.querySelector('.content');\n\nconst createWeatherInfo = () => {\n  const weatherInfo = document.createElement('div');\n  weatherInfo.classList.add('weatherInfo');\n  const weatherInfoDetails = document.createElement('div');\n  weatherInfoDetails.classList.add('weatherInfoDetails');\n  const weatherInfoIcon = document.createElement('div');\n  weatherInfoIcon.classList.add('weatherInfoIcon');\n\n  // Create weather decription\n  const description = document.createElement('h2');\n  description.setAttribute('id', 'description');\n\n  // Create location\n  const location = document.createElement('h1');\n  location.setAttribute('id', 'location');\n\n  // Create date\n  const date = document.createElement('p');\n  date.setAttribute('id', 'date');\n\n  // Create temperature\n  const temperature = document.createElement('p');\n  temperature.setAttribute('id', 'temperature');\n\n  // Create icon\n  const icon = document.createElement('img');\n  icon.setAttribute('id', 'weatherIcon');\n\n  weatherInfoDetails.appendChild(location);\n  weatherInfoDetails.appendChild(temperature);\n  weatherInfoDetails.appendChild(date);\n  weatherInfoIcon.appendChild(icon);\n  weatherInfoIcon.appendChild(description);\n  weatherInfo.appendChild(weatherInfoDetails);\n  weatherInfo.appendChild(weatherInfoIcon);\n\n  content.appendChild(weatherInfo);\n};\n\nconst createSearch = () => {\n  const search = document.createElement('div');\n\n  // Create search input\n  const searchForm = document.createElement('form');\n  searchForm.classList.add('searchForm');\n  const searchInput = document.createElement('input');\n  searchInput.classList.add('searchBar');\n  searchInput.placeholder = 'Search for country, city, etc.'\n  searchInput.setAttribute = ('type', 'text');\n  const errorMsg = document.createElement('span');\n  errorMsg.classList.add('errorMsg', 'errorMsgHidden');\n  errorMsg.textContent = 'No matching location found!';\n\n  searchForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const location = searchInput.value;\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location);\n    searchForm.reset();\n  });\n\n  searchForm.appendChild(searchInput);\n  searchForm.appendChild(errorMsg);\n\n  search.appendChild(searchForm);\n\n  content.appendChild(searchForm);\n};\n\nconst createWeatherDetails = (details) => {\n  const weatherDetailsContainer = document.createElement('div');\n  weatherDetailsContainer.classList.add('weatherDetailsContainer');\n\n  // Create and append weather details\n  for (let i = 0; i < details.length; i++) {\n    const weatherDetails = document.createElement('div');\n    weatherDetails.classList.add('weatherDetails');\n    const icon = document.createElement('img');\n    icon.src = details[i].iconSrc;\n    icon.classList.add('weatherDetailsIcon');\n\n    const weatherDetailsInfo = document.createElement('weatherDetailsInfo');\n    const label = document.createElement('h3');\n    label.textContent = details[i].label;\n    const data = document.createElement('p');\n    data.setAttribute('id', details[i].name);\n    data.textContent = details[i].data;\n\n    weatherDetails.appendChild(icon);\n    weatherDetailsInfo.appendChild(label);\n    weatherDetailsInfo.appendChild(data);\n    weatherDetails.appendChild(weatherDetailsInfo);\n    weatherDetailsContainer.appendChild(weatherDetails);\n  }\n\n  content.appendChild(weatherDetailsContainer);\n};\n\nconst createHourlyForecast = () => {\n  const hourlyForecastContainer = document.createElement('div');\n  hourlyForecastContainer.classList.add('hourlyForecastContainer');\n\n  // Create and append weather forecast for next 6 hours\n  for (let i = 0; i < 6; i++) {\n    const card = document.createElement('div');\n    card.classList.add('hourlyForecast');\n\n    const time = document.createElement('p');\n    time.setAttribute('id', `hourlyForecastTime${i}`);\n    const icon = document.createElement('img');\n    icon.setAttribute('id', `hourlyForecastIcon${i}`);\n    const temperature = document.createElement('p');\n    temperature.classList.add('hourlyForecastTemperature');\n    temperature.setAttribute('id', `hourlyForecastTemperature${i}`);\n\n    card.appendChild(time);\n    card.appendChild(icon);\n    card.appendChild(temperature);\n\n    hourlyForecastContainer.appendChild(card);\n  }\n  content.appendChild(hourlyForecastContainer);\n};\n\nconst createDailyForecast = () => {\n  const dailyForecastContainer = document.createElement('div');\n  dailyForecastContainer.classList.add('dailyForecastContainer');\n\n  // Create and append daily forecast elements for today + next 6 days\n  for (let i = 0; i < 7; i++) {\n    const card = document.createElement('div');\n    card.classList.add('dailyForecast');\n\n    const day = document.createElement('p');\n    day.classList.add('dailyForecastDay');\n    day.setAttribute('id', `dailyForecastDay${i}`);\n\n    const conditionContainer = document.createElement('div');\n    conditionContainer.classList.add('conditionContainer');\n    const icon = document.createElement('img');\n    icon.setAttribute('id', `dailyForecastIcon${i}`);\n    const condition = document.createElement('p');\n    condition.setAttribute('id', `condition${i}`);\n\n    const temperatureContainer = document.createElement('div');\n    const temperatureMin = document.createElement('p');\n    temperatureMin.setAttribute('id', `temperatureMin${i}`);\n    const temperatureMax = document.createElement('p');\n    temperatureMax.setAttribute('id', `temperatureMax${i}`);\n\n    conditionContainer.appendChild(icon);\n    conditionContainer.appendChild(condition);\n    temperatureContainer.appendChild(temperatureMin);\n    temperatureContainer.appendChild(temperatureMax);\n\n    card.appendChild(day);\n    card.appendChild(conditionContainer);\n    card.appendChild(temperatureContainer);\n\n    dailyForecastContainer.appendChild(card);\n  }\n  content.appendChild(dailyForecastContainer);\n}\n\nconst throwErrorMsg = () => {\n  const error = document.querySelector('.errorMsg');\n  error.classList.add('errorMsgActive');\n  error.classList.remove('errorMsgHidden');\n}\n\nconst removeErrorMsg = () => {\n  const error = document.querySelector('.errorMsg');\n  error.classList.remove('errorMsgActive');\n  error.classList.add('errorMsgHidden');\n}\n\nconst watermark = () => {\n  const container = document.createElement('div');\n  container.classList.add('watermark');\n  const madeByText = document.createTextNode('Made by: ');\n\n  const link = document.createElement('a');\n  link.href = 'https://github.com/damiangohrh123';\n\n  const logo = document.createElement('img');\n  logo.classList.add('githubLogo');\n  logo.src = _images_githublogo_png__WEBPACK_IMPORTED_MODULE_1__;\n  logo.alt = 'git hub logo';\n\n  const name = document.createTextNode(' Damian');\n\n  link.appendChild(logo);\n  link.appendChild(name);\n\n  container.appendChild(madeByText);\n  container.appendChild(link);\n\n  content.appendChild(container);\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/rain.png */ \"./src/images/rain.png\");\n/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/humidity.png */ \"./src/images/humidity.png\");\n/* harmony import */ var _images_thermometer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/thermometer.png */ \"./src/images/thermometer.png\");\n/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/wind.png */ \"./src/images/wind.png\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n// Import css styles\n\n\n// Import src\n\n\n\n\n\n// Import functions\n\n\n\nconst weatherDetails = [\n  {\n    name: 'feelsLike',\n    iconSrc: _images_thermometer_png__WEBPACK_IMPORTED_MODULE_3__,\n    label: 'Feels like',\n    data: '32 C',\n  },\n  {\n    name: 'humidity',\n    iconSrc: _images_humidity_png__WEBPACK_IMPORTED_MODULE_2__,\n    label: 'Humidity',\n    data: '61 %',\n  },\n  {\n    name: 'chanceOfRain',\n    iconSrc: _images_rain_png__WEBPACK_IMPORTED_MODULE_1__,\n    label: 'Chance of rain',\n    data: '6 %',\n  },\n  {\n    name: 'windSpeed',\n    iconSrc: _images_wind_png__WEBPACK_IMPORTED_MODULE_4__,\n    label: 'Wind speed',\n    data: '18.5 km/h',\n  },\n];\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.createSearch)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.createWeatherInfo)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.createWeatherDetails)(weatherDetails);\n(0,_api__WEBPACK_IMPORTED_MODULE_6__.getWeatherData)('singapore');\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.createHourlyForecast)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.createDailyForecast)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_5__.watermark)();\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Lato-Light.woff":
/*!***********************************!*\
  !*** ./src/fonts/Lato-Light.woff ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b714fc19cef4b0adea0.woff\";\n\n//# sourceURL=webpack://weatherapp/./src/fonts/Lato-Light.woff?");

/***/ }),

/***/ "./src/images/githublogo.png":
/*!***********************************!*\
  !*** ./src/images/githublogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ffa70286205754fefa7e.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/githublogo.png?");

/***/ }),

/***/ "./src/images/humidity.png":
/*!*********************************!*\
  !*** ./src/images/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fa55e43b0d65b99a3fa.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/humidity.png?");

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bea5abbc5600fe7f5cfb.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/rain.png?");

/***/ }),

/***/ "./src/images/thermometer.png":
/*!************************************!*\
  !*** ./src/images/thermometer.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f74c9084e0edb6145852.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/thermometer.png?");

/***/ }),

/***/ "./src/images/wind.png":
/*!*****************************!*\
  !*** ./src/images/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e0536af103392aba3b6.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/wind.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;