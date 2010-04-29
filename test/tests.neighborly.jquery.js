$(document).ready(function() {
  module( "neighborly.js", {
    setup : function(){
      $('#content').show();
    },
    teardown: function(){
      // clean up our test assets
      $('#content').hide();
      // and scroll back up
      $('#qunit-header').scrollTo();
    }
  });

  test("nextYNeighbor returns neighbor if there is one", function(){
    $('#third').scrollTo();
    equals($('.example-scrollable').nextYNeighbor(), $('#fourth')[0], 'expected neighbor');
  });

  test("nextYNeighbor returns null if there is no neighbor", function(){
    $('#fourth').scrollTo();
    equals($('.example-scrollable').nextYNeighbor(), null, 'expected neighbor');
  });

  test('nextYNeighbor returns null if the end of the document is visible (there is no more scrolling to be done)', function(){
    window.scrollBy(0, (document.height || document.body.clientHeight) - $('#fifth').height() - 20);
    equals($('.example-smallscrollable').nextYNeighbor(), null, 'expected neighbor');
  });

  test("previousYNeighbor returns neighbor if there is one", function(){
    $('#third').scrollTo();
    equals($('.example-scrollable').previousYNeighbor(), $('#second')[0], 'expected neighbor');
  });

  test("previousYNeighbor returns null if there is no neighbor", function(){
    $('#first').scrollTo();
    equals($('.example-scrollable').previousYNeighbor(), null, 'expected neighbor');
  });

  test("scrollToNextYNeighbor scrolls to the next neighbor if there is one", function(){
    $('#third').scrollTo();
    var result = $('.example-scrollable').scrollToNextYNeighbor();
    equals(result, true, 'expected return value');
    equals($(window).scrollTop(), $('#fourth').offset().top, 'expected offset');
  });

  test("scrollToNextYNeighbor goes nowhere if there is no neighbor", function(){
    $('#fourth').scrollTo();
    var result = $('.example-scrollable').scrollToNextYNeighbor();
    equals(result, false, "expected return value");
    equals($(window).scrollTop(), $('#fourth').offset().top, 'expected offset');
  });

  test("scrollToNextYNeighbor executes provided function if there is no neighbor", function(){
    $('#fourth').scrollTo();
    var result = $('.example-scrollable').scrollToNextYNeighbor(function(){return 4});
    equals(result, 4, "expected otherwiseFunction return value");
  });

  test("scrollToPreviousYNeighbor scrolls to the next neighbor if there is one", function(){
    $('#third').scrollTo();
    var result = $('.example-scrollable').scrollToPreviousYNeighbor();
    equals(result, true, 'expected return value');
    equals($(window).scrollTop(), $('#second').offset().top, 'expected offset');
  });

  test("scrollToPreviousYNeighbor goes nowhere if there is no neighbor", function(){
    $('#first').scrollTo();
    var result = $('.example-scrollable').scrollToPreviousYNeighbor();
    equals(result, false, "expected return value");
    equals($(window).scrollTop(), $('#first').offset().top, 'expected offset');
  });

  test("scrollToPreviousYNeighbor executes provided function if there is no neighbor", function(){
    $('#first').scrollTo();
    var result = $('.example-scrollable').scrollToPreviousYNeighbor(function(){return 8});
    equals(result, 8, "expected otherwiseFunction return value");
  });
});

