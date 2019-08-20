<template>
    <div class="wrap">
        <div class="rank">
            <p>送至：北京八维研修学院 </p>
            <!-- <Map/> -->
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
                <div class="shopcar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {bannerList,getList} from '@/api/index'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import Map from '@/components/map'
export default {
    data(){
        return{
            bannerList:[],
            navList:[
                {
                    img:'@/assets/1.png',
                    title:"蔬菜每日鲜"
                },
                {
                    img:'@/assets/2.png',
                    title:"肉蛋禽"
                },
                {
                    img:'@/assets/3.png',
                    title:"母婴天地"
                },
                {
                    img:'@/assets/4.png',
                    title:"进店把脉"
                },
                {
                    img:'@/assets/5.png',
                    title:"美通卡"
                },
                {
                    img:'@/assets/6.png',
                    title:"早晚市"
                },
                {
                    img:'@/assets/7.png',
                    title:"品牌汇"
                },
                {
                    img:'@/assets/8.png',
                    title:"领劵中心"
                },
                {
                    img:'@/assets/9.png',
                    title:"支付优惠"
                },
                {
                    img:'@/assets/10.png',
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
        Map,
        swiper,
        swiperSlide
    },    
    created () {
        axios.get("/api/home/banner").then(res=>{
            let {code,data}=res.data
            let curDate=new Date().getTime()
            this.bannerList=data.filter(item=>curDate > new Date(item.start_time)*1 && curDate < new Date(item.end_time)*1)
        })
        getList({
            pageid:this.pageid,
            limit:this.limit
        }).then(res=>{
            let {code,data}=res.data
            this.list=data
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
.banner{
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
            width: 75px;
            height: 60px;
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
</style>

