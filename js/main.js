$(document).ready(function(){
    //下拉菜单动画
        var flag=true
        $(".menu>i").click(function () {
            flag==true?$(".selectMenu").slideDown():$(".selectMenu").slideUp();
            flag=!flag
        })
    //飞入动画
        var arr=[{left:"29%",top:"40px"},{left:"24%",top:"-20px",opacity:1},{left:"77%",top:"173px",opacity:1},{left:"64%",top:"0px",opacity:1},{left:"82%",top:"259px",opacity:1},{left:"9%",top:"40px",opacity:1},{left:"10%",top:"436px",opacity:1},{left:"48%",top:"452px",opacity:1},{left:"34%",top:"0px",opacity:1},{left:"27%",top:"217px",opacity:1},{left:"66%",top:"220px",opacity:1},{left:"8%",top:"204px",opacity:1},{left:"53%",top:"0px",opacity:1},{left:"24%",top:"292px",opacity:1},{left:"32%",top:"0px",opacity:1},{left:"75%",top:"370px",opacity:1},{left:"25%",top:"93px",opacity:1},{left:"24%",top:"460px",opacity:1},{left:"16%",top:"223px",opacity:1},{left:"84%",top:"0px",opacity:1},{left:"68%",top:"158px",opacity:1},{left:"12%",top:"340px",opacity:1},{left:"62%",top:"429px",opacity:1},{left:"71%",top:"479px",opacity:1},{left:"40%",top:"-113px",opacity:1},{left:"25%",top:"408px",opacity:1}]
    $(".o5").mouseover(function () {
        for(var i=1;i<arr.length;i++) {
            $(".image").eq(i).animate(arr[i], 2000)
        }
        setTimeout(togo,6000)
    })
    function togo() {
        window.location.href="html/suiji/index.html"
    }
    //翻转动画
    var deg=360
    // var col=Math.random()*999999
    function run() {
        var col=Math.floor(Math.random()*899999+100000)
        $("#tu").css({
            "transform":"rotateY("+deg+"deg)",
            "color":"#"+col
        })
        $(".oBtn").css({
            "color":"#"+col
        })
        deg+=360
    }
    setInterval(run,3000)
})
