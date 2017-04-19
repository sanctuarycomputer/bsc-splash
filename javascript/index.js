import preloader from './preloader';
import mobilePreloader from './mobilePreloader';

$(document).ready(function (){
  if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobilePreloader();
  } else{
    preloader();
  }
});
