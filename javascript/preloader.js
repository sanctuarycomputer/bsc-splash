import { outInterval, pageLoaded }  from './loader';
import { loadVideoFromURL, playVideoElement, loadBackgroundImage } from './utils';
import { initIntroVideo, initLoopVideo } from './initcovervideo';
import contentEntrance from './contentEntrance';
var backgroundURL = 'static/images/BSC_POSTER.jpg';

let loopingVideoLoaded = false;
let introVideoFinished = false;
let loader = document.querySelector(".loader")
let content = document.getElementById("content-wrap")
let introVideo = document.getElementById("background-video-intro")
let url = "static/videos/BSC_INTRO.mp4";
let introVideoWrap = document.getElementById("background-video-wrap-intro")
let introVideoElement = document.getElementById("video-element-intro")

let loopVideo = document.getElementById("background-video-loop")
let loopVideoWrap = document.getElementById("background-video-wrap-loop")
let loopVideoElement = document.getElementById("video-element-loop")
let loopURL = "static/videos/BSC_LOOP.mp4";

if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
}else{
  initIntroVideo();
  initLoopVideo();
}
function maybeStartVideoLoop(){
  if (loopingVideoLoaded && introVideoFinished) {
    playVideoElement(loopVideoElement);
  }
}
export default function preloader() {
  outInterval();
  loadBackgroundImage(backgroundURL);
  loadVideoFromURL(url).then(function(){
    $('.content-wrapper').addClass('has-video');
    pageLoaded().then(function(){
      introVideoElement.src = url;
      loader.classList.add('vid-loaded');
      introVideoWrap.classList.add('loaded');
      contentEntrance();
      playVideoElement(introVideoElement).then(function(){
        introVideoFinished = true;
        loopVideoElement.src = loopURL;
        loopVideoWrap.classList.add('loaded');
        introVideoWrap.classList.remove('loaded');
        maybeStartVideoLoop();
      });
    });
    loadVideoFromURL(loopURL).then(function(){
      loopingVideoLoaded = true;
      maybeStartVideoLoop();
    });
  });
}
