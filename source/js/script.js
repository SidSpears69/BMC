$(document).ready(function(){
    $(".menu__item--dropdown").click(function(){
        $(this).toggleClass("opened");
    });
    $(".search__toggle").click(function(){
        $(".search__wrapper").toggleClass("opened");
    });
    $(".rating__stars").rating( {
        fx: "full",
        stars: 5
    });
})