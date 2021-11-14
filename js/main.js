window.onload = function () {
  $(document).ready(function () {
    $(".single-item").slick({
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      nextArrow: document.querySelector("#my-arrow-next"),
      prevArrow: document.querySelector("#my-arrow-prev"),
    });
  });
  $(document).ready(function () {
    $("#main-nav").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1500);
    });
  });
};
