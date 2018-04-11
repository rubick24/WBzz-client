<template>
  <main>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="新浪微博用户名"
        v-model.trim="query"
        @keyup.enter.native="request"
      />
    </card>
    <div class="container" v-show="isLoading">
      <loading/>
    </div>
    <div v-show="!isLoading">
      <div class="container">
        <media v-for="user in result" :key="user.uid" :user="user"/>
      </div>
    </div>
  </main>
</template>
<script>
import TextInput from './common/TextInput'
import Card from './common/Card'
import Loading from './common/Loading'
import Media from './common/Media'
import axios from 'axios'

export default {
  name: 'SearchUser',
  components: {
    TextInput, Card, Loading, Media
  },
  data () {
    return {
      query: '',
      isLoading: false,
      result: []
    }
  },
  methods: {
    request (e) {
      if (e) {
        e.target.blur()
      }
      this.isLoading = true
      let self = this
      let url = '/api/name/' + this.query
      axios.get(url)
        .then((response) => {
          console.log(response.data)
          if (response.data.error === 0) {
            self.result = response.data.data
          }
          self.isLoading = false
        })
        .catch((error) => {
          console.log(error)
          self.isLoading = false
        })
    }
  },
  mounted () {
    let name = this.$route.params.name
    if (name) {
      this.query = name
      this.request()
    }
  },
  watch: {
    '$route.params.name' (newVal, oldVal) {
      if (newVal) {
        this.query = newVal
        this.request()
      }
    }
  }
}
</script>
<style scoped>
  main {
    padding: 40px 20px;
  }
  .input-card {
    width: 30%;
    min-width: 300px;
    padding: 30px;
    margin: 0 auto;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 40px 20px;
    justify-content: center;
    align-items: center;
  }
</style>
