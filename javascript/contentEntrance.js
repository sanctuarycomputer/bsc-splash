let startAt = 0;

export default (mobile = false) => {
  if (mobile) {
    setTimeout(() => {
      $('.text-1').addClass('ready');
    }, startAt);

    setTimeout(() => {
      $('.text-2').addClass('ready');
    }, startAt);

    setTimeout(() => {
      $('.text-3').addClass('ready');
    }, startAt);

    setTimeout(() => {
      $('.logo').addClass('ready');
    }, startAt);

    setTimeout(() => {
      $('form').addClass('ready');
    }, startAt + 600);

    setTimeout(() => {
      $('form label').addClass('ready');
    }, startAt + 600);
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
