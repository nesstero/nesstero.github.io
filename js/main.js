(function ($) {
    "use strict";
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
})(jQuery);

const disqus = jQuery('#disqus_thread');

disqus.ready(function() {
  setTimeout(function() {
    if (disqus.children().length >= 3) {
      const comments = disqus.find('iframe:nth-child(2)').detach();
      disqus.empty().append(comments);
    }
  }, 2000);
});

