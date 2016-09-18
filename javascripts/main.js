$(document).ready(function(){
    function an() {

        $("#mainLeft>img").animate({
            "top": "-400px"
        }, 2000)
        $("#top").animate({
            "opacity": "0.9"
        }, 2000)
        $("#mainLeft>P").animate({
            "opacity": "1",
            "font-size": "10px"
        }, 2000)
        $("#mainLeft>p").hover(function () {
            $(this).css("-webkit-transform", "rotateY(180deg)")
        }, function () {
            $(this).css("-webkit-transform", "rotateY(0deg)")
        })

    }

    setTimeout(an,1500)
})
