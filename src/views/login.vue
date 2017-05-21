<template>
    <div class="login-wrap">
        <div class="blur"></div>
        <div class="mask"></div>
        <div class="main">
            <div class="logo">
                <h1>ChatIO</h1>
            </div>
            <Form ref="loginForm" :model="loginForm" class="login-form" :rules="loginRule">
                <Form-item prop="username">
                    <Input v-model="loginForm.username" placeholder="请输入用户名" class="input"></Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="请输入密码" class="input"></Input>
                </Form-item>
                <Button type="primary" :long="true" @click="login('loginForm')">登录</Button>
            </Form>
            <a href="javascript:;" class="go-register">新用户注册</a>
            <span class="bottom-msg">登录即代表阅读并同意<a href="#!">服务条款</a></span>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm:{
                username:'',
                password:'12'
            },
            loginRule:{
                username:[
                    {
                        required:true,trigger:'blur',message:'用户名不能为空'
                    }
                ],
                password:[
                    {required:true,trigger:'blur',message:'密码不能为空'},
                    {min:6,max:15,message:'请输入6-15位密码',trigger:'blur'}
                ]
            }
        }
    },
    methods:{
        login(name){
            this.$refs[name].validate((valid)=>{
                if(valid){
                    console.log('ok')
                }else{
                    this.$Notice.error({
                        title:'登录失败',
                        duration:2,
                        desc:'信息填写错误！'
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss">
.login-wrap {
    .blur {
        background: url('../assets/back.jpg') no-repeat;
        background-size: cover;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
    }
    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
    }
    .main {
        height: 100vh;
        position: relative;
        display: flex;
        padding: 1.5rem;
        flex-direction: column;
        .logo {
            margin-top: 5rem;
            h1 {
                color: #fff;
                font-weight: normal;
            }
        }
        .login-form{
            margin-top: 3rem;
            .input{
                input{
                    background: transparent;
                    color:#fff;
                    padding: 1rem 0.5rem;
                }
            }
        }
        .go-register{
            align-self: flex-end;
            display: block;
            margin-top: 1rem;
        }
        .bottom-msg{
            color:#fff;
            align-self: center;
            margin-top: 14.5rem;
        }
    }
}
</style>