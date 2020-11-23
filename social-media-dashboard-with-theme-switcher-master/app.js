$(".slider").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".slider").text("");
    } else {
        $("body").addClass("dark", "header-dark");
        $(".slider").text("");
    }

});


$(".slider").on("click", function () {
    if ($(".light").hasClass("header-dark")) {
        $(".light").removeClass("header-dark");
        $(".slider").text("");
    } else {
        $(".light").addClass("header-dark");
        $(".slider").text("");
    }

});

$(".slider").on("click", function () {
    if ($(".card").hasClass("card-dark")) {
        $(".card").removeClass("card-dark");
        $(".slider").text("");
    } else {
        $(".card").addClass("card-dark");
        $(".slider").text("");
    }

});
$(".slider").on("click", function () {
    if ($(".cards").hasClass("card-dark")) {
        $(".cards").removeClass("card-dark");
        $(".slider").text("");
    } else {
        $(".cards").addClass("card-dark");
        $(".slider").text("");
    }

});
$(".slider").on("click", function () {
    if ($(".cards:hover").hasClass("card-dark:hover")) {
        $(".cards:hover").removeClass("card-dark:hover");
        $(".slider").text("");
    } else {
        $(".cards:hover").addClass("card-dark:hover");
        $(".slider").text("");
    }

});
$(".slider").on("click", function () {
    if ($(".slider.round::before").hasClass("slider::after")) {
        $(".slider.round::before").removeClass("slider::after");
        $(".slider").text("");
    } else {
        $(".slider.round::before").addClass("slider::after");
        $(".slider").text("");
    }

});
