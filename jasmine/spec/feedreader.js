/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('urls are defined', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function(){
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       var body;
       var menuIcon;
       beforeEach(function() {
          body = $('body');
          menuIcon = $('.menu-icon-link');
       });
       it('is hidden', function() {
         expect(body.hasClass('menu-hidden')).toBe(true);
       });
       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('clicking shows/hides menu', function() {
          menuIcon.trigger('click');
          expect(body.hasClass('menu-hidden')).not.toBe(true);
          menuIcon.trigger('click');
          expect(body.hasClass('menu-hidden')).toBe(true);

        })
    });

       describe('Initial Entries', function() {
          beforeEach(function(done){
            loadFeed(0,done);
          });

          it('there is at least a single .entry element within the .feed container', function(done){
            // console.log($('.entry').html());
            expect($('.entry').length).not.toBe(0);
            done();
          });
        });

      describe('New Feed Selection', function() {
        var htmlBefore;
        var htmlAfter;
        beforeEach(function(done){
          loadFeed(1, function() {
            htmlBefore = $(".feed").html();
            // console.log('HTMLBEFORE=',htmlBefore);
            done();
          });
        });

        it("new feed's content changed", function(done) {
          loadFeed(0, function() {
            htmlAfter = $(".feed").html()
            // console.log('HTMLAFTER = ',htmlAfter);
            expect(htmlBefore).not.toEqual(htmlAfter);
            done();
          });
        });
      });

}());
