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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData),\n/* harmony export */   processData: () => (/* binding */ processData)\n/* harmony export */ });\nconst getWeatherData = async (location) => {\n  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=195eeb5762ae44fab22142534232908&q=${location}`, {mode: 'cors'});\n\n  if (response.status === 200) {\n    let json = await response.json();\n    let processedData = processData(json);\n    console.log(json);\n    console.log(processedData);\n  } else {\n    throw new Error ('Failed to fetch data');\n  }\n}\n\nconst processData = (weatherData) => {\n  // Grab all the data and I want to display on the page\n  const myData = {\n    condition: weatherData.current.condition.text,\n    feelsLike: {\n      c: weatherData.current.feelslike_c,\n      f: weatherData.current.feelslike_f,\n    },\n    currentTemp: {\n      c: weatherData.current.temp_c,\n      f: weatherData.current.temp_f\n    },\n    wind: weatherData.current.wind_kph,\n    humidity: weatherData.current.humidity,\n    location: `${weatherData.location.name.toUpperCase()}, ${weatherData.location.country.toUpperCase()}`,\n    time: weatherData.location.localtime\n  };\n\n  return myData;\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSearch: () => (/* binding */ createSearch),\n/* harmony export */   createWeatherDetails: () => (/* binding */ createWeatherDetails),\n/* harmony export */   createWeatherForecast: () => (/* binding */ createWeatherForecast),\n/* harmony export */   createWeatherInfo: () => (/* binding */ createWeatherInfo)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n\n\nconst content = document.querySelector('.content');\n\nconst createWeatherInfo = () => {\n  const weatherInfo = document.createElement('div');\n\n  // Create weather decription\n  const description = document.createElement('h1');\n  description.textContent = 'Singapore';\n\n  // Create location\n  const location = document.createElement('p');\n  location.textContent = 'Bedok, Singapore';\n\n  // Create date\n  const date = document.createElement('p');\n  date.textContent = new Date();\n\n  // Create temperature\n  const temperature = document.createElement('p');\n  temperature.textContent = '32 C';\n\n  // Create icon\n  const icon = document.createElement('img');\n  icon.src = '';\n  \n  weatherInfo.appendChild(description);\n  weatherInfo.appendChild(location);\n  weatherInfo.appendChild(date);\n  weatherInfo.appendChild(temperature);\n  weatherInfo.appendChild(icon);\n\n  content.appendChild(weatherInfo);\n}\n\nconst createSearch =() => {\n  const search = document.createElement('div');\n\n  // Create search input\n  const searchForm = document.createElement('form');\n  const searchInput = document.createElement('input');\n  searchInput.setAttribute = ('type', 'text');\n\n  searchForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const location = searchInput.value;\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location);\n    searchForm.reset();\n  });\n\n  searchForm.appendChild(searchInput)\n\n  search.appendChild(searchForm);\n\n  content.appendChild(searchForm);\n} \n\nconst createWeatherDetails = (details) => {\n  const weatherDetails = document.createElement('div');\n\n  // Create and append weather details\n  for (let i =0; i < details.length; i++) {\n    const icon = document.createElement('img');\n    const label = document.createElement('p');\n    label.textContent = details[i].label;\n    const data = document.createElement('p');\n    data.textContent = details[i].data;\n\n    weatherDetails.appendChild(icon);\n    weatherDetails.appendChild(label);\n    weatherDetails.appendChild(data);\n  }\n\n  content.appendChild(weatherDetails);\n}\n\nconst createWeatherForecast = () => {\n\n}\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n \n\n/* PLACEHOLDER. WILL BE IN  API.JS LATER */\nconst weatherDetails = [\n  {\n    iconSrc: '',\n    label: 'Feels like',\n    data: '32 C'\n  },\n  {\n    iconSrc: '',\n    label: 'Humidity',\n    data: '61 %'\n  },\n  {\n    iconSrc: '',\n    label: 'Chance of rain',\n    data: '6 %'\n  },\n    {\n    iconSrc: '',\n    label: 'Wind speed',\n    data: '18.5 km/h'\n  }\n]\n\n;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherInfo)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createSearch)();\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createWeatherDetails)(weatherDetails);\n\n\n\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;