<template>
  <div id="wrapper">
    <el-container class='wrapper-container'>
      <el-header class='wrapper-header'>
        <div class="drag" v-if="show"></div>
        <div class="logo space-center">
          <i class="el-icon-sugar"></i>
          <i class="el-icon-sugar"></i>
        </div>
        <!-- <div class="operateHistory space-center">
          <i class="el-icon-arrow-left" disabled @click="go(-1)"></i>
          <i class="el-icon-arrow-right" @click="go(1)"></i>
        </div> -->
        <div class="operateWin space-center">
          <i class="el-icon-remove" @click="minimize"></i>
          <i class="el-icon-copy-document" @click="fullScreen"></i>
          <i class="el-icon-error" @click="close"></i>
        </div>
      </el-header>
      <el-aside class="wrapper-aside">
        <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-menu-item :class="{'is-active': currentRouter === item.path}" :index="index" v-for="(item, index) in routes" :key="index" @click='goClk(item.path)'>
            <i :class="item.meta.icon" v-if="item.meta && item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="wrapper-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import routes from '@/router/routes.js'
  export default {
    name: 'electron-vue',
    data () {
      return {
        activeIndex: '0',
        show: true,
        isCollapse: false,
        routes
      }
    },
    computed: {
      currentRouter () {
        return this.$route.path
      }
    },
    methods: {
      // 打开新连接
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      // 关闭当前窗口
      close () {
        const { ipcRenderer } = require('electron')
        ipcRenderer.send('closewin')
      },
      // 最小化当前窗口
      minimize () {
        const { ipcRenderer } = require('electron')
        ipcRenderer.send('minimizeWin')
      },
      // 最大化当前窗口
      fullScreen () {
        const { ipcRenderer } = require('electron')
        ipcRenderer.send('fullwin')
      },
      // 路由跳转
      goClk (path) {
        this.$router.push({
          path
        })
      },
      go (num) {
        this.$router.go(num)
      }
    }
  }
</script>
<style lang='scss'>
@import '@/public/public.scss';
#wrapper{
  .wrapper-header{
    height: 60px;
    line-height: 60px;
    padding: 0 15px;
    background: $bgColor;
    position: relative;
    display: flex;
    .drag{
      -webkit-app-region: drag;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: red;
    }
    .logo, .operateHistory, .operateWin {
      position: relative;
      z-index: 30;
      -webkit-app-region: no-drag;
    }
    .logo{
      i{
        font-size: 32px;
        color: $activeColor;
        transform: rotate(45deg);
      }
    }
    .operateHistory{
      margin-left: 30px;
      i {
        font-size: 22px;
        cursor: pointer;
        color: rgba(255, 255 , 255, 0.8);
        // opacity: 0.8;
      }
      i:nth-child(1) {
        border-radius: 4px 0 0 4px;
      }
      i:nth-child(2) {
        border-radius: 0 4px 4px 0;
      }
    }
    .operateWin{
      position: absolute;
      right: 20px;
      top: 0;
      height: 100%;
      i {
        font-size: 22px;
        margin-left: 3px;
        // font-weight: bold;
        transition: all .1s;
        color: $color;
        opacity: 0.8;
        &:hover{
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
  }
  .wrapper-aside{
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    background-color: $color;
    width: 220px!important;
  }

  .wrapper-main{
    margin-left: 220px;
    overflow: visible;
  }
}
</style>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
