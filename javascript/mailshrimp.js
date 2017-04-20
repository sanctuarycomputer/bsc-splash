import sweetalert from 'sweetalert'

export default function mailShrimp() {

  $('.mailchimp-form').ajaxChimp({
    url: '//bakingsupply.us15.list-manage.com/subscribe/post?u=4f4fea5283e41f77342964432&amp;id=961be535b5',
    callback({ msg, result }) {
      $('.mailchimp-form input').val('');
      if (result !== "success") {
        sweetalert({
          title: "Something went wrong - please try again.",
          animation: 'slide-from-top',
          showConfirmButton: false,
          timer: 3500,
          customClass: 'custom-modal'
        });
        return;
      }
      sweetalert({
        title: "Check your email for a link to our Super Secret Herbal Butter Recipe.",
        animation: 'slide-from-top',
        showConfirmButton: false,
        timer: 3500,
        customClass: 'custom-modal'
      });
    }
  });
}
