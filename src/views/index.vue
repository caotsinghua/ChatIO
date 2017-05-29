<template>
    <div class="index-wrap">
        <div class="title">
            <h1>ChatIO,</h1>
            <h1>one 辣鸡 appliaction</h1>
        </div>
    </div>
</template>
<script>
import apis from '../api.js'
export default {
    data() {
        return {

        }
    },
    beforeRouteEnter(to,from,next){
        next();
        if(apis.readFromLocal().name){//每次进入应用判断是否已经登录
            next('/userlist')
            return;
        }
        setTimeout(function(){
            next('/login')
        },2000)
    },
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.index-wrap {
    width: 100%;
    height: 100vh;
    padding: 1px;
    background: url('../assets/back.jpg') no-repeat;
    background-size: cover;
    .title {
        margin-top: 5rem;
        padding: 2rem;
        h1 {
            color: #fff;
            font-weight: normal;
            &:last-child{
                margin-left: 5rem;
            }
        }
    }
}
</style>