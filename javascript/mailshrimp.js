import sweetalert from 'sweetalert'

(function ($) {
  'use strict';
  $.mailchimpSingleOptIn = {
    init: function (selector, options) {
      $(selector).mailchimpSingleOptIn(options);
    }
  };
  $.fn.mailchimpSingleOptIn = function (options) {
    $(this).each(function(i, elem) {
      let form = $(elem);
      let email = form.find('input[type=email]');
      let settings = $.extend({
        onSubmit() {},
        onError() {},
        onSuccess() {}
      }, options);
      form.attr('novalidate', 'true');
      email.attr('name', 'email');
      form.submit(function (e) {
        e.preventDefault();
        let data = { list_id: settings.listID };
        let dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value;
        });
        settings.onSubmit();
        $.ajax({
          method: 'POST',
          url: settings.url,
          data: data,
          success: settings.onSuccess,
          error: settings.onError
        });
      });
    });
    return this;
  };
})(jQuery);

export default function mailShrimp() {
  $('.mailchimp-form').mailchimpSingleOptIn({
    listID: '961be535b5',
    url: 'https://bsc-mailchimp.herokuapp.com/',
    onError(request) {
      let text = request.responseJSON['detail'] || 'Something went wrong - please try again.';
      sweetalert({
        title: text,
        animation: 'slide-from-top',
        showConfirmButton: false,
        timer: 3000,
        customClass: 'custom-modal'
      });
    },
    onSuccess() {
      window.location = 'http://www.bakingsupply.co/thanks/';
    }
  });
}
