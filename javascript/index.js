import preloader from './preloader';
import mobilePreloader from './mobilePreloader';

$(document).ready(function (){
  let isTouchDevice = 'ontouchstart' in document.documentElement;
  if( isTouchDevice ) {
    console.log(isTouchDevice)

    mobilePreloader();
  } else{
    preloader();
  }
});
