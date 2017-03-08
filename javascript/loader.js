export default function loader() {
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
    setTimeout(function() { revealLoaded() }, 4000);

  }
  outInterval();


  function outInterval() {

    if (loaded) return;
    rotationNum += 4;
    rotationNumNeg += -4;

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


  function slowRotation() {
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
      var change = Math.min((goTo - rotationNum) * 0.05, 7);
      rotationNum += change;
      if (Math.abs(rotationNum - goTo) < 1) {
        // rotationNum  = goTo;
        out.style['transform'] = "rotate("+rotationNum+"deg)";
        inner.style['transform'] = "rotate("+rotationNumNeg+"deg)";
        face.style['transform'] = "rotate("+rotationNum+"deg)";

        setTimeout(function() {
          // logo.classList.add('above');
        }, 1000);
        setTimeout(function() {
        //  doFlicker = false;
          if (callback) callback();
        }, 1500);
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
