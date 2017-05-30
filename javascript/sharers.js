function twitShare(winWidth, winHeight) {
  var winTop = (screen.height / 2) - (winHeight / 2);
  var winLeft = (screen.width / 2) - (winWidth / 2);
  return window.open(
    'https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.bakingsupply.co&text=Signup%20for%20Baking%20Supply%20before%20July%20and%20get%2025%25%20off!',
    'sharer', 'top=' + winTop + ',left=' + winLeft +
    ',toolbar=0,status=0,width=' + winWidth +
    ',height=' + winHeight);
}

export default () => {
  $('.fb-share').on('click', function() {
    FB.ui({
      method: 'share',
      href: 'http://www.bakingsupply.co',
    }, function(response){
      if (response) {
        window.location.href = "http://butter.bakingsupply.co";
      }
    });
  });
  $('.twit-share').on('click', function() {
    let popup = twitShare(560, 240);
    let timer = setInterval(function() {
      if (popup.closed) {
        clearInterval(timer);
        window.location.href = "http://butter.bakingsupply.co";
      }
    }, 1000);
  });
}
