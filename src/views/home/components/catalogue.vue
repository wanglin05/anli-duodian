<template>
    <div>
        分类
    </div>
</template>

<script>
import shopType from '@/api/index'
export default {
    data(){
        return{
            catal:[]
        }
    },
    created(){
        shopType.shopType(data).then(res =>{
            console.log(res)
        })
    }
}
</script>

<style>

</style>
