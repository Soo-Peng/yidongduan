<template>
  <div>
    <div class="headerTop">
      <h2>分类</h2>
    </div>
    <div class="search">
      <input type="text" class="iconfont" :placeholder="seachPlaceholder" />
    </div>
    <div class="content">
      <div class="leftList">
        <ul>
          <li
            :class="index == checkedCart ? 'checked' : ''"
            v-for="(item, index) in cateTree"
            :key="item.id"
            @click="changeCart(index)"
          >
            {{ item.catename }}
          </li>
        </ul>
      </div>
      <div class="rightCart">
        <!-- <ul> -->
          <div :class="checkedCart==index?'checkedCar cart ':'cart'"  v-for="(item, index) in cateTree" :key="index" >
            <div v-if="!item.children" class="blankSpace">
               <h2> 这个分类是空的呢！</h2>
            </div>
            <ul>
              <li v-for="list in item.children" :key="list.id" @click="toList(list.id)">
                <img :src="list.img?$imgUrl+list.img:'http://p3.music.126.net/YKl4IRmJi4MPTx_cuJfJeQ==/109951165289082650.jpg?param=140y140'" alt="" />
                <p>{{list.catename}}</p>
              </li>
              <!-- <li>
                <img src="../../assets/images/pic/commodity/02.png" alt="" />
                <p>新品</p>
              </li>
              <li>
                <img src="../../assets/images/pic/commodity/03.png" alt="" />
                <p>好礼专区</p>
              </li>
              <li>
                <img src="../../assets/images/pic/commodity/04.png" alt="" />
                <p>美容馆</p>
              </li>
              <li>
                <img src="../../assets/images/pic/commodity/05.png" alt="" />
                <p>基础护肤</p>
              </li> -->
            </ul>
          </div>
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>

<script>
import { axiosGetCateTree } from "../../util/axios";
export default {
  data() {
    return {
      seachPlaceholder: "\ue661 按内容搜索",
      cateTree: [],
      checkedCart: 0,
    };
  },
  mounted() {
    axiosGetCateTree().then((res) => {
      if (res.data.code === 200) {
        this.cateTree = res.data.list;
      }
      console.log(res.data);
    });
  },
  methods: {
    changeCart(idx) {
      this.checkedCart = idx;
    },
    toList(id){
      this.$router.push('/list?id='+id)
    }
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/classify.css";
</style>