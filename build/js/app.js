/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styles = __webpack_require__(1);

var WHO = 'Vanilla JS ES6';
var greeter = function greeter(who) {
  return 'Hello from ' + who + '!';
};

var loadJSON = function loadJSON() {
  getJSON('json/brokers.json');
};

var playing = true;
var duration = 10000;
var pauseButton = void 0; // document.getElementById('pause');
var nextButton = void 0;
var prevButton = void 0;
var slides = void 0;

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    (function () {
      //setInterval(nextSlide,duration); // start carousel autoplay

      // go to the next slide
      var nextSlide = function nextSlide() {
        goToSlide(currentSlide + 1);
      };
      // go to the previous slide


      var previousSlide = function previousSlide() {
        goToSlide(currentSlide - 1);
      };
      // go to slide n


      var goToSlide = function goToSlide(n) {
        slides[currentSlide].className = 'item';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'item active';
      };

      // nextButton.addEventListener("click" ,  ()=> {
      //      pauseSlideshow();
      //      nextSlide();
      // });
      // prevButton.addEventListener("click" ,  ()=> {
      //      //pauseSlideshow();
      //      //previousSlide();
      //      //var currentActiveItem = myCarouselInit.getActiveIndex();
      //     // myCarouselInit.slideTo(currentActiveItem+1);
      //
      // });
      // pauseButton.addEventListener("click" ,  ()=> {
      //     if(playing) {
      //     pauseSlideshow();
      //   } else {
      //     playSlideshow();
      //   }
      // });
      // pause the carousel


      var pauseSlideshow = function pauseSlideshow() {
        pauseButton.innerHTML = 'Play';
        playing = false;
        clearInterval(slideInterval);
      };
      // play the carousel


      var playSlideshow = function playSlideshow() {
        pauseButton.innerHTML = 'Pause';
        playing = true;
        slideInterval = setInterval(nextSlide, duration);
      };

      document.getElementById('app').appendChild(document.createTextNode(greeter(WHO)) // add greating Message
      );
      // load JSON Data from local file
      loadJSON();
      slides = []; //document.querySelectorAll('#carousel-inner .item');

      loadVanillaBootstrap();

      // init UI .

      pauseButton = document.getElementById('pause');
      nextButton = document.getElementById('next');
      prevButton = document.getElementById('prev');
      var currentSlide = 0;
      var slideInterval = void 0;
    })();
  }
};

// create carousel items
function createCarouselItem(list) {
  for (var item in list) {
    addItem(list[item], item == 0 ? "active" : "", item);
  }
}
// add Item to carousel
function addItem(data) {
  var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var index = arguments[2];


  var item = document.createElement('div'); // create DOM element
  item.className = "item " + active;

  var image = document.createElement('img');
  image.src = data.links.logo2x;
  image.alt = data.name;
  //image.width = "460" ;
  //image.height = "345";

  var caption = document.createElement('div');
  caption.className = "carousel-caption";
  caption.innerHTML = "<h3>" + data.name + "</h3><p>" + data.location + ".</p><p class='label label-default'>" + data.phone + ".</p>";

  item.appendChild(image);
  item.appendChild(caption);

  document.getElementById('carousel-inner').appendChild(item // add item to DOM Message
  );
  var indicator = document.createElement('li');
  indicator.setAttribute("data-target", "#myCarousel");
  indicator.setAttribute("data-slide-to", index);
  indicator.className = active;
  document.getElementById('carousel-indicators').appendChild(indicator);
}

// get data from JSON FILE
function getJSON(url) {
  'use strict';

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var brokerList = JSON.parse(xhr.responseText);
        console.log(brokerList);
        createCarouselItem(brokerList.data);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}

var loadVanillaBootstrap = function loadVanillaBootstrap() {
  var my_awesome_script = document.createElement('script');
  my_awesome_script.setAttribute('src', 'json/myscript.js');
  document.body.appendChild(my_awesome_script);
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);