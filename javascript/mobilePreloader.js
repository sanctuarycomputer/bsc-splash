import { outInterval, pageLoaded }  from './loader';
import { loadBackgroundImage } from './utils';
import contentEntrance from './contentEntrance';

let loader = document.querySelector(".loader")
let content = document.getElementById("content-wrap")
let loopVideoWrap = document.getElementById("background-video-wrap-loop")
let contentBack = document.querySelector(".content-container")
var backgroundURL = 'static/images/BSC_POSTER.jpg';

export default function mobilePreloader() {
  //loader.classList.add('vid-loaded');
  //outInterval();
  loadBackgroundImage(backgroundURL).then(function(){
    contentEntrance(true);
    content.classList.add('loaded');
  //  contentEntrance(true);
  //  pageLoaded().then(function(){
  //    content.classList.add('loaded');
  //    loader.classList.add('vid-loaded');
  //  });
  });
}
