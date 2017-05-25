<template>
    <div class="user-list-wrap">
        <header class="header">
            <Row type="flex">
                <Col span="8">
                <a href="javascript:;" class="avatar">
                    <img :src="me.avatar" alt="avatar">
                </a>
                </Col>
                <Col span="8">
                <h1 class="room-name">联系人</h1>
                </Col>
                <Col span="3" offset="5">
                <a href="javascript:;" class="add" @click="add">添加</a>
                </Col>
            </Row>
        </header>
        <Tabs value="name1">
            <Tab-pane label="好友" name="name1">
                <com-users :users="users"></com-users>
            </Tab-pane>
            <Tab-pane label="群组" name="name2">群组列表</Tab-pane>
        </Tabs>
    </div>
</template>
<script>
import comUsers from '../components/com-users'
export default {
    data() {
        return {
            users: [
                {
                    username: 'me',
                    avatar: 'http://d.5857.com/xgmn_150416/desk_007.jpg'
                }, {
                    username: 'me',
                    avatar: 'http://d.5857.com/xgmn_150416/desk_007.jpg'
                }
            ],
            me: {
                username: 'tssword',
                avatar: 'http://d.5857.com/xgmn_150416/desk_007.jpg'
            }
        }
    },
    components: {
        'com-users': comUsers
    },
    methods: {
        add() {

        }
    }
}
</script>
<style lang="scss">
$font-color:#fff;
.user-list-wrap {
    .header {
        height: 3rem;
        border-bottom: 1px solid #ccc;
        background: linear-gradient(to right, #3091f2, #5cadff);
        position: sticky;
        top: 0;
        .avatar {
            display: block;
            height: 3rem;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            img {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
            }
        }
        .room-name {
            text-align: center;
            line-height: 3rem;
            color: $font-color;
            font-size: 1rem;
            font-weight: normal;
        }
        .add {
            line-height: 3rem;
            display: block;
            color: $font-color;
            font-size: 0.8rem;
            text-align: center;
        }
    }
}
</style>