<template>
    <div class="login">
        <myHeader />
        <main class="main">
            <p>手机号登录</p>
            <input type="text" placeholder="手机号" v-model="phone">
            <button type="button" @click="getCheckCode">获取验证码</button>
        </main>
        <Dialog v-if="dialogOpen" :phone="phone"/>
    </div>
</template>
<script>
// import api from '@/api/index'
import Dialog from "@/components/dialog"
import axios from "axios"
export default {
    components: {
        Dialog  
    },
    data () {
        return {
            phone:'',
            dialogOpen:false
        }
    },
    methods:{
        getCheckCode(){
            this.dialogOpen=true
            axios.post("/api/user/checkCode",{
                phone:this.phone
            })
        }
    },
}

</script>
<style scoped lang="scss">
@import "@/styles/_mixin.scss";
.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        height: 44px;
    }
    .main{
        flex: 1;
        padding: 0 26px;
        p{
            font-size: 30px;
            margin: 10px 0 40px 0;
        }
        input{
            width: 100%;
            height: 55px;
            border-bottom: 1px solid #E0E0E0;
            margin-bottom: 52px;
        }
        input::-webkit-input-placeholder{
            color:#ccc;
            font-size: 12px;
        }
        button{
            width: 100%;
            height: 38px;
            border-radius: 19px;
            margin-bottom: 45px;
            border: 0;
            outline: none;
            cursor: pointer;
            background: #FD5830;
            color: #fff;
        }
    }
    .dialog{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 44px;
        background: rgba(0,0,0,.5)
    }
}
</style>