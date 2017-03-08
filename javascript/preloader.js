import { outInterval, pageLoaded }  from './loader';

export default function preloader() {
  outInterval();
  let video = document.getElementById("background-video")
  let loader = document.querySelector(".loader")
  let videowrap = document.getElementById("background-video-wrap")
  let url = video.src
  let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(oEvent) {
      let blob = new Blob([oEvent.target.response], {type: "video/mp4"});
      video.src = URL.createObjectURL(blob);
      pageLoaded();
      setTimeout(loadClassLoader,2000);
      setTimeout(loadClassVideo,3000);
      function loadClassVideo(){
        videowrap.classList.add("loaded")
      }
      function loadClassLoader(){
        loader.classList.add("vid-loaded")
      }
    };
  xhr.send();
}
