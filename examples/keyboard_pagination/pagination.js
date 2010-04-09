function paginateNext(){
  var nextPage = $('next-page');
  if (nextPage){
    window.location = nextPage.href.replace('jumping-back=true', '');
  }
}

function paginatePrevious(){
  var prevPage = $('prev-page');
  if (prevPage){
    window.location = prevPage.href + "?jumping-back=true";
  }
}

function nextPost(){
  $$('.post').scrollToNextYNeighbor(paginateNext);
}

function prevPost(){
  $$('.post').scrollToPreviousYNeighbor(paginatePrevious);
}

Event.observe(window, 'load', function() {
  new HotKey('j', function(event){ nextPost() },{ ctrlKey: false });
  new HotKey('k', function(event){ prevPost() },{ ctrlKey: false });

  if (window.location.toString().indexOf('jumping-back=true') > -1){
    $$('.post').last().scrollTo();
  }
});
