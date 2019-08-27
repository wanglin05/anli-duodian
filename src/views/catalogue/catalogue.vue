<template>
    <div class="type">
        <!-- 搜索 -->
        <div class="searchBox">
            <Search></Search>
        </div>
        
        <div class="wrap">
            <div class="content">
                <div class="left">
                    <p v-for="(item,index) in typeArr" :key="item.id" :class="{left_active:ind==index}" @click="clkLeft(index)">
                        {{item.title}}
                    </p>
                </div>
                <div class="right">
                    <p class="right-header">
                        <span :class="{span_active:Rind==-1}" @click="clkAll">全部</span>
                        <span v-for="(item,index) in rightType" :key="item.id" :class="{span_active:index==Rind}" @click="clkRight(index)">{{item.name}}</span>
                    </p>
                    <div class="right-content">
                        <ProtoPullLoading @scroll="upload">
                            <List v-for="(item,index) in arr" :key="index" :item="item" className="smlist"></List>
                        </ProtoPullLoading>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import api from '@/api/index'
import Search from './components/Search'
export default {
    name:'type',
    props:{

    },
    components:{
        Search
    },
    data(){
        return {
            ind:0,
            Rind:-1,
            typeArr:[],
            rightType:[],
            arr:[],
            limit:5,
            page:0
        }
    },
    computed:{

    },
    methods:{
        clkLeft(index){
            this.ind = index;
            this.rightType = this.typeArr[index].children;
            this.getList();
        },
        clkRight(index){
            this.Rind = index;
            this.getList();
        },
        clkAll(){
            this.Rind = -1;
            this.getList();
        },
        getList(){
            let LActive = this.typeArr[this.ind];
            let RActive = this.rightType[this.Rind];
            let obj = {};

            obj = RActive ? {
                type_id: LActive.id,
                category_id: RActive.id,
                limit: this.limit,
            } : {
                type_id: LActive.id,
                limit: this.limit,
            }
            
            api.shopList(obj).then(res=>{
                this.arr = res.data;
            })
        },
        upload(){
            this.page++;
            let LActive = this.typeArr[this.ind];
            let RActive = this.rightType[this.Rind];
            let obj = {};

            obj = RActive ? {
                type_id: LActive.id,
                category_id: RActive.id,
                limit: this.limit,
                pageid: this.page
            } : {
                type_id: LActive.id,
                limit: this.limit,
                pageid: this.page
            }
            api.shopList(obj).then(res=>{
                this.arr = this.arr.concat(res.data);
            })
        }
    },
    created(){
        this.$nextTick(()=>{
            api.shopType().then(res=>{
                this.typeArr = res.data;
                this.rightType = this.typeArr[0].children;
                this.getList();
            })
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .type{
        width: 100%;
        height: 100%;

        .searchBox{
            width: 100%;
            height: 49px;
            background:rgba(255,255,255,1);
            border-bottom:1px solid rgba(237,237,237,1);
            padding: 8px 15px;
        }

        .content{
            width: 100%;
            height: 100%;
            display: flex;
        }

        .content .left{
            width: 86px;
            height: 100%;
            background:rgba(250,250,250,1);
            overflow: auto;

            p{
                width: 100%;
                height: 50px;
                font-size:12px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .left_active{
                color: red;
            }
        }
        .content .right{
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            .right-header{
                width: 100%;
                height: 27px;
                border-bottom: 1px solid #eee;
                font-size:12px;
                display: flex;
                align-items: center;
                overflow-x: auto;
                white-space: nowrap;
                span{
                    padding: 0 10px;
                    color: #999999
                }
                .span_active{
                    color: black;
                    font-size: 13px;
                }
            }
            .right-content{
                flex: 1;
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }
</style>