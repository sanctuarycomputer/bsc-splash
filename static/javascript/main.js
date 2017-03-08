(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _initCoverVideo = require('./initCoverVideo');

var _initCoverVideo2 = _interopRequireDefault(_initCoverVideo);

var _preloader = require('./preloader');

var _preloader2 = _interopRequireDefault(_preloader);

var _loader = require('./loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  (0, _loader2.default)();
  (0, _preloader2.default)();
  (0, _initCoverVideo2.default)();
});

},{"./initCoverVideo":2,"./loader":3,"./preloader":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initCoverVideo;
function initCoverVideo() {
  $('.covervid-video').coverVid(600, 454);
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;
function loader() {
  var logo = document.querySelector('.loader');
  var loadingTimeout = false;
  var loaded = false;
  var toAdd = 0;
  var started = false;
  var rotationNum = 0;
  var rotationNumNeg = 0;
  var goTo = null;
  var out = document.getElementById("out");
  var inner = document.getElementById("in");
  var face = document.getElementById("face");
  var callback;
  var doFlicker = true;
  // function addLetters(array, el) {
  //   el.innerHTML += array[toAdd];
  //   if (toAdd < array.length - 1) {
  //     toAdd++;
  //     setTimeout(() => addLetters(array, el), 50);
  //   }
  //   else {
  //     toAdd = 0;
  //     // flicker();
  //   }
  // }

  // function flicker() {
  //   var r = Math.random();
  //   if (r > .90) {
  //     loadingEl.style.visibility = 'hidden';
  //     // luarEl.style.visibility = 'hidden';
  //   }
  //   else {
  //     loadingEl.style.visibility = 'visible';
  //     // luarEl.style.visibility = 'visible';
  //   }
  //   if (doFlicker) setTimeout(flicker, 30);
  // }

  function init(_callback) {
    //  addLetters(loadingArr, loadingEl);
    callback = _callback;
    setTimeout(function () {
      revealLoaded();
    }, 4000);
  }
  outInterval();

  function outInterval() {

    if (loaded) return;
    rotationNum += 4;
    rotationNumNeg += -4;

    out.style['transform'] = "rotate(" + rotationNum + "deg)";
    out.style['webkitTransform'] = "rotate(" + rotationNum + "deg)";
    out.style['mozTransform'] = "rotate(" + rotationNum + "deg)";
    face.style['transform'] = "rotate(" + rotationNum + "deg)";
    face.style['webkitTransform'] = "rotate(" + rotationNum + "deg)";
    face.style['mozTransform'] = "rotate(" + rotationNum + "deg)";
    inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
    inner.style['webkitTransform'] = "rotate(" + rotationNumNeg + "deg)";
    inner.style['mozTransform'] = "rotate(" + rotationNumNeg + "deg)";
    setTimeout(outInterval, 10);
  }

  function slowRotation() {
    logo.classList.add('ready');
    if (!goTo) {
      if (rotationNum > 0) {
        goTo = Math.ceil(rotationNum / 360) * 360;
      } else if (rotationNum < 0) {
        goTo = Math.floor(rotationNum / 360) * 360;
      } else {
        goTo = 360;
      }
    }
    if (rotationNum != goTo) {
      var change = Math.min((goTo - rotationNum) * 0.05, 7);
      rotationNum += change;
      if (Math.abs(rotationNum - goTo) < 1) {
        // rotationNum  = goTo;
        out.style['transform'] = "rotate(" + rotationNum + "deg)";
        inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
        face.style['transform'] = "rotate(" + rotationNum + "deg)";

        setTimeout(function () {
          // logo.classList.add('above');
        }, 1000);
        setTimeout(function () {
          //  doFlicker = false;
          if (callback) callback();
        }, 1500);
      } else {
        out.style['transform'] = "rotate(" + rotationNum + "deg)";
        out.style['webkitTransform'] = "rotate(" + rotationNum + "deg)";
        out.style['mozTransform'] = "rotate(" + rotationNum + "deg)";
        face.style['transform'] = "rotate(" + rotationNum + "deg)";
        face.style['webkitTransform'] = "rotate(" + rotationNum + "deg)";
        face.style['mozTransform'] = "rotate(" + rotationNum + "deg)";
        inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
        inner.style['webkitTransform'] = "rotate(" + rotationNumNeg + "deg)";
        inner.style['mozTransform'] = "rotate(" + rotationNumNeg + "deg)";
        setTimeout(slowRotation, 10);
      }
    }
  }

  function revealLoaded() {
    loaded = true;
    // loadingEl.classList.add('hidden-text');
    // setTimeout(function() {
    //   luarEl.classList.remove('hidden-text');
    //   // addLetters(luarArr, luarEl);
    // }, 1000);
    slowRotation();
  }
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preloader;
function preloader() {
  var video = document.getElementById("background-video");
  var loader = document.querySelector(".loader");
  var videowrap = document.getElementById("background-video-wrap");
  var url = video.src;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onload = function (oEvent) {
    var blob = new Blob([oEvent.target.response], { type: "video/mp4" });
    video.src = URL.createObjectURL(blob);
    //loadClassLoader();
    setTimeout(loadClassVideo, 1000);
    function loadClassVideo() {
      videowrap.classList.add("loaded");
    }
    function loadClassLoader() {
      loader.classList.add("vid-loaded");
    }
  };
  xhr.send();
}

},{}]},{},[1]);
