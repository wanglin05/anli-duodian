<template>
  <div class="wrap">
      <Header :title="$route.meta.title"></Header>
      <div class="main">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  .wrap{
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