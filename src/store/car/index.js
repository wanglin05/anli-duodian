import api from '@/api/'
const state = {
    res:{},
    shopcardata:[],
    allPrice:0
};

const reducePrcie = (state)=>{
    return state.shopcardata.reduce((prev,item)=>{
        let {price} = item.shopdata;
        let {count,checked} = item;
        prev += checked ? price * count : 0;
        return prev;
    },0);
}
const mutations = {
    addCar(state,payload){
        state.res = payload
    },
    shoplist(state,payload){
        state.shopcardata = payload.map(item=>{
            item.checked = (state.shopcardata.length && state.shopcardata.find(val=>val.id===item.id).checked) || false;
            return item;
        });
        state.allPrice = reducePrcie(state)
    },
    onecheck(state,payload){
        let {index} = payload;
        state.shopcardata[index].checked = !state.shopcardata[index].checked;
        state.allPrice = reducePrcie(state)
    }
}

const actions = {
    async addCar({commit},{user_id,shop_id}){
        await api.addCar({
            user_id,
            shop_id
        }).then(res=>{
           commit('addCar',res)
        })
    },
    async getShoplist({commit},user_id){
        let {data:shopcardata} = await api.getshopcar({
            user_id
        })
        commit('shoplist',shopcardata);
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}