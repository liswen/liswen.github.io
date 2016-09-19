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
        //通过传入各个属性创建div
          //.P0
        $("#main").addDiv({
            width:"200px",
            height:"200px",
            left:"590px",
            top:"125px",
            "background":"url('images/page1_background.jpg')",
            backgroundSize:"cover"
        })
         setArr.push(obj)
          //p1
        $("#main").addDiv({
            width:"100px",
            height:"100px",
            left:"440px",
            top:"190px"
        })
        setArr.push(obj)
          //p2
        $("#main").addDiv({
            width:"150px",
            height:"150px",
            left:"425px",
            top:"300px"
        })
        setArr.push(obj)
          //p3
        $("#main").addDiv({
            width:"50px",
            height:"50px",
            left:"818px",
            top:"200px"
        })
        setArr.push(obj)
          //p4
        $("#main").addDiv({
            width:"170px",
            height:"170px",
            left:"830px",
            top:"265px"
        })
        setArr.push(obj)
          //p5
        $("#main").addDiv({
            width:"150px",
            height:"150px",
            left:"650px",
            top:"370px"
        })
        setArr.push(obj)
          //mouseover时要达到的效果
        var over={zIndex: 99999, height: "400px", width: "400px",top: "125px"}
          //通过事件委托为所有div添加mouseover事件
        $("#main").on("mouseover",".page",function () {
            $(this).stop().animate(over,"fast")
            $(this).siblings().stop().animate({
                left:$(this).offset().left+"px"
            })
        })

         //通过事件委托实现所有div复原
        $("#main").on("mouseout",".page",function () {
            console.log(setArr[0])
            $(".page").eq(0).stop().animate(setArr[0],"fast")
            $(".page").eq(1).stop().animate({
                width:"100px",
                height:"100px",
                left:"440px",
                top:"190px",
                zIndex:"0"
            },"fast")
            $(".page").eq(2).stop().animate({
                width:"150px",
                height:"150px",
                left:"425px",
                top:"300px",
                zIndex:"0"
            },"fast")
            $(".page").eq(3).stop().animate({
                width:"50px",
                height:"50px",
                left:"818px",
                top:"200px",
                zIndex:"0"
            })
            $(".page").eq(4).stop().animate({
                width:"170px",
                height:"170px",
                left:"830px",
                top:"265px",
                zIndex:"0"
            },"fast")
            $(".page").eq(5).stop().animate({
                width:"150px",
                height:"150px",
                left:"650px",
                top:"370px",
                zIndex:"0"
            },"fast")
        })


})
