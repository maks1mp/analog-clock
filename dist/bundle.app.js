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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./style/index.sass */ 1);\n\nvar _Arrow = __webpack_require__(/*! ./script/Arrow.js */ 2);\n\nvar _Arrow2 = _interopRequireDefault(_Arrow);\n\nvar _Clock = __webpack_require__(/*! ./script/Clock.js */ 3);\n\nvar _Clock2 = _interopRequireDefault(_Clock);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar clockArrowsTypes = ['hour', 'minute', 'second'],\n    clockHTML = document.getElementById('clock'),\n    clockArrows = clockArrowsTypes.map(function (arrowType) {\n    return new _Arrow2.default(arrowType);\n});\n\nvar clock = new _Clock2.default(clockHTML, clockArrows);\n\nclock.init();\n\nsetInterval(clock.update.bind(clock), 1000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGUvaW5kZXguc2Fzcyc7XG5pbXBvcnQgQXJyb3cgZnJvbSAnLi9zY3JpcHQvQXJyb3cuanMnO1xuaW1wb3J0IENsb2NrIGZyb20gJy4vc2NyaXB0L0Nsb2NrLmpzJztcblxuY29uc3QgY2xvY2tBcnJvd3NUeXBlcyA9IFsnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ10sXG4gICAgY2xvY2tIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb2NrJyksXG4gICAgY2xvY2tBcnJvd3MgPSBjbG9ja0Fycm93c1R5cGVzLm1hcChhcnJvd1R5cGUgPT4gbmV3IEFycm93KGFycm93VHlwZSkpO1xuXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jayhjbG9ja0hUTUwsIGNsb2NrQXJyb3dzKTtcblxuY2xvY2suaW5pdCgpO1xuXG5zZXRJbnRlcnZhbChjbG9jay51cGRhdGUuYmluZChjbG9jayksIDEwMDApXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************!*\
  !*** ./src/style/index.sass ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5zYXNzPzY4NzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9pbmRleC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./src/script/Arrow.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Arrow = function () {\n    _createClass(Arrow, null, [{\n        key: 'classList',\n        get: function get() {\n            return {\n                main: 'clock__arrow'\n            };\n        }\n    }]);\n\n    function Arrow(type) {\n        _classCallCheck(this, Arrow);\n\n        this.type = type;\n    }\n\n    _createClass(Arrow, [{\n        key: 'move',\n        value: function move(time) {\n            this.arrowHTML.style.transform = this.createTransformProp(time);\n        }\n    }, {\n        key: 'createTransformProp',\n        value: function createTransformProp(degs) {\n            return 'translate(-50%, -50%) rotate(' + degs + 'deg)';\n        }\n    }, {\n        key: 'template',\n        get: function get() {\n            var arrow = document.createElement('div');\n\n            arrow.setAttribute('class', Arrow.classList.main + ' ' + Arrow.classList.main + '--' + this.type);\n            this.arrowHTML = arrow;\n\n            return arrow;\n        }\n    }]);\n\n    return Arrow;\n}();\n\nexports.default = Arrow;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0L0Fycm93LmpzPzVjMDAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXJyb3cge1xuICAgIHN0YXRpYyBnZXQgY2xhc3NMaXN0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWFpbjogJ2Nsb2NrX19hcnJvdydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgYXJyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke0Fycm93LmNsYXNzTGlzdC5tYWlufSAke0Fycm93LmNsYXNzTGlzdC5tYWlufS0tJHt0aGlzLnR5cGV9YCk7XG4gICAgICAgIHRoaXMuYXJyb3dIVE1MID0gYXJyb3c7XG5cbiAgICAgICAgcmV0dXJuIGFycm93O1xuICAgIH1cblxuICAgIG1vdmUodGltZSkge1xuICAgICAgICB0aGlzLmFycm93SFRNTC5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLmNyZWF0ZVRyYW5zZm9ybVByb3AodGltZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlVHJhbnNmb3JtUHJvcChkZWdzKSB7XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke2RlZ3N9ZGVnKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdC9BcnJvdy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFXQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./src/script/Clock.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _time = __webpack_require__(/*! ./time */ 4);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Clock = function () {\n    function Clock(clockHTML, arrows) {\n        _classCallCheck(this, Clock);\n\n        this.clockHTML = clockHTML;\n        this.clockArrows = arrows;\n    }\n\n    _createClass(Clock, [{\n        key: 'init',\n        value: function init() {\n            var _this = this;\n\n            this.clockArrows.forEach(function (arrow) {\n                return _this.clockHTML.appendChild(arrow.template);\n            });\n\n            this.update();\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            var _this2 = this;\n\n            var date = new Date(),\n                hours = date.getHours(),\n                minutes = date.getMinutes(),\n                seconds = date.getSeconds(),\n                timeInDegrees = (0, _time.timeToDegrees)(hours, minutes, seconds);\n\n            Object.values(timeInDegrees).forEach(function (time, index) {\n                return _this2.clockArrows[index].move(time);\n            });\n        }\n    }]);\n\n    return Clock;\n}();\n\nexports.default = Clock;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0L0Nsb2NrLmpzP2ZjOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0aW1lVG9EZWdyZWVzfSBmcm9tICcuL3RpbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9jayB7XG4gICAgY29uc3RydWN0b3IoY2xvY2tIVE1MLCBhcnJvd3MpIHtcbiAgICAgICAgdGhpcy5jbG9ja0hUTUwgPSBjbG9ja0hUTUw7XG4gICAgICAgIHRoaXMuY2xvY2tBcnJvd3MgPSBhcnJvd3M7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jbG9ja0Fycm93c1xuICAgICAgICAgICAgLmZvckVhY2goYXJyb3cgPT4gdGhpcy5jbG9ja0hUTUwuYXBwZW5kQ2hpbGQoYXJyb3cudGVtcGxhdGUpKVxuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLFxuICAgICAgICAgICAgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgICAgICAgdGltZUluRGVncmVlcyA9IHRpbWVUb0RlZ3JlZXMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXModGltZUluRGVncmVlcylcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0aW1lLCBpbmRleCkgPT4gdGhpcy5jbG9ja0Fycm93c1tpbmRleF0ubW92ZSh0aW1lKSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2NyaXB0L0Nsb2NrLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQXZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************!*\
  !*** ./src/script/time.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.timeToDegrees = timeToDegrees;\nvar timeConstants = {\n    oneHourInDegrees: 30,\n    oneSecondInDegrees: 6,\n    oneMinuteInDegrees: 6\n};\n\nfunction timeToDegrees() {\n    var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n    var oneHourInDegrees = timeConstants.oneHourInDegrees,\n        oneSecondInDegrees = timeConstants.oneSecondInDegrees,\n        oneMinuteInDegrees = timeConstants.oneMinuteInDegrees,\n        hoursDegrees = (hours % 12 || 12) * oneHourInDegrees,\n        minutesDegrees = minutes * oneMinuteInDegrees,\n        secondsDegrees = seconds * oneSecondInDegrees;\n\n\n    return {\n        hoursDegrees: hoursDegrees + minutes / 2,\n        minutesDegrees: Math.floor(minutesDegrees + secondsDegrees / (60 * 100)),\n        secondsDegrees: secondsDegrees\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0L3RpbWUuanM/MzljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aW1lQ29uc3RhbnRzID0ge1xuICAgIG9uZUhvdXJJbkRlZ3JlZXM6IDMwLFxuICAgIG9uZVNlY29uZEluRGVncmVlczogNixcbiAgICBvbmVNaW51dGVJbkRlZ3JlZXM6IDZcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lVG9EZWdyZWVzKGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwKSB7XG4gICAgY29uc3Qge29uZUhvdXJJbkRlZ3JlZXMsIG9uZVNlY29uZEluRGVncmVlcywgb25lTWludXRlSW5EZWdyZWVzfSA9IHRpbWVDb25zdGFudHMsXG4gICAgICAgIGhvdXJzRGVncmVlcyA9IChob3VycyAlIDEyIHx8IDEyKSAqIG9uZUhvdXJJbkRlZ3JlZXMsXG4gICAgICAgIG1pbnV0ZXNEZWdyZWVzID0gbWludXRlcyAqIG9uZU1pbnV0ZUluRGVncmVlcyxcbiAgICAgICAgc2Vjb25kc0RlZ3JlZXMgPSBzZWNvbmRzICogb25lU2Vjb25kSW5EZWdyZWVzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaG91cnNEZWdyZWVzOiBob3Vyc0RlZ3JlZXMgKyAobWludXRlcyAvIDIpLFxuICAgICAgICBtaW51dGVzRGVncmVlczogTWF0aC5mbG9vcihtaW51dGVzRGVncmVlcyArIChzZWNvbmRzRGVncmVlcyAvICg2MCAqIDEwMCkpKSxcbiAgICAgICAgc2Vjb25kc0RlZ3JlZXNcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdC90aW1lLmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQU1BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ })
/******/ ]);