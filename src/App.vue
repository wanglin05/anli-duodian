<template>
  <div class="box">
      <Header :title="$route.meta.title"></Header>
      
      <div class="main">

          <router-view></router-view>

      </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){
    // console.log(this.$route)
  },
  mounted(){

  }
}
</script>
<style lang="scss">
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    >.main{
      float: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;

      .home,.type,.shoppingCar,.my,.map{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .wrap{
            flex: 1;
            overflow: auto;
        }
      }
    }
  }
</style>