import preloader from './preloader';
import mobilePreloader from './mobilePreloader';
import mailShrimp from './mailshrimp';
import sharers from './sharers';

$(document).ready(function (){
  if (window.location.pathname === "/thanks/" || window.location.pathname === "/thanks") {
    sharers();
  } else {
    mailShrimp();
    if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      mobilePreloader();
    } else{
      preloader();
    }
  }
});
