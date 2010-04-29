Event.observe(window, 'load', function() {
  module( "neighborly.js", {
    setup : function(){
      $('content').show();
    },
    teardown: function(){
      // clean up our test assets
      $('content').hide();
      // and scroll back up
      $('qunit-header').scrollTo();
    }
  });

  test("selectByVerticalPosition returns an array of elements that pass the provided function", function(){
    $('third').scrollTo();
    var matchingElements = $$('.example-scrollable').selectByVerticalPosition(function(e, y){ return Element.cumulativeOffset(e)[1] < y});
    same(matchingElements, [$('first'), $('second')], 'expected elements')
  });

  test("selectByVerticalPosition returns an empty array if no elements pass the provided function", function(){
    $('fourth').scrollTo();
    same($$('.example-scrollable').selectByVerticalPosition(function(e, y){ return Element.cumulativeOffset(e)[1] > y}), [], 'no matching elements');
  });

  test("nextYNeighbor returns neighbor if there is one", function(){
    $('third').scrollTo();
    equals($$('.example-scrollable').nextYNeighbor(), $('fourth'), 'expected neighbor');
  });

  test("nextYNeighbor returns null if there is no neighbor", function(){
    $('fourth').scrollTo();
    equals($$('.example-scrollable').nextYNeighbor(), null, 'expected neighbor');
  });

  test('nextYNeighbor returns null if the end of the document is visible (there is no more scrolling to be done)', function(){
    window.scrollBy(0, (document.height || document.body.clientHeight) - $('fifth').getHeight() - 20);
    equals($$('.example-smallscrollable').nextYNeighbor(), null, 'expected neighbor');
  });

  test("previousYNeighbor returns neighbor if there is one", function(){
    $('third').scrollTo();
    equals($$('.example-scrollable').previousYNeighbor(), $('second'), 'expected neighbor');
  });

  test("previousYNeighbor returns null if there is no neighbor", function(){
    $('first').scrollTo();
    equals($$('.example-scrollable').previousYNeighbor(), null, 'expected neighbor');
  });

  test("scrollToNextYNeighbor scrolls to the next neighbor if there is one", function(){
    $('third').scrollTo();
    var result = $$('.example-scrollable').scrollToNextYNeighbor();
    equals(result, true, 'expected return value');
    equals(document.viewport.getScrollOffsets()[1], Element.cumulativeOffset($('fourth')).last(), 'expected offset');
  });

  test("scrollToNextYNeighbor goes nowhere if there is no neighbor", function(){
    $('fourth').scrollTo();
    var result = $$('.example-scrollable').scrollToNextYNeighbor();
    equals(result, false, "expected return value");
    equals(document.viewport.getScrollOffsets()[1], Element.cumulativeOffset($('fourth')).last(), 'expected offset');
  });

  test("scrollToNextYNeighbor executes provided function if there is no neighbor", function(){
    $('fourth').scrollTo();
    var result = $$('.example-scrollable').scrollToNextYNeighbor(function(){return 4});
    equals(result, 4, "expected otherwiseFunction return value");
  });

  test("scrollToPreviousYNeighbor scrolls to the next neighbor if there is one", function(){
    $('third').scrollTo();
    var result = $$('.example-scrollable').scrollToPreviousYNeighbor();
    equals(result, true, 'expected return value');
    equals(document.viewport.getScrollOffsets()[1], Element.cumulativeOffset($('second')).last(), 'expected offset');
  });

  test("scrollToPreviousYNeighbor goes nowhere if there is no neighbor", function(){
    $('first').scrollTo();
    var result = $$('.example-scrollable').scrollToPreviousYNeighbor();
    equals(result, false, "expected return value");
    equals(document.viewport.getScrollOffsets()[1], Element.cumulativeOffset($('first')).last(), 'expected offset');
  });

  test("scrollToPreviousYNeighbor executes provided function if there is no neighbor", function(){
    $('first').scrollTo();
    var result = $$('.example-scrollable').scrollToPreviousYNeighbor(function(){return 8});
    equals(result, 8, "expected otherwiseFunction return value");
  });
});
