$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined(); // check that allFeeds is defined
            expect(allFeeds.length).not.toBe(0); // check that allFeeds is not empty
        });

        it('urls are defined', function() {
            allFeeds.forEach(function(feed) { // loops allFeeds
                expect(feed.url).toBeDefined(); // to check that the urls are defined
                expect(feed.url.length).not.toBe(0); // and that they are not empty
            });
        });

        it('names are defined', function() {
            allFeeds.forEach(function(feed) { // loops allFeeds
                expect(feed.name).toBeDefined(); // to check that the names are defined
                expect(feed.name.length).not.toBe(0); //  and that they are not empty
            });
        });
    });

    describe('The menu', function() {
        var body;
        var menuIcon;

        beforeEach(function() {
            body = $('body'); // body selector
            menuIcon = $('.menu-icon-link'); // menuIcon selector
        });

        it('is hidden', function() {
            expect(body.hasClass('menu-hidden')).toBe(true); // checks that menu is hidden by default
        });

        it('clicking shows/hides menu', function() {
            menuIcon.trigger('click'); // opens menu
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menuIcon.trigger('click'); // closes menu
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done); // loads entries
        });

        it('there is at least a single .entry element within the .feed container', function() {
            // Uncomment next line to verify that its the first
            // console.log($('.entry').html());
            expect($('.feed .entry').length).not.toBe(0); // checks if there is an element with entry class
        });
    });

    describe('New Feed Selection', function() {
        var htmlBefore;
        var htmlAfter;

        beforeEach(function(done) {
            loadFeed(1, function() { // loads second entries (CSS Tricks)
                htmlBefore = $(".feed").html(); // gets current html of .feed
                done();
            });
        });

        it("new feed's content changed", function(done) {
            // Note: You can test the other feeds by changing the number parameter in both loadFeeds,
            // but keep in mind that the second load will be showed as default on the page

            loadFeed(0, function() { // loads first entries (Udacity Blog)
                htmlAfter = $(".feed").html(); // gets the changed html of .feed
                expect(htmlBefore).not.toEqual(htmlAfter);
                done();
            });
        });
    });

}());
