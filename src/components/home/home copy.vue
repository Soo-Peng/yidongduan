<template>
  <div class="box">
    <div class="headerTop">
      <div class="left">
        <img src="../assets/images/icon/arrow/left/white.png" alt="" />
      </div>
      <div class="title">
        <h1>小U商城</h1>
      </div>
    </div>
    <div class="header">
      <div class="search">
        <div class="location">
          <img src="../assets/images/icon/location.jpg" alt="" />
        </div>
        <div class="logo">
          <img src="../assets/images/pic/logo/white.png" alt="" />
        </div>
        <div class="text">
          <input type="text" class="iconfont" :placeholder="seachPlaceholder" />
        </div>
        <div class="shop">
          <img src="../assets/images/icon/shop.jpg" alt="" />
        </div>
      </div>
      <div class="nav">
        <ul>
          <li class="checked">推荐</li>
          <li>女装</li>
          <li>鞋包</li>
          <li>居家</li>
          <li>母婴</li>
          <li>美妆</li>
        </ul>
        <div class="classify">
          <i class="iconfont">&#xe677;</i>
          分类
        </div>
      </div>
    </div>
    <div class="content">
      <div class="banner">
        <ul>
          <li>
            <img src="../assets/images/banner/index/beside.png" alt="" />
          </li>
          <li class="checked">
            <img src="../assets/images/banner/index/mid.png" alt="" />
          </li>
          <li>
            <img src="../assets/images/banner/index/beside.png" alt="" />
          </li>
        </ul>
        <ol>
            <li class="checked"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
      </div>
      <div class="kingkong">
        <ul>
          <li>
            <img
              src="../assets/images/icon/index/kingkong/seckill.png"
              alt=""
            />
            <p>限时秒杀</p>
          </li>
          <li>
            <img src="../assets/images/icon/index/kingkong/top.png" alt="" />
            <p>畅销商品</p>
          </li>
          <li>
            <img src="../assets/images/icon/index/kingkong/brand.png" alt="" />
            <p>品质大牌</p>
          </li>
          <li>
            <img
              src="../assets/images/icon/index/kingkong/selfsupport.png"
              alt=""
            />
            <p>小U自营</p>
          </li>
          <li>
            <img
              src="../assets/images/icon/index/kingkong/integral.png"
              alt=""
            />
            <p>积分商城</p>
          </li>
        </ul>
      </div>
      <div class="seckill">
        <div class="big">
          <h3 class="title">限时秒杀</h3>
          <a href="#javasript;" class="more"
            >查看更多<i class="iconfont">&#xe687;</i></a
          >
          <p class="text">每天0点场，好货抢不停</p>
          <div class="time">
              <span>05</span><i>:</i>
              <span>20</span><i>:</i>
              <span>48</span>
          </div>
        </div>

        <div class="small">
          <div class="top">
            <h3 class="title">品牌上新</h3>
            <p class="text">9点整，抢大牌</p>
            <div class="tag">疯抢红包<i class="iconfont">&#xe687;</i></div>
          </div>
          <div class="bottom">
            <h3 class="title">日用好货</h3>
            <p class="text">愿君多采撷</p>
            <div class="tag">塞满奖券<i class="iconfont">&#xe687;</i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seachPlaceholder: "\ue661 按内容搜索",
    };
  },
  methods: {
    testOne() {
      alert("1");
    },
  },
};
</script>
<style lang="" scoped>
@import "../assets/css/home.css";
</style>