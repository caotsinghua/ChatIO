let express=require('express')
let router=express.Router();
let User =require('../models/userModel')
let userHandler=require('../handlers/userHandler')
router.post('/login',function(req,res){
    let logInfo=req.body;
    userHandler.login(logInfo,function(info){
        res.json(info);
    })
})
router.post('/register',function(req,res){
    let regInfo=req.body;
    userHandler.register(regInfo,function(info){
        if(info.success){
            let user=new User({
                username:regInfo.username,
                password:regInfo.password
            })
            user.save(function(err,u){
                if(err){
                    res.json({
                        success:false,
                        msg:'服务器错误'
                    })
                }else if(!u){
                    res.json({
                        success:false,
                        msg:'注册失败'
                    })
                }else{
                    res.json({
                        success:true,
                        msg:'注册成功'
                    })
                }
            })
        }else{
            res.json(info)
        }
    })
})
module.exports=router;