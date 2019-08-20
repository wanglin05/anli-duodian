<template>
    <div class="wrap">
        <div class="rank">
            <p>送至：北京八维研修学院 </p>
        </div>
        <div class="banner">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for="item in bannerList" :key="item.id">
                    <a :href="item.url">
                        <img :src="item.image" alt="" />
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <div class="nav">
            <dl v-for="(item,index) in navList" :key="index">
                <dt><img :src="item.img" alt=""></dt>
                <dd>{{item.title}}</dd>
            </dl>
        </div>
        <div class="list">
            <div v-for="(item,index) in list" :key="index">
                <dl>
                    <dt>
                        <img :src="item.cover" alt="">
                    </dt>
                    <dd>
                        <h4>{{item.name}}</h4>
                        <p><span>累计{{(item.volume/10000).toFixed(1)}}万份</span>/<span>已拼{{item.stock}}份</span></p>
                        <p><span>自营</span><span>团购</span></p>
                        <p>￥{{item.price}}</p>
                    </dd>
                </dl>
                <div class="shopcar">购</div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return{
            bannerList:[],
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
            swiperOption:{
                spaceBetween:30,
                centeredSlides:true,
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                }
            },
            list:[],
            pageid:0,
            limit:10
        }
    },
    props: {
        msg: String
    },
    components:{
        swiper,
        swiperSlide
    },    
    created () {
        api.banner().then(res=>{
            this.bannerList = res.data;
        })
        api.getList({
            pageid:this.pageid,
            limit:this.limit
        }).then(res=>{
            let {code,data}=res.data
            this.list = data
            console.log(res.data)
        })
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
.wrap{
    flex: 1;
}
.rank{
    font-size: 12px;
    color: #999;
}
.banner{
    width: 100%;
    height: 150px;
    background: #eee;
    .swiper-container{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%; 
        }
    }
}
.nav{
    display: flex;
    flex-wrap: wrap;
    dl{
        width: 20%;
        height: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
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
            font-size: 12px;
            color: #999;
        }
    }
}
.list{
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #eee;
    position: relative;
    dl{
        width: 100%;
        height: 150px;  
        display: flex;
        dt{
            width: 120px;
            height: 120px;
            margin: 15px;
            img{
                width: 120px;
                height: 120px;
            }
        }
        dd{
            flex: 1;
            margin-top: 15px;
            h4{
                width: 200px;
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            p{
                margin: 6px 0;
                color: #999;
                span{
                    font-size: 12px;
                    margin: 0 3px;
                }
                &:nth-child(3){
                    margin-bottom: 30px;
                    span{
                        width: 60px;
                        height: 24px;
                        background: #FE3113;
                        padding: 2px 4px;
                        border-radius: 7px;
                        font-size: 8px;
                        color: #fff;
                    }
                }
                &:last-child{
                    color: #FE3113;
                    font-weight: bold;
                }
            }
        }
    }
    .shopcar{
        width: 33px;
        height: 33px;
        border-radius: 50%;
        background: #FE3113;
        color: #fff;
        position: absolute;
        right: 15px;
        bottom: 15px;
        text-align: center;
        line-height: 33px;
    }
}
</style>

