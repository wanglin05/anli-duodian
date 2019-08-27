<template>
    <div class="my">
        <div class="wrap">
            <div class="user">
                <div class="left">
                    <h2 v-if="islogin">{{userinfo.nickname}}</h2>
                    <h2 v-else>
                        <router-link style="color:blue;text-decoration: underline;" to="/login">未登录</router-link>
                    </h2>
                    <p>开启美好的一天...</p>
                </div>
                <div class="right" v-if="islogin">
                    <img :src="'http://127.0.0.1:7002'+userinfo.avatar" alt=" " />
                </div>
            </div>
            <div class="order"></div>
            <div class="my-list"></div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            userinfo:''
        }
    },
    computed:{
        ...mapState('user',['islogin']),
    },
    methods:{
        ...mapMutations('user',['isloginFn'])
    },
    created(){
        this.isloginFn();
        let userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
        if(userinfo){
            this.userinfo = userinfo;
        }
        console.log(userinfo)
    }
}
</script>
<style scoped lang="scss">
    .my{
        width: 100%;
        height: 100%;
        background:#fff;
        .user{
            width: 100%;
            height: 132px;
            background:rgb(247, 65, 36);
            padding-bottom: 24px;
            display: flex;
            .left{
                flex: 1;
                padding: 0 20px;
                h2{
                    width:80px;
                    height:28px;
                    margin-top: 28px;
                    font-size:24px;
                    color:#fff;
                    font-weight:500;
                    line-height:28px;
                    margin-bottom: 5px;
                }
                p{
                    font-size: 12px;
                    color:#fff;
                }
            }
            .right{
                width:60px;
                height: 100%;
                display: flex;
                align-items: center;
                img{
                    width: 45px;
                    height: 45px;
                }
            }
        }

    }
</style>