<template>
    <div>
        <Header/>
        <div class="main">
          <router-view></router-view>
          <div class="tab" >
            <router-link to="/main/home" class="tabItem"><i icon iconfont></i><span>首页</span></router-link>
            <router-link to="/main/catalogue" class="tabItem"><i icon iconfont></i><span>分类</span></router-link>
            <router-link to="/main/shop" class="tabItem"><i icon iconfont></i><span>购物车</span></router-link>
            <router-link to="/main/my" class="tabItem"><i icon iconfont></i><span>我的</span></router-link>
          </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
export default {
 props: {
    msg: String
  },
  components:{
    Header
  },
}
</script>

<style scoped lang="scss">
@import "@/styles/_mixin.scss";
.tab{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom:0;
  left:0;
  background: #fff;
}
</style>
