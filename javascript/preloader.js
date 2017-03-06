export default function preloader() {
  let video = document.getElementById("background-video")
  let videowrap = document.getElementById("background-video-wrap")
  let url = video.src
  let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(oEvent) {
      let blob = new Blob([oEvent.target.response], {type: "video/mp4"});
      video.src = URL.createObjectURL(blob);
      videowrap.classList.add("loaded")
    };
  xhr.send();
}
