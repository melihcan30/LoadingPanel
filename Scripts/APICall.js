$(document).ready(function () {

    $("btnAPICall").click(function () {

        $(".overlay,.popup").fadeIn();

        CallAPI();

    });


    function LoadingBar() {
        $("#Fade_area").removeAttr("style");
        $("#myModal").removeAttr("style");
    }


    function CallAPI() {
        $.ajax({
            url: "",
            type: 'post',
            contentType: 'application/json',
            success: function () {
                setTimeout(function () { LoadingBar() }, 10000);
            },
            Error: function () {
                setTimeout(function () { LoadingBar() }, 10000);
            }
        })
    }


});