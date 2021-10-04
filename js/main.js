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

document.addEventListener('DOMContentLoaded', function () {
    let disqus = document.getElementById('disqus_thread');

    let remove_ads = setInterval(() => {
        let iframes = document.getElementsByTagName('iframe');

        for (var iframe in iframes) {
            if (typeof iframes[iframe].src === 'undefined') {
                continue;
            }

            if (iframes[iframe].src.match(/(ads-iframe)|(disqusads)/gi)) {
                iframes[iframe].style.display = 'none';
                disqus.style.width = '100%';
            }
        }
    }, 500);

    setTimeout(function () {
        clearInterval(remove_ads);
    }, 5000);
});
