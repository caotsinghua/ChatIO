const app = require('express')();
const bodyParser = require('body-parser');
const cookies = require('cookies');
const mongoose = require('mongoose')
let server = require('http').Server(app);
const io = require('socket.io')(server);
const api = require('./router/api')
const cors = require('cors')

let userNum = 0;//在线人数
let onlineUsers={};//在线的socket
//使用中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With']
}));
app.use(function (req, res, next) {
  req.cookies = new cookies(req, res);
  next();
})
//end


//路由
app.use('/api', api)

//
mongoose.connect('mongodb://localhost:27020/chatio', function (err) {
  if (err) {
    console.log('链接数据库失败')
  } else {
    console.log('链接数据库成功')
    server.listen(3000, function (err) {
      if (err) {
        throw err;
      }
      console.log('listening on port:3000');
    });


    io.on('connection', (socket) => {
      let fromUser;
      socket.on('addUser',function(username){//当客户端用户登录的时候触发，否则不触发
        console.log(username+' 登录了')
        if(!onlineUsers.hasOwnProperty(username)){//用户bu存在
          onlineUsers[username]=socket;
          userNum++;
          console.log('新用户加入');//用户增加
        }
        for(pt in onlineUsers){
            console.log('在线用户；');
            console.log(pt+` ${onlineUsers[pt].id}`);
          }
      })
      socket.on('sendMsg',function(msgObj){
            fromUser=msgObj.fromUser;
            let toUser=msgObj.toUser;
            let msg=msgObj.msg;
            let time=msgObj.time;

            console.log(msgObj)
            if(toUser=='group'){

            }else if(onlineUsers.hasOwnProperty(toUser)){//对方在线
              onlineUsers[toUser].emit('to'+toUser,msgObj);
              onlineUsers[fromUser].emit('to'+fromUser,msgObj)//自己
            }else{
              console.log(toUser+'不在线');
              return;
            }
      })
      socket.on('getUser',function(){
        let users=[];
        for(name in onlineUsers){
          if(onlineUsers.hasOwnProperty(name)){
            users.push(name);
          }
        }
        socket.emit('getUser',users);
      })
      // io.clients(function (err, clients) {
      //   if (err) {
      //     throw err;
      //   }
      //   console.log(clients)
      // })
      
      socket.on('disconnect', () => {//断开连接
        //遇到的坑 每次都要删除该socket连接 否则断开重连还是这个socket但是client端socket已经改变
       delete onlineUsers[fromUser] 
        console.log('user disconnect');
        if (userNum > 0)
          userNum--;
      })

      socket.on('newMessage', function (msg) {
        console.log('newmessage')
        io.emit('newMessage', msg);
      })
    })
  }
})
