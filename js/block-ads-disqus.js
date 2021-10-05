const disqus = jQuery('#disqus_thread');
disqus.ready(function() {
  setTimeout(function() {
    if (disqus.children().length >= 3) {
      const comments = disqus.find('iframe:nth-child(2)').detach();
      disqus.empty().append(comments);
    }
  }, 2000);
});
