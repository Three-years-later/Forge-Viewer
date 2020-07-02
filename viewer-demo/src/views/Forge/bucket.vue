<template>
  <div class="bucket">
    <div class="main" @click="onCreateBucket">创建桶</div>
  </div>
</template>

<script>
import axios from 'axios'

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
    onCreateBucket () {
      const formData = JSON.stringify({
        bucketKey: this.bucketKey,
        policyKey: this.policyKey
      })
      const token = localStorage.getItem('access_token')
      console.log(formData)
      axios({
        method: 'POST',
        url: 'https://developer.api.autodesk.com/oss/v2/buckets',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + token
        },
        data: formData
      }).then(res => {
        console.log(res)
        this.$router.push('/api/forge/datamanagement/bucket/detail')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bucket {
  padding: 2rem;
  .main {
    background-color: #3252aa;
    color: #fff;
    text-decoration: none;
    padding: 1em;
  }
}
</style>
