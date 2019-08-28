<template>
    <div class="shoppingCar">
        <div class="wrap">
            <div v-if="!islogin"><router-link to="/login" style="color:blue">登录</router-link></div>
            <div class="wrapper" v-else>
                <div class="content" ref="slideContent">
                    <SlideList v-for="(item,index) in shopCarList" :key="index" :item="item" @remove_slideList="refresh_slideList">
                        <ShopList :item="item" :index="index"></ShopList>
                    </SlideList>
                </div>
                <div class="sum_footer">
                    <div class="left">
                        <van-checkbox v-model="checked" checked-color="#07c160" @click="clk_all">全选</van-checkbox>
                    </div>
                    <div class="center">
                        合计：<span>￥ {{sum_price}}</span>
                    </div>
                    <div class="right">
                        去结算
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
import ShopList from './components/ShopList'
export default {
    props:{

    },
    components:{
        ShopList
    },
    data(){
        return {
            checked:false
        }
    },
    computed:{
        ...mapState('user',['islogin'])
    },
    methods:{
        ...mapMutations('user',['isloginFn']),
    },
    created(){
        this.isloginFn();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .content{
            flex: 1;
            overflow-y: auto;
        overflow-x: hidden;

        }

        .sum_footer{
            width: 100%;
            height: 49px;
            background:#fff;
            border-radius:0px 0px 5px 5px;
            border:1px solid #fff;
            display: flex;

            >div{
                flex: 1;
                display: flex;
                align-items: center;
            }

            .left{
                font-size:14px;
                .van-checkbox{
                    margin-left: 10px;
                }
            }
            
            .center{
                font-size: 14px;
                font-weight:500;
                justify-content: center;
                color:#222;

                span{
                    font-size: 18px;
                    color:rgb(250, 65, 36);
                }
            }

            .right{
                font-size: 16px;
                color: #fff;
                justify-content: center;
                background:rgb(250, 65, 36);
            }
        }
    }
</style>