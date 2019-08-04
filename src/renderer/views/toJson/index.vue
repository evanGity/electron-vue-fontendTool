<template>
  <div class="json2Wrapper">
    <div class="enterData">
      <vue-json-pretty
        :data="prettyConfig.dataList"
        :showSelectController="prettyConfig.showSelectController"
        :highlightSelectedNode="prettyConfig.highlightSelectedNode"
        :showDoubleQuotes='prettyConfig.showDoubleQuotes'
        :selectOnClickNode='prettyConfig.selectOnClickNode'
        :showLength="prettyConfig.showLength"
        @click="handleClick">
      </vue-json-pretty>
      <div class='drawer-content'>
        <div class="toggle-btn space-center" @click="showToggle = !showToggle"><i class="el-icon-sort"></i></div>
        <div class="toggle-content" v-show="showToggle">
          <el-input
            type="textarea"
            :autosize="{ minRows: 20}"
            placeholder="请输入要校验的数据"
            v-model="iptData"
          />
          <div class="operate">
            <el-button @click="modifyData">Modify</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // vue-json-pretty
  import VueJsonPretty from 'vue-json-pretty'
  export default {
    data () {
      return {
        iptData: '',
        showToggle: true,
        prettyConfig: {
          showLength: true,
          dataList: {
            'l1': {
              'l1_1': [
                'l1_1_1',
                'l1_1_2'
              ],
              'l1_2': {
                'l1_2_1': 121
              }
            },
            'l2': {
              'l2_1': null,
              'l2_2': true,
              'l2_3': {}
            }
          }, // 用来格式化的数据
          showSelectController: true,
          highlightSelectedNode: true,
          showDoubleQuotes: true,
          selectOnClickNode: true
        }
      }
    },
    created () {
      this.iptData = JSON.stringify(this.prettyConfig.dataList, null, 2)
    },
    methods: {
      /**
       * @param path : root data path
       * @param data: json data
      */
      handleClick (path, data) {
        this.showToggle = true
        this.iptData = JSON.stringify(data, null, 2)
      },
      modifyData () {
        this.showToggle = false
        try {
          var data = JSON.parse(this.iptData, null, 2) || {}
        } catch (e) {
          console.log(e)
        }
        if (typeof data === 'object') {
          this.prettyConfig.dataList = data
          this.iptData = JSON.stringify(data, null, 2)
        } else {
          this.prettyConfig.dataList = {}
        }
      }
    },
    components: {
      VueJsonPretty
    }
  }
</script>

<style lang="scss" scoped>
.json2Wrapper{
  position: relative;
  .drawer-content {
    position: absolute;
    top: 0;
    right: 0;
    .toggle-btn{
      width: 45px;
      height: 45px;
      background-color: white;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 10;
      background-color: #ddd;
    }
    .toggle-content{
      position: absolute;
      top: 0;
      right: 0;
      z-index: 5;
      background-color: white;
      padding: 8px;
      min-width: 350px;
      .operate{
        margin-top: 8px;
      }
    }
  }
}
</style>