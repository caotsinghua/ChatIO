import IO from 'socket.io-client'
let url='localhost:3000'
let chat={
    socket:null,
    
    init(){
        this.socket = io.connect(url,{'force new connection': true})
    }
}