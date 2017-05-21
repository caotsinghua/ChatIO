const app = require('express')();
const bodyParser = require('body-parser');
const cookies = require('cookies');
let server = require('http').Server(app);
const io = require('socket.io')(server);
let userNum=0;
//使用中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(function (req, res, next) {
  req.cookies = new cookies(req, res);
  next();
})
//end

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

server.listen(3000, function (err) {
  if (err) {
    throw err;
  }
  console.log('listening on port:3000');
});


io.on('connection', (socket) => {
  userNum++;
  console.log(userNum+'user connect');
  socket.on('disconnect', () => {
    console.log('user disconnect');
    if(userNum>0)
    userNum--;
  })
  socket.on('pushMsg',(msg)=>{//html
      console.log('new:'+msg);
      io.emit('pushMsg',msg)
  })

  socket.on('newMessage',function(msg){
    console.log('newmessage')
    io.emit('newMessage',msg);
  })
})
