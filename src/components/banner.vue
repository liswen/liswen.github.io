<template>
  <div id="banner">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in img"><img v-bind:src='i'></div>
      </div>
      <div class="swiper-pagination">
         <!-- <span v-for='(r,index) in img' :class="[{'swiper-pagination-bullet-active':aindex==index},'swiper-pagination-bullet']"></span> -->
      </div>
    </div>
  </div>
</template>

<script>
import '../lib/js/jQuery';
import Swiper from '../../static/swiper.min.js';
export default {
  name: 'banner',
  props: ['bannerImgs'],
  data() {
    return{
        img:this.bannerImgs,
        aindex:0
    }
  },
  mounted:function(){
      var swiper;
      this.$nextTick(function(){
           swiper = new Swiper('.swiper-container',{
             pagination: {
                    el: '.swiper-pagination',
             },
             loop : true,
           });
       });

    },
    methods:{

    }
}
</script>

<style>
@import '../lib/swiper/swiper-3.4.2.min.css';
#home{
  position: relative;
  /*transform: translate(0,0);*/
}
.swiper-container {
      width: 100%;
      height: 200px;
  }
.swiper-pagination {
       bottom: 0;
       width: 100%;
       margin: 3px;
}
.swiper-pagination .swiper-pagination-bullet{
      margin: 3px;
}
.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
