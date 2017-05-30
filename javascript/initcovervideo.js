export function initIntroVideo(){
  let $el = $('.covervid-video-intro');
  if ($el.length) {
    $el.coverVid(1280, 720);
  }
}
export function initLoopVideo(){
  let $el = $('.covervid-video-loop');
  if ($el.length) {
    $el.coverVid(1280, 720);
  }
}
