<template>
    <div class="nav">
        <dl v-for="(item,index) in navList" :key="index">
            <dt><img :src="item.img" alt=""></dt>
            <dd>{{item.title}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
data(){
    return {
        navList:[
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

<style  lang="scss" scoped>
@import "@/styles/_mixin.scss";
.wrap{
    flex: 1;
}
.nav{
    display: flex;
    flex-wrap: wrap;
    dl{
        width: 20%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        dt{
            width: 60%;
            height: 60%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            flex: 1;
            width: 100%;
            height: 40%;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
    }
}
</style>
