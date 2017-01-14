$(document).ready(function(){
        //菜单动画

        $("#bgColor").animate({
            opacity:0
        },1000)

        //创建效果div
        var obj;setArr=[];
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
                boxShadow: "-7px 10px 19px #999",
                zIndex:1,
                opacity:1
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
                    boxShadow:settings.boxShadow,
                    zIndex:settings.zIndex
                })
                i++
            }
        }(jQuery));
        //通过传入各个属性创建div
          //.P0
        $("#whiteBlock").addDiv({
            width:"200px",
            height:"200px",
            left:"25%",
            top:"28%",
            backgroundSize:"cover",
            zIndex:1,
            opacity:1
        })
         setArr.push(obj)
          //p1
        $("#whiteBlock").addDiv({
            width:"100px",
            height:"100px",
            left:"44%",
            top:"19%",
            zIndex:1,
            opacity:1
        })
        setArr.push(obj)
          //p2
        $("#whiteBlock").addDiv({
            width:"150px",
            height:"150px",
            left:"6%",
            top:"30%",
            zIndex:1,
            opacity:1
        })
        setArr.push(obj)
          //p3
        $("#whiteBlock").addDiv({
            width:"50px",
            height:"50px",
            left:"12%",
            top:"7%",
            zIndex:1,
            opacity:1
        })
        setArr.push(obj)
          //p4
        $("#whiteBlock").addDiv({
            width:"170px",
            height:"170px",
            left:"15%",
            top:"65%",
            zIndex:1,
            opacity:1
        })
        setArr.push(obj)
          //p5
        $("#whiteBlock").addDiv({
            width:"150px",
            height:"150px",
            left:"45%",
            top:"52%",
            zIndex:1,
            opacity:1
        })
        setArr.push(obj)

          //mouseover时要达到的效果
        var over={zIndex: 99999, height: "40%", width: "40%",}
          //通过事件绑定为所有div添加mouseover事件
        $(".page").on("mouseover",function () {
            $(this).stop().animate(over,"fast")
            $(this).siblings().stop().animate({
                left:$(this).offset().left+"px",
                "opacity":"0"
            })
        })

         //通过事件绑定实现所有div复原
        $(".page").on("mouseout",function () {
            for(var i=0;i<$(".page").length;i++){
                $(".page").eq(i).stop().animate(setArr[i],"fast")
            }
        })
         //为p0添加跳转
       $(".page").eq(0).click(function () {
           window.location.href="html/page1.html"
       })



})
