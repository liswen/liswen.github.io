<template>
  <div id="home">
      <Banner :bannerImgs="img"/>
      <div class="home-content">
          <div class="home-src">
            <div class="home-src-block">
              <input type="text">
              <i class="iconfont">&#xe68e;</i>
            </div>
          </div>
          <div class="home-menu">
            <ul class="home-menu-list clearfix">
              <li class="home-menu-item fl">
                <i class="iconfont">&#xe62d;</i>
                <p>馆区</p>
              </li>
              <li class="home-menu-item fl">
                <i class="iconfont">&#xe646;</i>
                <p>人物</p>
              </li>
              <li class="home-menu-item fl">
                <i class="iconfont">&#xe666;</i>
                <p>其他</p>
              </li>
            </ul>
            <div class="home-news clearfix">
               <div class="home-news-cap fl">
                  <p>九何</p>
                  <p>头条</p>
               </div>
               <div class="home-news-tag fl">
                  <p>新闻</p>
                  <p>文学</p>
               </div>
               <div class="str1 str_wrap home-news-banner" style="height:2rem;overflow: hidden">
                 <a v-for="news in newsgroup">{{news.jh_detail}}</a>
               </div>
                <div class="str1 str_wrap home-news-banner" style="height:2rem;overflow: hidden">
                  <a v-for="news2 in newsgroup2">{{news2.jh_detail}}</a>
                </div>
            </div>
          </div>
          <div class="home-recommend" v-for="(i,key,index) in personData[0]">
              <p class="home-recommend-tit"><span>{{key.split('#')[0]}}</span><i class="iconfont fr">&#xe679;</i></p>
              <ul class="home-recommend-list clearfix">
                 <li class="home-recommend-item" v-for="(j,key,index) in personData[0][key]">
                   <div class="home-recommend-item-img">
                     <img v-bind:src="GLOBAL.domain+j.photo"/>
                   </div>
                   <p>{{j.name}}</p>
                 </li>
              </ul>
          </div>
          <div class="home-recommend" v-for="(i,key,index) in personData[2]">
            <p class="home-recommend-tit"><span>{{key.split('#')[0]}}</span><i class="iconfont fr">&#xe679;</i></p>
            <ul class="home-recommend-list home-recommend-ly-list clearfix">
              <li class="home-recommend-item" v-for="(j,key,index) in personData[2][key]">
                <div class="home-recommend-item-img">
                  <img v-bind:src="GLOBAL.domain+j.ly_logo"/>
                </div>
                <p>{{j.ly_name}}</p>
              </li>
            </ul>
          </div>
      </div>
      <bottom :bottomActive="activePage"/>
  </div>
</template>

<script>
import '../lib/js/jQuery';
import '../lib/js/jquery.liMarquee';
import Swiper from '../../static/swiper.min.js';
import Banner from '../components/banner.vue';
import Bottom from '../components/Bottom.vue';
export default {
  name: 'home',
  data() {
    return{
      img:[
          "../src/assets/a1.jpg",
          "../src/assets/a2.jpg"
        ],
      activePage:"home",
      personData:[],
      newsgroup:[
        "全球生命纪念馆将于2018年1月1日正式上线",
        "全球生命纪念馆将于2018年1月1日正式上线",
      ],
      newsgroup2:[
        "记录家族文化、个人传记、生命故事的大型文学板块即将开放，欢迎有相关记录、图片等线索的家族或者个人与我们联系，联系方式：68200233@qq.com",
        "记录家族文化、个人传记、生命故事的大型文学板块即将开放，欢迎有相关记录、图片等线索的家族或者个人与我们联系，联系方式：68200233@qq.com",
      ]
    }
  },
  mounted:function(){
     this.runNews();
     this.getData();
  },
  components:{
     Banner,Bottom
  },
  methods:{
     runNews:function () {
       $('.str1').liMarquee({
         direction: 'left',
         scrollamount:50
       });
     },
     getData:function () {
       var that=this;
//       获取首页信息
       $.ajax({
         url:this.GLOBAL.URL+'/Api/Index/index',
         type:'GET',
         dataType:'json',
         success:function(data){
           that.newsgroup=data.data.head_fu;
           that.newsgroup2=data.data.head_xi;
//           console.log(data);
         },
         error:function(){
           console.log('首页数据错误');
         }
       });
//       获取首页推荐数据
       $.ajax({
         url:this.GLOBAL.URL+'/Api/Index/syList',
         type:'POST',
         data:{
//           token:token
         },
         dataType:'json',
         success:function(data){
           console.log(data);
           that.personData=data.data
         },
         error:function(){
           console.log('首页人物类别错误');
         }
       });
     }
  }
}
</script>

<style>
  @import '../lib/swiper/swiper-3.4.2.min.css';
  #home{
    position: relative;
    /*transform: translate(0,0);*/
  }
  .home-src{
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    width: 100%;
    /*background: #002981;*/
    height: 45px;
    z-index: 999;
    margin-top: .2rem;
  }
  .home-src-block{
    width: 90%;
    height: 30px;
    margin: 0 auto;
    position: relative;
  }
  .home-src-block input{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid #fff;
  }
  .home-src-block .iconfont{
    font-size: 20px;
    position: absolute;
    right:10px;
    top: 50%;
    margin-top: -10px;
  }
  .home-content{
    padding: 3%;
    background: -webkit-linear-gradient(90deg, #002981, #002981);
  }
  .home-menu{
    background: #fff;
    padding: 3%;
  }
  .home-menu-list{

  }
  .home-menu-item{
    width: 33.33%;
    text-align: center;
  }
  .home-menu-item i{
    font-size: 2rem;
    color: #2196f3;
  }
  .home-menu-item p{
    font-size: 12px;
    padding-top: .5rem;
    color: #2c3e50;
  }
  .home-news{
    margin-top: 5%;
  }
  .home-news-cap{
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 5px;
    background: #005ea9;
    padding-top: .3rem;
    color: #fff;
    text-align: center;
  }
  .home-news-cap p{
    font-family: cursive;
    font-weight: bold;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .home-news-tag{
    width: 5rem;
    text-align: center;
  }
  .home-news-tag p{
    width: 3rem;
    text-align: center;
    color: #005ea9;
    font-size: 12px;
    border: 1px solid #005ea9;
    border-radius: 3px;
    padding: 1% 3%;
    margin: 7% auto 0;
  }

  .str_wrap {
    overflow:hidden;
  //zoom:1;
    width:57%;
    font-size:12px;
    line-height:16px;
    position:relative;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    background:#fff;
    white-space:nowrap;
  }

  .str_wrap.str_active {
    background:#fff;
  }
  .str_move {
    white-space:nowrap;
    position:absolute;
    top:22%;
    left:0;
    cursor:move;
  }
  .str_move_clone {
    display:inline-block;
  //display:inline;
  //zoom:1;
    vertical-align:top;
    position:absolute;
    left:100%;
    top:0;
  }
  .str_vertical .str_move_clone {
    left:0;
    top:100%;
  }
  .str_down .str_move_clone {
    left:0;
    bottom:100%;
  }
  .str_vertical .str_move,
  .str_down .str_move {
    white-space:normal;
    width:100%;
  }
  .home-news-banner{
    padding: 1.8%;
  }
  .home-news-banner div{
  }
  .home-news-banner a{
    margin-right: 3rem;
  }
  .home-recommend{
    margin-top: 3%;
    background: #fff;
    padding: 3%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .home-recommend-tit{
    font-size: .87rem;
  }
  .home-recommend-tit .iconfont{
    color: #999;
  }
  .home-recommend-list{
    margin-top:5%;
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
  }
  .home-recommend-item{
    width: 23%;
    text-align: center;
    font-size: .75rem;
    display: inline-block;
  }
  .home-recommend-item-img{
    height: 4.8rem;
    overflow: hidden;
    margin-bottom: .3rem;
  }
  .home-recommend-item-img img{
    width: 95%;
    height: 100%;
  }
  .home-recommend-ly-list .home-recommend-item{
    width: 46%;
  }
  /*.home-recommend-ly-list*/
</style>
