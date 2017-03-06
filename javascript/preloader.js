export default function preloader() {
  var video = document.getElementById("background-video")
  var videowrap = document.getElementById("background-video-wrap")
  var url = "Some video url"
  var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(oEvent) {
      var blob = new Blob([oEvent.target.response], {type: "video/mp4"});
      video.src = URL.createObjectURL(blob);
      videowrap.classList.add("loaded")
  };
  xhr.send();
}
