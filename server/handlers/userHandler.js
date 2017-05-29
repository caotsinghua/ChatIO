let User=require('../models/userModel')
let userHandler={
    login(user,callback){
        if(!user.username||!user.password){
            return callback({
                success:false,
                msg:'用户名密码不能为空',
                data:{user:null}
            })
        }else{
            User.findOne({
                username:user.username
            },function(err,u){
                if(err){
                    return callback({
                        success:false,
                        data:{
                            user:null
                        },
                        msg:'服务器出错'
                    })
                }else if(!u){
                    return callback({
                        success:false,
                        data:{user:null},
                        msg:'没有此用户'
                    })
                }else if(u.password!=user.password){
                    console.log(u)
                    return callback({
                        success:false,
                        data:{user:null},
                        msg:'密码错误'
                    })
                }else{
                    return callback({
                        success:true,
                        data:{user:{
                            id:u._id,
                            name:u.username
                        }},
                        msg:'登录成功'
                    })
                }
            })
        }
    },
    register(user,callback){
        User.findOne({
            username:user.username
        },function(err,u){
            if(err){
                return callback({
                    success:false,
                    msg:'服务器出错'
                })
            }else if(u){
                return callback({
                    success:false,
                    msg:'用户已存在'
                })
            }else if(user.password!=user.repassword){
                return callback({
                    success:false,
                    msg:'两次密码不一致'
                })
            }else{
                return callback({
                    success:true,
                    msg:'校验成功',
                    data:{user:user}
                })
            }
        })
    }
}

module.exports=userHandler