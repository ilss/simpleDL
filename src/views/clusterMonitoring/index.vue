/*
 * @Author: aFei
 * @Date: 2018-12-10 15:52:29
 */
/*
* @LastEditors: aFei
* @LastEditTime: 2018-12-31 17:06:33
*/
<template>
  <transition name="fade-transform"
              mode="out-in">
    <router-view>
    </router-view>
  </transition>
</template>

<script>
export default {
  name: 'index',
  methods: {
    showNavigate (name) {
      let arr = ['nodeControlDetail', 'namespacesDetail'] // 显示按钮的页面name
      if (arr.indexOf(name) !== -1) {
        this.$emit('showNavigate', true)
      } else {
        this.$emit('showNavigate', false)
      }
    }
  },
  created () {
    this.showNavigate(this.$route.name)
  },
  beforeRouteUpdate (to, from, next) {
    this.showNavigate(to.name)
    next()
  }
}
</script>
