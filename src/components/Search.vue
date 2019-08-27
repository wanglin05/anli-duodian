<template>
   <div class="search">
        <input type="text" placeholder="搜索商品" name="" id="" v-model="val" @input="change_val">
    </div>
</template>
<script>
export default {
    data(){
        return {
            val:''
        }
    },
    methods:{
        change_val(){
            this.$emit('change_val',this.val)
        }
    }
}
</script>
<style scoped lang="scss">
    .search{
        width: 100%;
        height: 100%;
        border-radius:16px;
        background:rgba(246,246,246,1);
        padding-left: 30px;

        input{
            width: 100%;
            height: 100%;
            font-size: 12px;
        }
    }
</style>