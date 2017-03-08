const logo = document.querySelector('.loader');
let loaded = false;
let rotationNum = 0;
let rotationNumNeg = 0;
let goTo = null;
const out = document.getElementById("out");
const inner = document.getElementById("in");
const face = document.getElementById("face");

export function outInterval() {
  if (loaded) return;
  rotationNum += 6;
  rotationNumNeg += -6;
  out.style['transform'] = "rotate("+rotationNum+"deg)";
  out.style['webkitTransform'] = "rotate("+rotationNum+"deg)";
  out.style['mozTransform'] = "rotate("+rotationNum+"deg)";
  face.style['transform'] = "rotate("+rotationNum+"deg)";
  face.style['webkitTransform'] = "rotate("+rotationNum+"deg)";
  face.style['mozTransform'] = "rotate("+rotationNum+"deg)";
  inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
  inner.style['webkitTransform'] = "rotate("+rotationNumNeg+"deg)";
  inner.style['mozTransform'] = "rotate("+rotationNumNeg+"deg)";
  setTimeout(outInterval, 10);
}
export function slowRotation() {
  logo.classList.add('ready');
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
    } else {
      out.style['transform'] = "rotate("+rotationNum+"deg)";
      out.style['webkitTransform'] = "rotate("+rotationNum+"deg)";
      out.style['mozTransform'] = "rotate("+rotationNum+"deg)";
      face.style['transform'] = "rotate("+rotationNum+"deg)";
      face.style['webkitTransform'] = "rotate("+rotationNum+"deg)";
      face.style['mozTransform'] = "rotate("+rotationNum+"deg)";
      inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
      inner.style['webkitTransform'] = "rotate("+rotationNumNeg+"deg)";
      inner.style['mozTransform'] = "rotate("+rotationNumNeg+"deg)";
      setTimeout(slowRotation, 10);
    }
  }
}
 export function pageLoaded() {
  loaded = true;
  slowRotation();
}
