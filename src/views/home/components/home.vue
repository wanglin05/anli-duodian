<template>
    <div class="wrap">
        <div class="rank location">
            <div class="left" @click="clk_map">
                <span>*</span>
                <span id="container">{{site}}</span>
            </div>
            <div class="right">
                <span>#</span>
            </div>
        </div>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in bannerList" :key="item.id">
                    <a :href="item.url">
                        <img :src="item.image" alt="" />
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <Nav></Nav>
        <Hot></Hot>
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
import Nav from '@/components/home/nav'
import Hot from '@/components/home/hot'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return{
            bannerList:[],
            swiperOption:{
                speed: 1000,
                autoplay:3000
            },
            list:[],
            pageid:0,
            limit:10,
            site:'',
        }
    },
    components:{
        Nav,
        Hot,
        swiper,
        swiperSlide 
    },
    created () {
        api.banner().then(res=>{
            this.bannerList = res.data;
            console.log(res.bannerList)
        })
        api.getList({
            pageid:this.pageid,
            limit:this.limit
        }).then(res=>{
            let {code,data}=res.data
            this.list = data
            // console.log(res.data)
        })

        this.$nextTick(()=>{
            if(this.$route.params.item){
                let obj = JSON.parse(this.$route.params.item);
                this.site = obj.name;
            }  
        })
    },
    methods:{
        clk_map(){
            this.$router.push('/map')
        }
    },
    mounted(){
        let map = new AMap.Map('');
        AMap.plugin(['AMap.Geolocation'],()=>{
            let Map = new AMap.Geolocation({
                enableHighAccuracy: true,
                timeout: 10000
            });
             map.addControl(Map);
            Map.getCurrentPosition();
            AMap.event.addListener(Map, 'complete', (res)=>{
                this.site = res.formattedAddress;
            });
            AMap.event.addListener(Map, 'error', (err)=>{
                console.log(err)
            });      
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

