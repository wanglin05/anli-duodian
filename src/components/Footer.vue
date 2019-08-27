<template>
    <div class="footer">
        <router-link tag="div" :to="item.url" class="content" v-for="(item,index) in arr" :key="index" @click="clk_url(index)" :class="{active:$route.path == item.url}">
            <div class="content-top">
                <img :src="item.url == $route.path ?item.img_active:item.img" alt="">
            </div>
            <div class="content-bottom">
                {{item.title}}
            </div>
        </router-link>

    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[
                {
                    title:'首页',
                    url:'/home',
                    img:require('@/assets/home.svg'),
                    img_active:require('@/assets/home(1).svg'),
                },
                {
                    title:'分类',
                    url:'/catalogue',
                    img:require('@/assets/catalogue.svg'),
                    img_active:require('@/assets/catalogue(1).svg'),
                },
                {
                    title:'购物车',
                    url:'/shopping',
                    img:require('@/assets/shopping.svg'),
                    img_active:require('@/assets/shopping(1).svg'),
                },
                {
                    title:'我的',
                    url:'/my',
                    img:require('@/assets/my.svg'),
                    img_active:require('@/assets/my(1).svg'),
                }
            ]
        }
    },
    methods:{
        clk_url(index){
            this.$router.push({
                path:this.arr[index].url
            })
        }
    }
}
</script>
<style scoped lang="scss">
    .footer{
        width: 100%;
        height: 49px;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 2px -6px rgba(0,0,0,0.03);
        border:1px solid rgba(235,235,235,1);
        display: flex;

        .content{
            flex: 1;
            display: flex;
            flex-direction: column;
            font-size: 11px;
            padding-bottom: 3px;

            >div{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .content-top{
                flex: 7;

                img{
                    width: 26px;
                    height: 26px;
                }
            }

            .content-bottom{
                flex: 3;
            } 
        }

        .active{
            color: red;
        }
    }
</style>