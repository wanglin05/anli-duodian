<template>
    <SlideDel v-if="showCar=='showCar'"
              :shopid='shopid'>

        <dl class="itemList"
            data-type="3">
            <div class="check">
                <span :class='["check_radio",checked ? "active" : ""]'
                      @click="addclass">
                </span>
            </div>
            <dt class="itemdt">
                <img :src="cover"
                     alt=""
                     class="imgf">
            </dt>
            <dd class="itemdd">
                <li class="li">{{name1}}</li>
                <li class="vol">累计{{volume}}件</li>
                <li class="orgin">
                    <span>自营</span>
                    <span>团购</span>
                </li>
                <li class="price"><span class="sppr"><span class="vol">￥</span>{{price}}</span>
                    <slot></slot>
                </li>
            </dd>
        </dl>
    </SlideDel>
    <dl v-else
        class="itemList">
        <dt class="itemdt">
            <img :src="cover"
                 alt=""
                 class="imgf">
        </dt>
        <dd class="itemdd">
            <li class="li">{{name1}}</li>
            <li class="vol">累计{{volume}}件</li>
            <li class="orgin">
                <span>自营</span>
                <span>团购</span>
            </li>
            <li class="price"><span class="sppr"><span class="vol">￥</span>{{price}}</span>
                <slot></slot>
            </li>
        </dd>
    </dl>
</template>
<script>
import {
    mapMutations
} from 'vuex'
export default {
    props: {
        category_id: {
            type: String
        },
        cover: {
            type: String
        },
        id: {
            type: Number
        },
        name1: {
            type: String
        },
        pictures: {
            type: String
        },
        price: {
            type: Number
        },
        specs: {
            type: String
        },
        stock: {
            type: Number
        },
        type_id: {
            type: String
        },
        volume: {
            type: Number
        },
        showCar: {
            type: String
        },
        shopid: {
            type: String
        },
        checked: {
            type: Boolean
        },
        index:{
            type:Number
        }
    },
    components: {

    },
    data() {
        return {
            flag: false
        }
    },
    computed: {

    },
    methods: {
        ...mapMutations('car',['onecheck']),
        addclass(){
            this.onecheck({
                index:this.index
            })
        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped lang="">
</style>