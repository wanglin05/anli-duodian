<template>
   <div class="search">
        <input type="text" placeholder="搜索超市商品" v-model="iptVal" @input="changeVal">
    </div>
</template>
<script>
export default {
    props:{
        val:{
            default:'',
        }
    },
    data(){
        return {
            iptVal:''
        }
    },
    methods:{
        changeVal(){
            this.$emit('changeVal',this.iptVal)
        }
    },
    created(){
        if(this.val){
            this.iptVal = this.val;
        }
    }
}
</script>
<style scoped lang="scss">
    .search{
        width: 100%;
        height: 100%;
        border-radius:16px;
        background:#ffff;
        padding-left: 30px;

        input{
            width: 100%;
            height: 100%;
            font-size: 12px;
        }
    }
</style>