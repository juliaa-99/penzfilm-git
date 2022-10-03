'use strict';

$(document).ready(function () {
    $(".js-toggl").on('click', function (event) {
        $('.header').toggleClass('open');
        $("body").toggleClass('overfl');
    });

    $('ul.tabs li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('id');
        console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
            $('.tabs_container .tab_content[data-tab="' + $theTab + '"], ul.tabs li[id="' + $theTab + '"]').addClass('active');
        }
    });

    var swiper = new Swiper(".js-prgct-slider", {
        loop: true,
        spaceBetween: 16,
        navigation: {
            nextEl: ".prgct-arrow-next",
            prevEl: ".prgct-arrow-prev"
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });

    var swiper2 = new Swiper(".js-team-sl", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: "auto",
        navigation: {
            nextEl: ".team-arrow-next",
            prevEl: ".team-arrow-prev"
        },
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 24
            }
        }
    });

    var swiper3 = new Swiper(".js-vd-slider", {
        spaceBetween: 16,
        slidesPerView: "auto",
        breakpoints: {
            991: {
                spaceBetween: 26
            }
        }
    });

    var swiper4 = new Swiper(".js-history-slider", {
        spaceBetween: 20,
        slidesPerView: "auto",
        autoHeight: true,
        navigation: {
            nextEl: ".history-arrow-next",
            prevEl: ".history-arrow-prev"
        }
    });

    var swiper5 = new Swiper(".js-team-item", {
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".team-item-pagination",
            type: "fraction",
            formatFractionCurrent: function formatFractionCurrent(number) {
                return '0' + number;
            }
        }
    });

    /* validation*/

    var validSrc = '<span></span>';
    var invalidSrc = "<span></span>";

    $(document).ready(function () {
        initListeners();
    });

    function initListeners() {
        $("#email").on("blur", validateEmail);
        $("#name").on("blur", validateName);

        $("#email2").on("blur", validateEmail2);
        $("#name2").on("blur", validateName2);

        $(".submitBtn").on("click", validateForm);
        $(".submitBtn2").on("click", validateForm2);
    }

    function validateEmail() {
        var emailAddress = $("#email").val().trim().toLowerCase();
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg").html('').parent().parent().removeClass('er');
            $("#email").removeClass("invalid");
        } else {
            $(".emailValidationImg").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }
    function validateEmail2() {
        var emailAddress = $("#email2").val().trim().toLowerCase();
        var pattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var validEmail = pattern.test(emailAddress);
        var reason = "";
        if (!validEmail) {
            reason = "Improper format";
        } else {
            if (emailAddress.includes("@hotmail")) {
                validEmail = false;
                reason = "Hotmail not accepted";
            } else if (emailAddress.includes("@gmail")) {
                validEmail = false;
                reason = "Gmail not accepted";
            } else if (emailAddress.includes("@yahoo")) {
                validEmail = false;
                reason = "Yahoo not accepted";
            }
        }
        if (validEmail) {
            $(".emailValidationImg2").html('').parent().parent().removeClass('er');
            $("#email2").removeClass("invalid");
        } else {
            $(".emailValidationImg2").html('Email введен неверно').parent().parent().addClass('er');
        }
        return validEmail;
    }

    function validateName() {
        var isValid = false;
        var length = $("#name").val().length;
        if (length > 1) {
            $(".nameValidationImg").html('').parent().parent().removeClass('er');
            $("#name").removeClass("invalid");
            isValid = true;
        } else {
            $(".nameValidationImg").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }
    function validateName2() {
        var isValid = false;
        var length = $("#name2").val().length;
        if (length > 1) {
            $(".nameValidationImg2").html('').parent().parent().removeClass('er');
            $("#name2").removeClass("invalid");
            isValid = true;
        } else {
            $(".nameValidationImg2").html('Имя не заполнено').parent().parent().addClass('er');
            isValid = false;
        }

        return isValid;
    }

    function validateForm() {
        var formIsValid = true;

        if (!validateEmail()) {
            $("#email").addClass("invalid");
            formIsValid = false;
        } else {
            $("#email").removeClass("invalid");
        }

        if (!validateName()) {
            $("#name").addClass("invalid");
            formIsValid = false;
        } else {
            $("#name").removeClass("invalid");
        }
    }
    function validateForm2() {
        var formIsValid2 = true;

        if (!validateEmail2()) {
            $("#email2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#email2").removeClass("invalid");
        }

        if (!validateName2()) {
            $("#name2").addClass("invalid");
            formIsValid2 = false;
        } else {
            $("#name2").removeClass("invalid");
        }
    }
});
//# sourceMappingURL=app.js.map
