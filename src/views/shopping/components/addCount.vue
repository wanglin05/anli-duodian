<template>
    <p class="addDel">
        <button class="del"
                :disabled="removeflag"
              @click="countfn(false)">
            <img src="@/assets/del.png"
                 alt=""
                 class="deli">
        </button>
        <span>{{count}}</span>
        <button class="add"
                :disabled="addflag"
              @click="countfn(true)">
            <img src="@/assets/add.png"
                 alt=""
                 class="deli">
        </button>
    </p>
</template>
<script>
import { mapActions } from 'vuex';
import api  from '@/api/';

export default {
    props: {
        count: {
            type: Number,
            default: 1
        },
        user_id: {
            type: String,
            required:true
        },
        shop_id: {
            type: String,
            required:true
        }
    },
    data() {
        return {
           addflag:false,
           removeflag:false
        }
    },
    methods: {
        ...mapActions('car',['addCar','getShoplist']),
        async countfn(flag) {
            if(flag){
                this.addflag = true; 
                await this.addCar({
                    user_id:this.user_id,
                    shop_id:this.shop_id
                });
                await this.getShoplist(this.user_id);
                this.addflag = false;
            }else{
                this.removeflag = true;
                if(this.count <= 1)return; 
                await api.removeCar({
                    user_id:this.user_id,
                    shop_id:this.shop_id
                })
                await this.getShoplist(this.user_id);
                this.removeflag = false;
            }
        }
    }
}
</script>
<style scoped lang="">
</style>