<template>
    <div class="banner">
       <swiper :options="swiperOption">
            <swiper-slide v-for="item in data" :key="item.id">
                <a :href="item.url">
                    <img :src="item.image">
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import api from '@/api/index'
export default {

    data(){
        return {
            data:[],
            swiperOption: {
                autoplay: 2000,
                speed: 1000,
            }
        }
    },
    created(){
        api.banner().then(res=>{
            this.data = res.data;
        })
    }
}
</script>
<style scoped lang="scss">
    .banner,.swiper-container{
        width: 100%;
        height: 154px;

        img{
            width: 100%;
            height: 100%;
        }
    }
</style>