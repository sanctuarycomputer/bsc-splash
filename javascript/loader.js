import Promise from 'es6-promise';

const loader = document.querySelector('.loader');
let loaded = false;
let rotationNum = 0;
let rotationNumNeg = 0;
let goTo = null;
const out = document.getElementById("out");
const inner = document.getElementById("in");
const face = document.getElementById("face");

const isTouchScreen = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

export function outInterval() {
  if (loaded) return;
  if (isTouchScreen) {
    $('.loader-graphic').addClass('is-touch-screen');
    return;
  }
  rotationNum += 6;
  rotationNumNeg += -6;
  out.style['transform'] = "rotate("+rotationNum+"deg)";
  face.style['transform'] = "rotate("+rotationNum+"deg)";
  inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
  setTimeout(outInterval, 10);
}

function slowRotation(callback) {
  loader.classList.add('ready');
  if(!goTo) {
    if (rotationNum > 0) {
      goTo = Math.ceil(rotationNum/360) * 360;
    } else if (rotationNum < 0) {
      goTo = Math.floor(rotationNum/360) * 360;
    } else {
      goTo = 360;
    }
  }
  if (rotationNum != goTo) {
    let change = Math.min((goTo - rotationNum) * 0.05, 7);
    rotationNum += change;
    rotationNumNeg += -change;
    if (Math.abs(rotationNum - goTo) < 1) {
      out.style['transform'] = "rotate("+rotationNum+"deg)";
      inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
      face.style['transform'] = "rotate("+rotationNum+"deg)";
      callback();
    } else {
      out.style['transform'] = "rotate("+rotationNum+"deg)";
      face.style['transform'] = "rotate("+rotationNum+"deg)";
      inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
      setTimeout(function() {
        slowRotation(callback)
      }, 10);
    }
  }
}

export function pageLoaded() {
  loaded = true;
  return new Promise((resolve) => {
    if (isTouchScreen) return resolve();
    slowRotation(resolve);
  });
}
