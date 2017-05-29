<template>
    <div class="chatting-wrap">
        <header class="header">
            <Row type="flex">
                <Col span="8">
                <a href="javascript:;" class="back-btn" @click="back">
                    <Icon type="chevron-left"></Icon>
                </a>
                </Col>
                <Col span="8">
                <h1 class="room-name">{{toUser.username}}</h1>
                </Col>
                <Col span="8"></Col>
            </Row>
        </header>
        <main class="chat-area">
            <ul class="messages">
                <li :class="{'message':!item.me,'my-message':item.me}" v-for="(item,index) in messages" :key="index">
                    <img :src="item.avatar" class="avatar" />
                    <div class="content">
                        <span>{{item.fromUser}}:</span>
                        <com-Message :msg="item.msg" :me="item.me"></com-Message>
                    </div>
                </li>
            </ul>
        </main>
        <footer>
            <div class="input-wrap">
                <Row>
                    <Col span="20" style="padding:0 0.2rem">
                    <Input v-model="message"></Input>
                    </Col>
                    <Col span="4">
                    <Button type="primary" :disabled="message==''" @click="sendMessage">发送</Button>
                    </Col>
                </Row>
            </div>
        </footer>
    </div>
</template>
<script>
import comMsg from '../components/com-Message.vue'
import apis from '../api.js'
export default {
    data() {
        return {
            fromUser:{
               
            },
            toUser: {
               
            },
            message: '',
            messages: []
        }
    },
    created() {       
        this.init();
        var _this=this;
        this.$socket.on('to'+this.toUser.username,function(msgObj){
            console.log(111)
            _this.pushMessage(msgObj);
        }) 
        this.$socket.on('to'+this.fromUser.username,function(msgObj){
            console.log(222)
            _this.pushMessage(msgObj);
        }) 
       
    },
    beforeRouteEnter(to,from,next){
        console.log('即将进入聊天页面')
        //判断是否已经登录
        if(!apis.readFromLocal().name){//只要localstorage存在用户id就是登录
            next('/login')
        }
        next()
    },
    methods: {
        sendMessage(){
            let msg={};
            msg.toUser=this.toUser.username;
            msg.fromUser=this.fromUser.username;
            msg.avatar=this.fromUser.avatar;
            msg.msg=this.message;
            msg.time=new Date();
            console.log(msg)
            this.message='';
            this.$socket.emit('sendMsg',msg);
        },
        pushMessage(msg){
            if(msg.fromUser==this.fromUser.username){//这里的msg是服务端触发传来的msg，通过判断与本地用户名是否相同，决定渲染方式
                msg.me=true;
            }
            this.messages.push(msg);
        },
        back(){
            this.$router.back()
        },
        init(){
            let query=this.$route.query;
            this.toUser.username=query.user;
            let u=apis.readFromLocal();
            this.fromUser.username=u.name;
        }
    },
    components: {
        'com-Message': comMsg
    }
}
</script>
<style lang="scss" scoped>
    $font-color:#fff;
    .chatting-wrap {
        .header {
            height: 3rem;
            border-bottom: 1px solid #ccc;
            background: linear-gradient(to right, #3091f2, #5cadff);
            position: sticky;
            top: 0;
            .back-btn {
                display: block;
                height: 3rem;
                line-height: 3rem;
                font-size: 1rem;
                color: $font-color;
                padding-left: 0.5rem;
                font-weight: normal;
            }
            .room-name {
                text-align: center;
                line-height: 3rem;
                color: $font-color;
                font-size: 1rem;
                font-weight: normal;
            }
        }
        .chat-area {
            min-height: calc(100vh - 3rem);
            background: #eee;
            .messages {
                padding: 0.4rem;
                .message {
                    display: flex;
                    align-items: center;
                    .avatar {
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                    }
                    .content {
                        display: flex;
                        flex-direction: column;
                        padding-left: 0.5rem;
                        span {
                            color: #000;
                        }
                    }
                }
                .my-message {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    .avatar {
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                        order: 2;
                    }
                    .content {
                        order: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        padding-right: 0.5rem;
                        span {
                            color: #000;
                        }
                    }
                }
            }
        }
        .input-wrap {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.2rem 0;
        }
    }
</style>