/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_index_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_Arrow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__script_Clock_js__ = __webpack_require__(3);




const clockArrowsTypes = ['hour', 'minute', 'second'],
    clockHTML = document.getElementById('clock'),
    clockArrows = clockArrowsTypes.map(arrowType => new __WEBPACK_IMPORTED_MODULE_1__script_Arrow_js__["a" /* default */](arrowType));

const clock = new __WEBPACK_IMPORTED_MODULE_2__script_Clock_js__["a" /* default */](clockHTML, clockArrows);

clock.init();

setInterval(clock.update.bind(clock), 1000)

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Arrow {
    static get classList() {
        return {
            main: 'clock__arrow'
        }
    }

    constructor(type) {
        this.type = type;
    }

    get template() {
        const arrow = document.createElement('div');

        arrow.setAttribute('class', `${Arrow.classList.main} ${Arrow.classList.main}--${this.type}`);
        this.arrowHTML = arrow;

        return arrow;
    }

    move(time) {
        this.arrowHTML.style.transform = this.createTransformProp(time);
    }

    createTransformProp(degs) {
        return `translate(-50%, -50%) rotate(${degs}deg)`;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Arrow);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(4);


class Clock {
    constructor(clockHTML, arrows) {
        this.clockHTML = clockHTML;
        this.clockArrows = arrows;
    }

    init() {
        this.clockArrows
            .forEach(arrow => this.clockHTML.appendChild(arrow.template))

        this.update();
    }

    
    update() {
        const date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            timeInDegrees = Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* timeToDegrees */])(hours, minutes, seconds);

        Object.values(timeInDegrees)
            .forEach((time, index) => this.clockArrows[index].move(time));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Clock;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = timeToDegrees;
const timeConstants = {
    oneHourInDegrees: 30,
    oneSecondInDegrees: 6,
    oneMinuteInDegrees: 6
};

function timeToDegrees(hours = 0, minutes = 0, seconds = 0) {
    const {oneHourInDegrees, oneSecondInDegrees, oneMinuteInDegrees} = timeConstants,
        hoursDegrees = (hours % 12 || 12) * oneHourInDegrees,
        minutesDegrees = minutes * oneMinuteInDegrees,
        secondsDegrees = seconds * oneSecondInDegrees;

    return {
        hoursDegrees: hoursDegrees + (minutes / 2),
        minutesDegrees: Math.floor(minutesDegrees + (secondsDegrees / (60 * 100))),
        secondsDegrees
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.app.js.map