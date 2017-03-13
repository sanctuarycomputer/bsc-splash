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
    videoElement.load();
    videoElement.play();
  });
}
