neighborly.js
=============

neighborly.js extends Array to allow using selectors (i.e. $$('.some_class')) to find the closest/neighbor elements either above or below a users current scroll location in the browser.  It provides scrollToNextYNeighbor and scrollToPreviousYNeighbor to allow you to easily jump between matching elements.

You can optionally pass a function to scrollToNextYNeighbor and scrollToPreviousYNeighbor that will be executed in the event that no matching element is found to scroll to (as an example, I use this to trigger a pagination event).


why?
-------------

I wrote this to provide an easy way to allow jumping up and down between elements on a page (in my case using keyboard shortcuts for accessibility - see examples/keyboard_pagination/) and then paginate.  If you find other good uses for it, please let me know.


examples
-------------

You should look in the examples folder for some functional examples.  You might also be interested in checking out the tests.

If you would rather use your imagination:  Given the following HTML document where the user has scrolled the browser so that the top of the page is represented by the dotted line


    <div id="a" class="msg-wrapper">...</div>

    <div id="b" class="msg-wrapper">...</div>

    -----------------------------------------

    <div id="c" class="msg-wrapper">...</div>

    <div id="d" class="msg-wrapper">...</div>

Our nextYNeighbor and previousYNeighbor behave thusly

    $$('.msg-wrapper').nextYNeighbor()             // --> $('div#c')

    $$('.msg-wrapper').previousYNeighbor()         // --> $('div#b')

If you managed to be scrolled precisely at the Y coordinates of where div#c begins then

    $$('.msg-wrapper').nextYNeighbor()             // --> $('div#d')

    $$('.msg-wrapper').previousYNeighbor()         // --> $('div#b')

    $$('.msg-wrapper').scrollToNextYNeighbor()     // scrolls to $('div#d')

    $$('.msg-wrapper').scrollToPreviousYNeighbor() // scrolls to $('div#b')


running tests
-------------

To run the tests, open tests/test.html.  You'll need an internet connection so that the tests can load some external resources (qunit and its dependencies, and prototype).  You can run these tests on a per-browser basis by opening the test.html in whichever browser you want to test.


filing bugs / contributing (won't you be my neighbor?)
-------------

If you have problems or want to add some functionality you should file an issue on github or fork the code and send me a pull request.

If you find bugs in specific browsers please let me know.

Failing tests illustrating problems or desired functionality are appreciated.


license
-------------

The MIT License

Copyright (c) 2010 Jeffrey Chupp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
