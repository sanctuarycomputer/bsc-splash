import preloader from './preloader';
import mobilePreloader from './mobilePreloader';

$(document).ready(function (){
  let isTouchDevice = 'ontouchstart' in document.documentElement;

  if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobilePreloader();
  } else{
    preloader();
  }
});
