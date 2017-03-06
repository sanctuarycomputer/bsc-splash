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

},{"./initCoverVideo":2,"./preloader":3}],2:[function(require,module,exports){
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
exports.default = preloader;
function preloader() {
  var video = document.getElementById("background-video");
  var videowrap = document.getElementById("background-video-wrap");
  var url = "Some video url";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "arraybuffer";
  xhr.onload = function (oEvent) {
    var blob = new Blob([oEvent.target.response], { type: "video/mp4" });
    video.src = URL.createObjectURL(blob);
    videowrap.classList.add("loaded");
  };
  xhr.send();
}

},{}]},{},[1]);
