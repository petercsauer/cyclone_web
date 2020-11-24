/*
* Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
* Author: Coderthemes
* Component: Ratings
*/

// Rated
$("#js-interaction").bind('rated', function(event, value) {
    $('#jsvalue').text('You\'ve rated it: ' + value);
});

// Reset
$("#js-interaction").bind('reset', function() {
    $('#jsvalue').text('Rating reset');
});

// Over
$("#js-interaction").bind('over', function(event, value) {
    $('#jshover').text('Hovering over: ' + value);
});