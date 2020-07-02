<template>
  <div class="upload">
    <h1>将支持的文件上传到存储桶</h1>
    <form
      action="/api/forge/datamanagement/bucket/upload"
      enctype="multipart/form-data"
      method="post"
    >
      <input type="file" name="fileToUpload" />
      <button type="submit" @click="onSubmit">提交</button>
    </form>
    <p></p>
    <p>支持的格式可以在这里找到：</p>
    <p>
      <a
        target="_blank"
        href="https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations/"
      >https://developer.autodesk.com/en/docs/model-derivative/v2/overview/supported-translations/</a>
    </p>
  </div>
</template>

<script>
// import axios from 'axios'
import Buffer from 'buffer'

export default {
  data () {
    return {
      bucketKey: 'wimstest_20200630_003',
      policyKey: 'persistent'
    }
  },
  mounted () {
    // this.onCreateBucket()
  },
  methods: {
    onSubmit () {
      function toBase64 () {
        // Buffer是Node.js的一部分，用于与TCP流、文件系统操作和其他上下文中的八字节流进行交互。
        return new Buffer(this).toString('base64')
      }
      const multer = require('multer')// 处理文件上传
      const upload = multer({ dest: 'tmp/' })// 将文件保存到本地/tmp文件夹
      console.log(multer, upload)
    }
  }
}
</script>

<style lang="less" scoped>
.upload {
      padding: 2em;
    button {
      background-color: #3252aa;
      color: #fff;
      text-decoration: none;
      padding: 1em;
      border-radius: 2px;
      transition: background-color 0.2s ease;
    }
    button:hover {
      background-color: #ff5800;
    }
    input {
      background-color: #eee;
      padding: 1em;
    }
}
</style>
