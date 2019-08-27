<template>
    <div class="home">
        <div class="wrap">
            <ProtoPullLoading @scroll="upload">
                
                <div class="location">
                    <div class="left" @click="clk_map">
                        <img src="@/assets/rank.svg" alt="">
                        <span id="container">{{site}}</span>
                    </div>
                </div>

                <Banner />

                <Nav />

                <Hot />
                
                <List v-for="(item,index) in data" :key="index" :item="item" className="list"></List>
            </ProtoPullLoading>
        </div>
        <Footer />
    </div>
</template>
<script>
import api from '@/api/index'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Hot from './components/Hot'
export default {
    components:{
        Banner,
        Nav,
        Hot
    },
    data(){
        return {
            data:[],
            page:0,
            limit:10,
            site:'',
            pageid:0
        }
    },
    methods:{
        getData(){
            api.getShop({
                pageid: this.page,
                limit: this.limit
            }).then(res=>{
                this.data = res.data;
            })
        },
        upload(){
            this.limit += 10;
            this.getData();
        },
        clk_map(){
            this.$router.push('/map')
        }
    },
    created(){
        this.getData();

        this.$nextTick(()=>{
            if(this.$route.params.item){
                let obj = JSON.parse(this.$route.params.item);
                this.site = obj.name;
            }  
        })
     },
    mounted(){
        let map = new AMap.Map('');
        AMap.plugin(['AMap.Geolocation'],()=>{
            let Map = new AMap.Geolocation({
                enableHighAccuracy: true,
                timeout: 10000,  
             
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
<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        .location{
            width: 100%;
            height: 50px;
            display: flex;

            .left{
                flex: 1;
                display: flex;
                align-items: center;
                padding-left: 5px;
                img{
                    width: 30px;
                    height: 30px;
                }
            }

            .right{
                width: 30px;
                height: 100%;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>