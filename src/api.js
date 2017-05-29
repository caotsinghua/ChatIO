import Vue from 'vue'
import IO from 'socket.io-client'
export default {
    login:'http://192.168.137.1:3000/api/login',
    register:'http://192.168.137.1:3000/api/register',
    saveToLocal(user){//存用户信息到本地
        console.log(localStorage)
        localStorage.id=user.id;
        localStorage.name=user.name;
    },
    readFromLocal(){//从本地读取用户信息
        let user={
            id:localStorage.id,
            name:localStorage.name
        }
        return user;
    },
    logOut(){//登出，从本地删除信息
        localStorage.removeItem('id');
        ocalStorage.removeItem('name');
    },
    addUser(username){
        Vue.prototype.$socket=IO('http://192.168.137.1:3000',{'force new connection': true});
        Vue.$socket.emit('addUser',username);
    }
}