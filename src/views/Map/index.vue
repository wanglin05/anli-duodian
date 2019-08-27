<template>
    <div class="wraphom mapaaa">
        <MyHeader>校园超市</MyHeader>
        <div class="main">
            <div class="search">
                <div class="choise-city">
                    北京>
                </div>
                <div class="search-inp">
                    <input type="text"
                           v-model="val"
                           placeholder="搜索地址"
                           class="inpa">
                </div>
                <div class="city-box">
                    <li v-for="(item,index) in list"
                        @click="localfn(item)"
                        :key="index">{{item.name}}</li>
                </div>
            </div>
            <div class="loction">定位到当前位置</div>
            <div class="his-position"
                 @click="mainfn">
                <div class="his-title">
                    历史记录
                </div>
                <div class="his-list">
                    <div class="his-item">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    getPlugin
} from '@/uitl/map/'
import { mapMutations } from "vuex"
export default {
    props: {

    },
    components: {

    },
    data() {
        return {
            val: '',
            map: null,
            list: []
        }
    },
    computed: {

    },
    methods: {
        ...mapMutations('info', ["setlocal"]),
        mainfn() {
            this.list = ""
        },
        localfn(item) {
            this.setlocal(item.name)
            this.$router.push({ name: 'home', query: item.name })
        }
    },
    created() {

    },
    async mounted() {
        this.map = await getPlugin('AMap.Autocomplete', {
            city: '北京'
        })
    },
    watch: {
        val(val) {
            if (val.length == 0) {
                this.list = ""
            }
            this.map.search(val, (status, result) => {
                console.log(result)
                switch (status) {
                    case 'no_data':
                        alert('暂无地址')
                        return
                    case "complete":
                        this.list = result.tips
                }
            })
        }
    }
}
</script>
<style scoped lang="postcss">
</style>