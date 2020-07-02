<template>
  <div class="bucketdetails">
    <div class="main" @click="onBucketDetails">这里是桶详情页</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      bucketKey: 'wimstest_20200630_002',
      policyKey: 'persistent'
    }
  },
  mounted () {
    // this.onCreateBucket()
  },
  methods: {
    onBucketDetails () {
      const formData = JSON.stringify({
        bucketKey: this.bucketKey,
        policyKey: this.policyKey
      })
      const token = localStorage.getItem('access_token')
      console.log(formData)
      axios({
        method: 'GET',
        url: 'https://developer.api.autodesk.com/oss/v2/buckets/' + encodeURIComponent(this.bucketKey) + '/details',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        console.log(res)
        this.$router.push('/api/forge/datamanagement/bucket/upload')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bucketdetails {
  padding: 2rem;
  .main {
    background-color: #3252aa;
    color: #fff;
    text-decoration: none;
    padding: 1em;
  }
}
</style>
