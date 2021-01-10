// count only once
var doCount = true;

function lnum(){
  jQuery('.num-text').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});
  
}

// count only if it is in view
jQuery(window).scroll(function() {
    var top_of_element = jQuery(".number-section").offset().top;
    var bottom_of_element = jQuery(".number-section").offset().top + jQuery(".number-section").outerHeight();
    var bottom_of_screen = jQuery(window).scrollTop() + jQuery(window).innerHeight();
    var top_of_screen = jQuery(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      if(doCount){
       lnum();
       doCount = false;
      }
    } else {
        // the element is not visible, do something else
    }
});
