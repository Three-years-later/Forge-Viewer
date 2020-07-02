<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="forgeViewer"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    const viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv)
    const options = {
      env: 'AutodeskProduction',
      api: 'derivativeV2', // 对于上传到EMEA的模型，将此选项更改为'derivativeV2_EU'
      getAccessToken: function (onTokenReady) {
        const token = 'eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJzY29wZSI6WyJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OnJlYWQiLCJkYXRhOnJlYWQiLCJkYXRhOndyaXRlIl0sImNsaWVudF9pZCI6Ikp2Vk40bzdBQ0V0ZE81TVpnZ21QMk9WM1RoNFJnRW54IiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2p3dGV4cDYwIiwianRpIjoiMXBQcVhxOFBZVVU0WmtpTURsaGpUSUxCM3I1UEpBWk9kbTY4dTY2R1ZjajhDY3VzYjB3VFVId0E3emZPVk5JRCIsImV4cCI6MTU4ODIzNDEwOX0.zmY_BFmoZgL4TbtSVyTWKlrFdImEKbQTUsfQxBjsPV4'
        const timeInSeconds = 3600// 使用Forge身份验证（OAuth）API提供的值
        onTokenReady(token, timeInSeconds)
      }
    }
    Autodesk.Viewer.Initializer (options, function () {
      const htmlDiv = document.getElementById('forgeViewer')
      const startedCode = viewer.start()
      if (startedCode > 0) {
        console.error('Failed to create a Viewer: WebGL not supported.')
      }
      console.log('初始化完成，接下来加载模型...')
    })
    var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6ZmFjaWxpb25ld2NsaWVudGJ1Y2tldC9yYWNfYWR2YW5jZWRfc2FtcGxlX3Byb2plY3QucnZ0'
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure)
  },
  methods: {
    onDocumentLoadSuccess: function (viewerDocument) {
      var defaultModel = viewerDocument.getRoot().getDefaultGeometry()
      viewer.loadDocumentNode(viewerDocument, defaultModel)
      viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, event => {})
    },
    onDocumentLoadFailure: function () {
      console.error('Failed fetching Forge manifest')
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
