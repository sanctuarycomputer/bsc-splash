(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _initCoverVideo = require('./initCoverVideo');

var _initCoverVideo2 = _interopRequireDefault(_initCoverVideo);

var _preloader = require('./preloader');

var _preloader2 = _interopRequireDefault(_preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  (0, _preloader2.default)();
  (0, _initCoverVideo2.default)();
});

},{"./initCoverVideo":2,"./preloader":4}],2:[function(require,module,exports){
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
exports.outInterval = outInterval;
exports.slowRotation = slowRotation;
exports.pageLoaded = pageLoaded;
var logo = document.querySelector('.loader');
var loaded = false;
var rotationNum = 0;
var rotationNumNeg = 0;
var goTo = null;
var out = document.getElementById("out");
var inner = document.getElementById("in");
var face = document.getElementById("face");

function outInterval() {
  if (loaded) return;
  rotationNum += 6;
  rotationNumNeg += -6;
  out.style['transform'] = "rotate(" + rotationNum + "deg)";
  face.style['transform'] = "rotate(" + rotationNum + "deg)";
  inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
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
    rotationNumNeg += -change;
    if (Math.abs(rotationNum - goTo) < 1) {
      out.style['transform'] = "rotate(" + rotationNum + "deg)";
      inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
      face.style['transform'] = "rotate(" + rotationNum + "deg)";
    } else {
      out.style['transform'] = "rotate(" + rotationNum + "deg)";
      face.style['transform'] = "rotate(" + rotationNum + "deg)";
      inner.style['transform'] = "rotate(" + rotationNumNeg + "deg)";
      setTimeout(slowRotation, 10);
    }
  }
}
function pageLoaded() {
  loaded = true;
  slowRotation();
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preloader;

var _loader = require("./loader");

function preloader() {
  (0, _loader.outInterval)();
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
    (0, _loader.pageLoaded)();
    setTimeout(loadClassLoader, 2000);
    setTimeout(loadClassVideo, 3000);
    function loadClassVideo() {
      videowrap.classList.add("loaded");
    }
    function loadClassLoader() {
      loader.classList.add("vid-loaded");
    }
  };
  xhr.send();
}

},{"./loader":3}]},{},[1]);
