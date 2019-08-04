<template>
  <div class='home-content'>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'value'
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-content{
}
</style>