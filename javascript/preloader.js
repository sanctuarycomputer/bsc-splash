import { outInterval, pageLoaded }  from './loader';
import { loadVideoFromURL, playVideoElement } from './utils';
import initCoverVideo from './initCoverVideo';

let loopingVideoLoaded = false;
let introVideoFinished = false;
let loader = document.querySelector(".loader")
let content = document.getElementById("content-wrap")
let introVideo = document.getElementById("background-video-intro")
let url = introVideo.src;
let introVideoWrap = document.getElementById("background-video-wrap-intro")
let introVideoElement = document.getElementById("video-element-intro")

let loopVideo = document.getElementById("background-video-loop")
let loopVideoWrap = document.getElementById("background-video-wrap-loop")
let loopVideoElement = document.getElementById("video-element-loop")
let loopURL = loopVideo.src;

initCoverVideo();

function maybeStartVideoLoop(){
  if (loopingVideoLoaded && introVideoFinished) {
    playVideoElement(loopVideoElement);
  }
}
export default function preloader() {
  outInterval();
  loadVideoFromURL(url).then(function(){
    pageLoaded().then(function(){
      loader.classList.add('vid-loaded');
      introVideoWrap.classList.add('loaded');
      playVideoElement(introVideoElement).then(function(){
        introVideoFinished = true;
        loopVideoWrap.classList.add('loaded');
        introVideoWrap.classList.remove('loaded');
        maybeStartVideoLoop();
        content.classList.add('loaded');
      });
    });
  });
  loadVideoFromURL(loopURL).then(function(){
    loopingVideoLoaded = true;
    maybeStartVideoLoop();
  });
}
