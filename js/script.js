
(function($) {
    $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.tabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);

  const headeBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.nav__list');
  
    
      headeBurger.addEventListener("click", function (e) {
        headeBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
});
