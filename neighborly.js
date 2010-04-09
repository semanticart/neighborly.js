Object.extend(Array.prototype, {
  selectByVerticalPosition : function(filter){
    var currentScrollPosition = document.viewport.getScrollOffsets()[1];
    return this.map(
      function(element){
        if (filter(element, currentScrollPosition)){
          return element;
        }
      }
    ).compact();
  },

  nextYNeighbor : function(){
    var docHeight = (document.height || document.body.scrollHeight);
    var winHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
    return this.selectByVerticalPosition(function(element, currentScrollPosition){
      return docHeight > (currentScrollPosition + winHeight) && Element.cumulativeOffset(element)[1] > currentScrollPosition;
    }).first();
  },

  previousYNeighbor : function(){
    return this.selectByVerticalPosition(function(element, currentScrollPosition){
      return Element.cumulativeOffset(element)[1] < currentScrollPosition;
    }).last();
  },

  scrollToNeighbor : function(elem, otherwiseFunction){
    if (elem){
      elem.scrollTo();
      return true;
    }
    return (otherwiseFunction ? otherwiseFunction() : false);
  },

  scrollToPreviousYNeighbor : function(otherwiseFunction){
    return this.scrollToNeighbor(this.previousYNeighbor(), otherwiseFunction);
  },

  scrollToNextYNeighbor : function(otherwiseFunction){
    return this.scrollToNeighbor(this.nextYNeighbor(), otherwiseFunction);
  }
});
