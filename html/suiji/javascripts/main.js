$(document).ready(function(){
        //菜单动画
        (function($){
            $("#top").animate({
                "opacity": "0.9"}, 2000)

        }(jQuery));
        //创建效果div
        var obj;
        (function ($) {
             var i=0
            $.fn.addDiv=function (options) {
                obj=options
                var settings=$.extend({
                width:"200px",
                height:"200px",
                background: "rgb(229,232,233)",
                backgroundSize:"cover",
                position:"absolute",
                left:"100px",
                top:"100px",
                borderTop:"2px solid white",
                borderRight:"2px solid white",
                borderRadius: "10px",
                boxShadow: "-20px 20px 45px #999"
                },options)
                this.append("<div class='page p"+i+"'></div>")
                this.find(".p"+i+"").css({
                    width:settings.width,
                    height:settings.height,
                    background:settings.background,
                    backgroundSize:settings.backgroundSize,
                    position:settings.position,
                    left:settings.left,
                    top:settings.top,
                    borderTop:settings.borderTop,
                    borderRight:settings.borderRight,
                    borderRadius:settings.borderRadius,
                    boxShadow:settings.boxShadow
                })
                i++
            }
        }(jQuery));
          //.P0
        $("#main").addDiv({
            width:"200px",
            height:"200px",
            left:"590px",
            top:"125px",
            "background":"url('images/page1_background.jpg')",
            backgroundSize:"cover"
        })
          //p1
        $("#main").addDiv({
            width:"100px",
            height:"100px",
            left:"440px",
            top:"190px"
        })
          //p2
        $("#main").addDiv({
            width:"150px",
            height:"150px",
            left:"425px",
            top:"300px"
        })
          //p3
        $("#main").addDiv({
            width:"50px",
            height:"50px",
            left:"818px",
            top:"200px"
        })
          //p4
        $("#main").addDiv({
            width:"170px",
            height:"170px",
            left:"830px",
            top:"265px"
        })
          //p5
        $("#main").addDiv({
            width:"150px",
            height:"150px",
            left:"650px",
            top:"370px"
        })
        var over={zIndex: 99999, height: "400px", width: "400px",top: "125px"}
        $("#main").on("mouseover",".page",function () {
            $(this).animate(over,"fast")
        })
          //p0恢复
        $("#main").on("mouseleave",".p0",function () {
            $(this).animate({
                width:"200px",
                height:"200px",
                left:"590px",
                top:"125px",
                zIndex:"0"
            },"fast")
        }).find(".p0").click(function () {
            window.location.href="html/page1.html"
        })
          //p1恢复
        $("#main").on("mouseleave",".p1",function () {
            $(this).animate({
                width:"100px",
                height:"100px",
                left:"440px",
                top:"190px",
                zIndex:"0"
            },"fast")
        })
          //p2恢复
        $("#main").on("mouseleave",".p2",function () {
            $(this).animate({
                width:"150px",
                height:"150px",
                left:"425px",
                top:"300px",
                zIndex:"0"
            },"fast")
        })
          //p3恢复
        $("#main").on("mouseleave",".p3",function () {
            $(this).animate({
                width:"50px",
                height:"50px",
                left:"818px",
                top:"200px",
                zIndex:"0"
            },"fast")
        })
           //p4恢复
        $("#main").on("mouseleave",".p4",function () {
            $(this).animate({
                width:"170px",
                height:"170px",
                left:"830px",
                top:"265px",
                zIndex:"0"
            },"fast")
        })
        $("#main").on("mouseleave",".p5",function () {
            $(this).animate({
                width:"150px",
                height:"150px",
                left:"650px",
                top:"370px",
                zIndex:"0"
            },"fast")
        })




})
