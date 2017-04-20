let startAt = 1825;

export default (mobile = false) => {
  if (mobile) {
    setTimeout(() => {
      $('.text-1').addClass('ready');
    }, startAt);

    setTimeout(() => {
      $('.text-2').addClass('ready');
    }, startAt + 800);

    setTimeout(() => {
      $('.text-3').addClass('ready');
    }, startAt + 1600);

    setTimeout(() => {
      $('.logo').addClass('ready');
    }, startAt + 2500);

    setTimeout(() => {
      $('form').addClass('ready');
    }, startAt + 3500);

    setTimeout(() => {
      $('form label').addClass('ready');
    }, startAt + 4000);
    return;
  }
  setTimeout(() => {
    $('.text-1').addClass('ready');
  }, startAt);

  setTimeout(() => {
    $('.text-2').addClass('ready');
  }, startAt + 1500);

  setTimeout(() => {
    $('.text-3').addClass('ready');
  }, startAt + 3250);

  setTimeout(() => {
    $('.logo').addClass('ready');
  }, startAt + 3250);

  setTimeout(() => {
    $('form').addClass('ready');
  }, startAt + 5000);

  setTimeout(() => {
    $('form label').addClass('ready');
  }, startAt + 6000);
}
