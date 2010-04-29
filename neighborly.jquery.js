(function( $ ){
  function selectByVerticalPosition(elements, filter){
    var currentScrollPosition = $(window).scrollTop();
    return elements.map(
      function(){
        var element = $(this);
        if (filter(element, currentScrollPosition)){
          return element;
        }
      }
    );
  };

  $.fn.nextYNeighbor = function(){
    var docHeight = (document.height || document.body.scrollHeight);
    var winHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    var matching = selectByVerticalPosition(this, function(element, currentScrollPosition){
      return docHeight > (currentScrollPosition + winHeight) && element.offset().top > currentScrollPosition;
    }).toArray().shift()

    if (matching){
      return matching[0];
    }
  };

  $.fn.previousYNeighbor = function(){
    var matching = selectByVerticalPosition(this, function(element, currentScrollPosition){
      return element.offset().top < currentScrollPosition;
    }).toArray().pop();

    if (matching){
      return matching[0];
    }
  };

  $.fn.scrollToNeighbor = function(elem, otherwiseFunction){
    if (elem){
      $(elem).scrollTo();
      return true;
    }
    return (otherwiseFunction ? otherwiseFunction() : false);
  };

  $.fn.scrollToPreviousYNeighbor = function(otherwiseFunction){
    return this.scrollToNeighbor(this.previousYNeighbor(), otherwiseFunction);
  };

  $.fn.scrollToNextYNeighbor = function(otherwiseFunction){
    return this.scrollToNeighbor(this.nextYNeighbor(), otherwiseFunction);
  };

  $.fn.scrollTo = function(){
    $(window).scrollTop(this.offset().top);
  }
})( jQuery );
