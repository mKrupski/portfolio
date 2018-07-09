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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

console.log('Its working just fine');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    $(".nav__icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    var scrollDistance = $(window).scrollTop();
    if ($(this).position().top <= scrollDistance) {
      $('.nav a.active').removeClass('active');
      $('.nav a').eq(i).addClass('active');
    }
  });
}).scroll();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjdmZGMyNjFlMWFhYmU5MjZjZDQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2FwcC5zY3NzPzQwNjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzLWNvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMtY29tcG9uZW50cy9zY3JvbGwuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxMaW5rIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwiaGFzaCIsIm9mZnNldCIsInRvcCIsInNjcm9sbCIsInNjcm9sbGJhckxvY2F0aW9uIiwiZWFjaCIsInNlY3Rpb25PZmZzZXQiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImkiLCJzY3JvbGxEaXN0YW5jZSIsInBvc2l0aW9uIiwiZXEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFDQTs7QUFDQTs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLHVCQUFaLEU7Ozs7OztBQ0pBLHlDOzs7Ozs7Ozs7QUNBQUMsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJGLE1BQUUsWUFBRixFQUFnQkcsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQ0gsVUFBRSxRQUFGLEVBQVlJLFdBQVosQ0FBd0IsU0FBeEI7QUFDSCxLQUZEO0FBR0gsQ0FKRDs7QUFPQUosRUFBRUssTUFBRixFQUFVRixFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQy9CLFFBQUlILEVBQUVLLE1BQUYsRUFBVUMsU0FBVixFQUFKLEVBQTJCO0FBQ3ZCTixVQUFFLEtBQUYsRUFBU08sUUFBVCxDQUFrQixPQUFsQjtBQUNILEtBRkQsTUFFTztBQUNIUCxVQUFFLEtBQUYsRUFBU1EsV0FBVCxDQUFxQixPQUFyQjtBQUNIO0FBQ0osQ0FORCxFOzs7Ozs7Ozs7QUNQQVIsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7O0FBRTNCLE1BQUlPLGFBQWFULEVBQUUsU0FBRixDQUFqQjs7QUFFQTtBQUNBUyxhQUFXQyxLQUFYLENBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUMzQkEsTUFBRUMsY0FBRjtBQUNBWixNQUFFLFdBQUYsRUFBZWEsT0FBZixDQUF1QjtBQUNyQlAsaUJBQVdOLEVBQUUsS0FBS2MsSUFBUCxFQUFhQyxNQUFiLEdBQXNCQztBQURaLEtBQXZCLEVBRUcsSUFGSDtBQUdELEdBTEQ7O0FBT0E7QUFDQWhCLElBQUVLLE1BQUYsRUFBVVksTUFBVixDQUFpQixZQUFXO0FBQzFCLFFBQUlDLG9CQUFvQmxCLEVBQUUsSUFBRixFQUFRTSxTQUFSLEVBQXhCOztBQUVBRyxlQUFXVSxJQUFYLENBQWdCLFlBQVc7O0FBRXpCLFVBQUlDLGdCQUFnQnBCLEVBQUUsS0FBS2MsSUFBUCxFQUFhQyxNQUFiLEdBQXNCQyxHQUF0QixHQUE0QixFQUFoRDs7QUFFQSxVQUFLSSxpQkFBaUJGLGlCQUF0QixFQUEwQztBQUN4Q2xCLFVBQUUsSUFBRixFQUFRcUIsTUFBUixHQUFpQmQsUUFBakIsQ0FBMEIsUUFBMUI7QUFDQVAsVUFBRSxJQUFGLEVBQVFxQixNQUFSLEdBQWlCQyxRQUFqQixHQUE0QmQsV0FBNUIsQ0FBd0MsUUFBeEM7QUFDRDtBQUNGLEtBUkQ7QUFVRCxHQWJEOztBQWlCQTtBQUNBUixJQUFFLGVBQUYsRUFBbUJtQixJQUFuQixDQUF3QixVQUFTSSxDQUFULEVBQVk7QUFDMUIsUUFBSUMsaUJBQWlCeEIsRUFBRUssTUFBRixFQUFVQyxTQUFWLEVBQXJCO0FBQ1IsUUFBSU4sRUFBRSxJQUFGLEVBQVF5QixRQUFSLEdBQW1CVCxHQUFuQixJQUEwQlEsY0FBOUIsRUFBOEM7QUFDNUN4QixRQUFFLGVBQUYsRUFBbUJRLFdBQW5CLENBQStCLFFBQS9CO0FBQ0FSLFFBQUUsUUFBRixFQUFZMEIsRUFBWixDQUFlSCxDQUFmLEVBQWtCaEIsUUFBbEIsQ0FBMkIsUUFBM0I7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDQXRDRCxFQXNDR1UsTUF0Q0gsRyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjdmZGMyNjFlMWFhYmU5MjZjZDQiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL2Fzc2V0cy9qcy1jb21wb25lbnRzL21lbnUuanMnO1xuaW1wb3J0ICcuL2Fzc2V0cy9qcy1jb21wb25lbnRzL3Njcm9sbC5qcyc7XG5cbmNvbnNvbGUubG9nKCdJdHMgd29ya2luZyBqdXN0IGZpbmUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5uYXZfX2ljb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCJuYXYgdWxcIikudG9nZ2xlQ2xhc3MoXCJzaG93aW5nXCIpO1xuICAgIH0pO1xufSk7XG5cblxuJCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSB7XG4gICAgICAgICQoJ25hdicpLmFkZENsYXNzKCdibGFjaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJ25hdicpLnJlbW92ZUNsYXNzKCdibGFjaycpO1xuICAgIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMtY29tcG9uZW50cy9tZW51LmpzIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgdmFyIHNjcm9sbExpbmsgPSAkKCcuc2Nyb2xsJyk7XHJcbiAgXHJcbiAgLy8gU21vb3RoIHNjcm9sbGluZ1xyXG4gIHNjcm9sbExpbmsuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogJCh0aGlzLmhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgfSwgMTAwMCApO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIEFjdGl2ZSBsaW5rIHN3aXRjaGluZ1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2Nyb2xsYmFyTG9jYXRpb24gPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xyXG4gICAgXHJcbiAgICBzY3JvbGxMaW5rLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgc2VjdGlvbk9mZnNldCA9ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3AgLSAyMDtcclxuICAgICAgXHJcbiAgICAgIGlmICggc2VjdGlvbk9mZnNldCA8PSBzY3JvbGxiYXJMb2NhdGlvbiApIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfSlcclxuICBcclxuICAgIFxyXG5cclxuXHRcdC8vIEFzc2lnbiBhY3RpdmUgY2xhc3MgdG8gbmF2IGxpbmtzIHdoaWxlIHNjb2xsaW5nXHJcblx0XHQkKCcucGFnZS1zZWN0aW9uJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxEaXN0YW5jZSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wb3NpdGlvbigpLnRvcCA8PSBzY3JvbGxEaXN0YW5jZSkge1xyXG5cdFx0XHRcdFx0XHQkKCcubmF2IGEuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHQkKCcubmF2IGEnKS5lcShpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcbn0pLnNjcm9sbCgpO1x0XHJcblx0XHRcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMtY29tcG9uZW50cy9zY3JvbGwuanMiXSwic291cmNlUm9vdCI6IiJ9
