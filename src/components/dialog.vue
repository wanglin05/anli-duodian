<template>
    <div class="dialog">
        <div class="content">
            <h4>请输入验证码</h4>
            <p class="word"><span>6</span>位短信验证码已发送至 <b>{{phone}}</b></p>
            <div class="conts">
                <input type="tel"  maxlength="6" @keyup="inpFn" v-model="code"/>
                <ul class="show-ul">
                    <li :class="`show-li ${numList.length-1==index?'active':''}`" v-for="(i,index) in num" :key="index">{{numList[index]}}</li>
                </ul>
            </div>
            <p class="second"><span v-show="!show">{{count}}</span>秒后可重新发送</p>
            <div class="submit">
                <button @click="loginFn">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    props:{
        phone:{
            type:String
        }
    },
    data(){
        return {
            code:'',
            num:6,
            numList:[],
            show:true,
            count:'',
            timer:null
        }
    },
    methods:{
        inpFn(res){
            if(this.numList.length < 6 && res.key !== "Backspace"){
                this.numList.push(res.key);
            }
            if(res.key === "Backspace"){
                this.numList.pop();
            }
        },
        loginFn(){
            axios.post("/api/user/login",{
                phone:this.phone,
                checkcode:this.code
            }).then(res=>{
                let {code,data}=res.data
                if(code){
                    window.sessionStorage.setItem('userinfo',JSON.stringify(data))
                    this.$router.push("/home")
                }else{
                    alert("输入有误,请重新输入")
                }
            })
        },
        getCode(){
            const TIME_COUNT = 30;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        }  
    },
    created(){
        this.getCode()
    },
}
</script>
<style scoped lang="scss">
    .dialog{
        padding:0 46px;
        .content{
            width: 240px;
            height: 190px;
            background: #fff;
            border-radius: 10px;
            margin-top: 104px;
            padding: 20px;
            h4{
                width:100%;
                height:40px;
                font-size: 20px;
            }
            .word{
                font-size: 12px;
                color:gray;
                span,b{
                    color:black;
                }            
            }
            .conts{
                width:100%;
                height:40px;
                position: relative;
                display: flex;
                margin-top:10px;
                input{
                    width: 100%;
                    height:100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    color: transparent;
                    opacity: 0;
                }
                .show-ul {
                    flex: 1;
                    display: flex;
                    background-color: #fff;
                    border-radius: 5px;
                    .show-li {
                        flex: 1;
                        border: 1px solid #ccc;
                        display: flex;
                        margin-right: 2px;
                        align-items: center;
                        justify-content: center;
                        border-right: 1px solid #ccc;
                    }
                    .active{
                        border:1px solid skyblue;
                    }
                }
            }
            .second{
                font-size: 12px;
                color:#ccc;
                margin:15px 0;
            }
            .submit{
                width:100%;
                height:40px;
                button{
                    width:100%;
                    height:100%;
                    background:orangered;
                    color:white;
                    text-align: center;
                    border-radius: 20px;
                    border:none;
                    outline: none;
                }
            }
        }
    }
</style>