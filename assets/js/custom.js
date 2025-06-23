// ************************************************* //
// * +++++++++++ Fixed header ++++++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
    if($(this).scrollTop() > 250 ) {
      $(".aul__header").addClass("fixed__header");
    } else {
      $(".aul__header").removeClass("fixed__header");
    }
  });


