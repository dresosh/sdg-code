(function () {
  'use strict';

  // changes active state on click
  $('.tab').on('click', function () {

    // removes active class from all elements
    $('*').removeClass('active');

    // adds active class to selected tab
    $(this).addClass('active').next().addClass('active');

  })

}())
