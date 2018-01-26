
<template>
  <div id="bottom">
    <ul class="clearfix">
      <li :class="{bactive:active=='home'}"><i class="iconfont">&#xe626;</i></li>
      <li><i class="iconfont">&#xe671;</i></li>
      <li :class="{bactive:active=='mine'}"><i class="iconfont">&#xe61b;</i></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'bottom',
    props: ['bottomActive'],
    data() {
      return{
        active:this.bottomActive
      }
    },
    mounted:function(){
        console.log(this.bottomActive)
    },
    methods:{

    }
  }
</script>
<style scoped>
  #bottom{
    position: fixed;
    bottom:0;
    width: 100%;
    left: 0;
  }
  #bottom ul{
     width: 100%;
     display: block;
     padding: 0;
  }
  #bottom ul li{
    width: 33.33%;
    float: left;
    text-align: center;
    height: 45px;
    line-height: 45px;
    list-style: none;
    background: #001a3e;
    color: #fff;
  }
  #bottom ul li .iconfont{
    font-size: 20px;
  }
  .bactive{
    color: #0062cc!important;
  }
</style>
