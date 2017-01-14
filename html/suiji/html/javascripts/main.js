$(document).ready(function(){
        //菜单动画

        $("#topBgColor").animate({
            opacity:1
        },1000)
        $("#top").animate({
            top:"-50px"
        },500)
        document.onmousemove=function (ev) {
            var event=ev||event
            if(event.clientY<47){
                console.log(1)
                $("#top").stop().animate({
                    top:0
                },500)
            }else{
                console.log(2)
                $("#top").stop().animate({
                    top:"-50px"
                },500)
            }
        }

})
