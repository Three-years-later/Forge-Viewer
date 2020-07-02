<template>
  <div class="forgeViewer">
    <forge-vuer
      :getAccessToken = 'myGetTokenMethodAsync'
      :urn = 'myObjectUrn'
      @progress-update-event ="handleProgressUpdated"
      :extensions = "{
        'AnimationExtension': myAnimationExtension
        }"
    />
  </div>
</template>

<script>
import ForgeVuer from 'forge-vuer'
import myAnimationExtension from '../extensions/AnimationExtension/index'

export default {
  components: { ForgeVuer },
  head () {
    return {
      // script: [
      //   {
      //     src: 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.min.js'
      //   } // defer: true
      // ],
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.min.css'
      //   }
      // ]
    }
  },
  data () {
    return {
      myToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJzY29wZSI6WyJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIiwiYnVja2V0OmNyZWF0ZSIsImJ1Y2tldDpyZWFkIl0sImNsaWVudF9pZCI6Im9pSUFrTnJiaW1vZFZ4cUxCQTQ5RXNuQWE5VDk3YUFOIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2p3dGV4cDYwIiwianRpIjoiT3NYVGg2U2xZc0c4NDNqOFZtR0xXZTRrQWV3NDBQcEZaSkJQNHlKSGRXRnZGdXRtMTdDaGw4S2xONnFvMWV0RyIsImV4cCI6MTU5MzU3NzkxM30.u87H2AIKSicc1hjBH-YrN8a6nte8FpPCvJJ7UX98Uqc',
      myObjectUrn: 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6d2ltc3Rlc3RfMjAyMDA2MzBfMDAxL2FnZ3JlZ2F0ZS0xLnJ2dA',
      // extensions: {
      //   AnimationExtension
      // },
      // tokenPkg: {},
      // treeNodePkg: {},
      modelProgress: 0
    }
  },
  methods: {
    myGetTokenMethodAsync: async function (onSuccess) {
      // 应该在此处完成API调用以检索有效令牌。
      // 可能需要实现后端服务。
      // 出于测试目的，可以对有效令牌进行硬编码，但最多可持续1小时（3600秒）
      const token = this.myToken
      const expireTimeSeconds = 3599
      console.log('+++++', onSuccess())
      onSuccess(token, expireTimeSeconds)
    },
    handleProgressUpdated () {
      console.log('加载...')
    }
  }
}
</script>

<style lang="less" scoped>
.forgeViewer {
  // background: #eee;
  border: 1px solid red;
  width: 1000px;
  height: 800px;
}
</style>
