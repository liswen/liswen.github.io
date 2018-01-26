<template>
  <div id="home">
    <div class="home-src"></div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import swiper from '../lib/swiper/swiper.min.js'
export default {
  name: 'app',
  ready(){
     this.$nextTick(()=>{
       let mySwiper = new Swiper ('.swiper-container', {
         pagination: {
           el: '.swiper-pagination',
         }
       }
     })
  }
}
</script>

<style>
@import '../lib/swiper/swiper.min.css';
.home-src{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,.5);
}
</style>
