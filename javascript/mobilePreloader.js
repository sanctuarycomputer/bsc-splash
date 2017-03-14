import { outInterval, pageLoaded }  from './loader';
import { preloadImages } from './utils';

let loader = document.querySelector(".loader")
let content = document.getElementById("content-wrap")
let loopVideoWrap = document.getElementById("background-video-wrap-loop")
let contentBack = document.querySelector(".content-container")

export default function mobilePreloader() {
  var string = 'static/images/BSC_POSTER.jpg';
  outInterval();
  pageLoaded().then(function(){
    content.classList.add('loaded');
    loader.classList.add('vid-loaded');
    contentBack.style.backgroundImage = "url('" + string + "')";

  });
}
