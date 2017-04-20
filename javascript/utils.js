import Promise from 'es6-promise';

export const loadVideoFromURL = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
}
export const playVideoElement = (videoElement) => {
  return new Promise((resolve)=> {
    videoElement.addEventListener("ended", resolve);
    videoElement.play();
  });
}

export const loadBackgroundImage = (imageSrc) => {
  let contentBack = $(".content-container").parent().get(0);
  return new Promise((resolve, reject) => {
    let imageLoader = new Image();
    imageLoader.onload = function() {
      contentBack.style.backgroundImage = "url('" + imageSrc + "')";
      resolve();
    }
    imageLoader.onerror = reject;
    imageLoader.src = imageSrc;
  });
}
