<template>
    <div class="shopList">
        <div class="left">
            <van-checkbox v-model="checked" checked-color="#FE3113"></van-checkbox>
        </div>
        <div class="center">
            <img src="" alt="">
        </div>
        <div class="right">
            <h2>海南空运大菠萝  19</h2>
            <p class="guige">规格：1.2 kg/盒</p>
            <div class="price-count">
                <div class="price">
                    ￥<span>32.5</span>
                </div>
                <div class="count">
                    <button>-</button>
                    <span class="num">0</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api/index'
export default {
    data(){
        return {
            checked:false
        }
    },
    created(){
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        console.log(userinfo)
        api.getShopCar({
            user_id: userinfo.userid
        }).then(res=>{
            console.log(res);
        })
    }
}
</script>
<style scoped lang="scss">
    .shopList{
        width: 100%;
        height: 133px;
        padding: 18px 0;
        display: flex;

        .left{
            width: 40px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .center{
            width: 80px;
            height: 100%;
            margin-left: 10px;
            margin-right: 12px;
            display: flex;
            align-items: center;

            img{
                width: 100%;
                height: 80px;
            }
        }

        .right{
            flex: 1;
            display: flex;
            flex-direction: column;

            h2{
                font-size:16px;
                color:#111;
            }

            .guige{
                font-size: 12px;
                color:#ccc;
                margin: 6px 0;
                padding-left: 5px;
            }

            .self{
                font-size: 8px;
                padding-left: 5px;
                color:#f00;
            }

            .price-count{
                flex: 1;
                padding-right: 10px;
                display: flex;

                .price{
                    font-size: 19px;
                    color:#f00;
                    flex: 1;
                    display: flex;
                    align-items: center;
                }

                .count{
                    display: flex;
                    align-items: center;
                }
            }

            button{
                width: 28px;
                height: 28px;
                border-radius: 50%;
                border: 1px solid #ccc;
                color: #666;
                margin: 0 5px;
                background: fff;
                font-size: 22px;
            }

            .num{
                margin: 3px;
            }
        }
    }
</style>