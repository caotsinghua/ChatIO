<template>
    <div class="users" :users="users">
        <ul class="user-ul">
            <li class="user-li" v-for="(user,index) in users" :key="index" @click="chatTo(user)">
                <img :src="user.avatar" alt="avatar" class="avatar">
                <div>
                    <p class="username">{{user.username}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        props:{
            users:{
                type:Array,
                default:[]
            }
        },
        methods:{
            chatTo(user){
                console.log(user)
                this.$router.push({
                    path:'/chatting',
                    query:{
                        user:user.username
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .users{
        .user-ul{
            list-style: none;
            background: #fff;
            .user-li{
                display: flex;
                padding: 0.5rem;
                align-items: center;
                border-bottom: 1px solid #eee;
                &:first-child{
                    border-top: 1px solid #eee;
                }
                .avatar{
                    height: 2rem;
                    width:2rem;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
                .username{
                    font-size: 1rem;
                }
            }
        }
    }
</style>