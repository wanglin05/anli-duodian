<template>
    <div class="nav">
        <div class="content" v-for="(item,index) in data" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:[
                {
                    img:require('@/assets/1.png'),
                    title:"蔬菜每日鲜"
                },
                {
                    img:require('@/assets/2.png'),
                    title:"肉蛋禽"
                },
                {
                    img:require('@/assets/3.png'),
                    title:"母婴天地"
                },
                {
                    img:require('@/assets/4.png'),
                    title:"进店把脉"
                },
                {
                    img:require('@/assets/5.png'),
                    title:"美通卡"
                },
                {
                    img:require('@/assets/6.png'),
                    title:"早晚市"
                },
                {
                    img:require('@/assets/7.png'),
                    title:"品牌汇"
                },
                {
                    img:require('@/assets/8.png'),
                    title:"领劵中心"
                },
                {
                    img:require('@/assets/9.png'),
                    title:"支付优惠"
                },
                {
                    img:require('@/assets/10.png'),
                    title:"直采品牌"
                }
            ],
    
        }
    }
}
</script>
<style scoped lang="scss">
    .nav{
        width: 100%;
        height: 156px;
        display: flex;
        flex-wrap: wrap;
        .content{
            width: 20%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            img{
                width: 55px;
                height: 55px;
            }
            span{
                width:100%;
                text-align: center;
                font-size: 12px;
            }
        }
    }
</style>