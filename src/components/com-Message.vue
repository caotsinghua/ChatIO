<template>
    <div :class="{'my':me,'message-wrap':!me}">
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:['msg','me']
    }
</script>
<style lang="scss" scoped>
    $other-color:#fff;
    $my-color:#3091f2;
    .message-wrap{
        display: inline-block;
        position: relative;
        max-width:15rem;
        padding: 0.5rem 1rem;
        border: 1px solid #fff;
        background: $other-color;
        border-radius: 15px;
        p{
            width: 100%;
            overflow-wrap: break-word;
        }
        &:before{
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            left: -4px;
            top: 11px;
            border-top:5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid $other-color;
            border-bottom: 5px solid $other-color;
            transform: rotate(135deg);
        }
    }
    .my{
        display: inline-block;
        position: relative;
        max-width:15rem;
        padding: 0.5rem 1rem;
        border: 1px solid #fff;
        background: $my-color;
        border-radius: 15px;
        p{
            width: 100%;
            overflow-wrap: break-word;
            color: #fff;
        }
        &:before{
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            right: -4px;
            top: 11px;
            border-top:5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid $my-color;
            border-bottom: 5px solid $my-color;
            transform: rotate(-45deg);
        }
    }
</style>