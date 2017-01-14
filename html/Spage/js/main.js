$(document).ready(function(){

        var flag=true,flag1=true,num=0
          //下拉菜单动画
        $(".menu>i").click(function () {
            flag==true?$(".selectMenu").slideDown():$(".selectMenu").slideUp();
            flag=!flag
        })
        //百叶窗动画
         $(".oBtn1").click(function () {
             if(flag1){
                 $(".leave").css(
                     {
                         "transform":"rotateX(-60deg)",
                         "boxShadow":"#ccc 0px -20px 20px -5px inset",
                         "color":"#ccc"
                     })
                 $(".leave>p").css("opacity","0")
                 $(".oLine").animate({
                     "height":"400px"
                 },500)
                 $(".oLine").animate({
                     "height":"380px"
                 },500)
             }else {
                 $(".leave").css(
                     {
                         "transform":"rotateX(0deg)",
                         "boxShadow":"#ccc 0px 12px 30px -5px inset",
                         "color":"#80110f"
                     })
                 $(".leave>p").css("opacity","1")
                 $(".oLine").animate({
                     "height":"400px"
                 },500)
                 $(".oLine").animate({
                     "height":"380px"
                 },500)
             }
             flag1=!flag1
         })
         //动态添加数据
         $.ajax({
             type:"GET",
             url:"menu"+num+".html",
             success:function (data) {
                $(".leaves").append(data)
                $(".leave").append("<div class='move'><div class='moveBlock'></div></div>")
             }
         })

         //
        $(".up").click(function () {
            num--

            if(num<0){
                num=0
            }else {
                $(".leaves").html("")
                $.ajax({
                    type:"GET",
                    url:"menu"+num+".html",
                    success:function (data) {

                        $(".leaves").append(data)
                    }
                })
                flag1=true
            }

        })
        $(".down").click(function () {
            num++
            if(num>1){
                num=1
            }else {
                $(".leaves").html("")
                $.ajax({
                    type:"GET",
                    url:"menu"+num+".html",
                    success:function (data) {
                        $(".leaves").append(data)
                    }
                })
                flag1=true
            }

        })
        $(".leaves").on("click",".leave",function () {
            // window.location.href="menu1.html"
              $(this).css({"height":"390px"}).siblings().hide()
              $(this).find("p").animate({"opacity":"1"},1000)
        })
        $(".leaves").on("mousedown",".moveBlock",function (ev) {
                    var event=ev||event;
                    var offset=$(this).offset()
                    var i=event.clientY
            $(document).on("mousemove",function (ev) {
                   var event=ev||event;
                   var theTop=event.clientY-i
                  if(theTop<0){
                      theTop=0

                  }else if(theTop>280)
                  {
                      theTop=280
                  }
                $(".moveBlock").css("top",theTop+"px")
            })
            $(document).on("mouseup",function (ev) {
                $(document).unbind()
            })
            return false
        })

})
