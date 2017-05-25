<template>
  <div id="app">
  <transition
  mode="out-in"
  enter-active-class="animated fadeInRight"
  leave-active-class="animated fadeOutLeft"
  type="animation"
  > 
    <router-view></router-view>
  </transition>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>

</style>
