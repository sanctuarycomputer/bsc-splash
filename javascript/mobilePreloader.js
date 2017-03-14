import { outInterval, pageLoaded }  from './loader';

let loader = document.querySelector(".loader")
let content = document.getElementById("content-wrap")
let loopVideoWrap = document.getElementById("background-video-wrap-loop")

export default function mobilePreloader() {
  outInterval();
  pageLoaded().then(function(){
    content.classList.add('loaded');
    loader.classList.add('vid-loaded');
    loopVideoWrap.classList.add('loaded');
  });
}
