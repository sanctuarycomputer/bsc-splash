import preloader from './preloader';
import mobilePreloader from './mobilePreloader';
import mailShrimp from './mailshrimp';

$(document).ready(function (){
  mailShrimp();
  if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobilePreloader();
  } else{
    preloader();
  }
});
