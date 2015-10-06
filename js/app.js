(function() {
  var App;

  App = (function() {
    function App(options) {
      var defaults = {};
      this.options = $.extend(defaults, options);
      this.init();
    }

    App.prototype.init = function(){
      var _this = this;

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

      $('.scroll-to-link').on('click', function(e){
        _this.scrollTo($(this).attr('href'));
      });
    };

    App.prototype.scrollTo = function(id){
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 2000);
    };

    return App;

  })();

  $(function() {
    return new App({});
  });

}).call(this);
