<template>
    <div class="shoppingCar">
        <div class="wrap">
            <div v-if="!islogin"><router-link to="/login" style="color:blue">去登录</router-link></div>
            <MyList v-for="(item,index) in shopcardata"
                    :key="index"
                    :index="index"
                    :category_id="item.shopdata.category_id"
                    :cover="item.shopdata.cover"
                    :id="item.shopdata.id"
                    :name1="item.shopdata.name"
                    :pictures="item.shopdata.pictures"
                    :price="item.shopdata.price"
                    :specs="item.shopdata.specs"
                    :stock="item.shopdata.stock"
                    :type_id="item.shopdata.type_id"
                    :shopid="item.shopid"
                    :showCar="'showCar'"
                    :checked="item.checked"
                    :volume="item.shopdata.volume">

                <AddCount :count="item.count"
                          :user_id="item.userid"
                          :shop_id="item.shopid">
                </AddCount>

            </MyList>
            <div class="allprice">
                <div class="allche">
                    <span :class='["allcheckbtn",(allchecka || flag) ? "active" : ""]'></span>
                    <span class="allcheck">全选</span>
                </div>
                <div class="allprc">
                    <span class="allcount">合计</span>
                    <span>￥{{allPrice}}</span>
                </div>
                <div class="gopay">
                    <span class="gopay_pay">去结算({{0}})</span>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex';
import api from '@/api/index'
import MyList from './components/MyList'
import AddCount from './components/addCount'
export default {
    components:{
        MyList,
        AddCount
    },
    data(){
        return {
            flag: false,
            loginFlg:true
        }
    },
    computed:{
        ...mapState('info', ['userinfo']),
        ...mapState('car', ['shopcardata','allPrice']),
        allchecka() {
            return this.shopcardata.every(item => item.checked === true)
        }
    },
    methods:{
        ...mapActions('info',['getuserinfo']),
        ...mapActions('car',['getShoplist'])
    },
    async activated(){ 
        await this.getuserinfo();
        this.loginFlg = false;
    },
    async mounted() {
        await this.getuserinfo();
        this.loginFlg = false;
        await this.getShoplist(this.userinfo.uid);
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
            overflow: auto;
        }

        .sum_footer{
            width: 100%;
            height: 49px;
            background:rgba(255,255,255,1);
            border-radius:0px 0px 6px 6px;
            border:1px solid rgba(237,237,237,1);
            display: flex;

            >div{
                flex: 1;
                display: flex;
                align-items: center;
            }

            .left{
                font-size:13px;

                .van-checkbox{
                    margin-left: 10px;
                }
            }
            
            .center{
                font-size: 14px;
                font-weight:500;
                justify-content: center;
                color:rgba(17,17,17,1);

                span{
                    font-size: 18px;
                    color:rgba(254,49,19,1);
                }
            }

            .right{
                font-size: 16px;
                color: white;
                justify-content: center;
                background:rgba(255,64,54,1);
                box-shadow:0px 1px 1px 0px rgba(255,64,54,0.2);
            }
        }
    }
</style>