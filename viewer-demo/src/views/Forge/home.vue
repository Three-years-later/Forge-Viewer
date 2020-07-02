<template>
  <div class="home">
    <div class="main" @click="onOauth">Authorize me!</div>
  </div>
</template>

<script>
import { getForgeAccessToken } from '../../api/forge'

export default {
  data () {
    return {
      FORGE_CLIENT_ID: 'oiIAkNrbimodVxqLBA49EsnAa9T97aAN',
      FORGE_CLIENT_SECRET: 'JOVipq6ZGJlLJUBl',
      type: 'client_credentials',
      scopes: 'data:read data:write data:create bucket:create bucket:read'
    }
  },
  methods: {
    onOauth () {
      const FORGE_CLIENT_ID = this.FORGE_CLIENT_ID
      const FORGE_CLIENT_SECRET = this.FORGE_CLIENT_SECRET
      const querystring = require('querystring')
      const formData = querystring.stringify({
        client_id: FORGE_CLIENT_ID,
        client_secret: FORGE_CLIENT_SECRET,
        grant_type: this.type,
        scope: this.scopes
      })
      console.log('+++++++++', formData)
      getForgeAccessToken(formData)
        .then(response => {
          console.log(response)
          const AccessToken = response.access_token
          localStorage.setItem('access_token', AccessToken)
          // this.$store.commit("getAccessToken",access_token)
          this.$router.push('/api/forge/datamanagement/bucket/create')
        })
      // this.$router.push('/api/forge/datamanagement/bucket/create')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding: 2rem;
  .main {
    background-color: #3252aa;
    color: #fff;
    text-decoration: none;
    padding: 1em;
  }
}
</style>
