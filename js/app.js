(function() {
  var App;

  App = (function() {
    function App(options) {
      var defaults = {};
      this.options = $.extend(defaults, options);
      this.init();
    }

    App.prototype.init = function(){
      // form submission
      $('#mailing-list-form').submit(function(){
        $(this).hide();
        $('#success').show();
      });

      // more link
      $('.more-link').on('click', function(e){
        e.preventDefault();
        var $link = $(this),
            $infobox = $(this).closest('.infobox'),
            boxHeight = $infobox.height(),
            $more = $infobox.find('.more');
        $link.hide();
        $infobox.css('max-height', boxHeight);
        $more.show();
        $infobox.animate({
          maxHeight: 2000
        }, 1000);
      });
    };

    return App;

  })();

  $(function() {
    return new App({});
  });

}).call(this);
