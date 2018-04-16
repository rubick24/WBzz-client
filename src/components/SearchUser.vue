<template>
  <main>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="新浪微博用户名"
        type="text"
        v-model.trim="query"
        @keyup.enter.native="request"
      />
    </card>

    <card v-if="!isLoading && msg.length>0" class="msg">
      Error: {{ msg }}
    </card>

    <div v-show="!isLoading && msg.length<1">
      <div class="container">
        <media v-for="user in result" :key="user.uid" :user="user"/>
      </div>
    </div>

    <div class="container" v-show="isLoading">
      <loading/>
    </div>
  </main>
</template>
<script>
import TextInput from './common/TextInput'
import Card from './common/Card'
import Loading from './common/Loading'
import Media from './common/Media'

export default {
  name: 'SearchUser',
  components: {
    TextInput, Card, Loading, Media
  },
  data () {
    return {
      query: '',
      isLoading: false,
      msg: ''
    }
  },
  computed: {
    result () {
      return this.$store.state.searchResult
    }
  },
  methods: {
    request (e) {
      if (e) {
        e.target.blur()
      }
      this.isLoading = true
      let self = this
      this.$store.commit('setNameQuery', this.query)
      this.$store.dispatch('getSearchResult')
        .then((data) => {
          self.msg = ''
          self.isLoading = false
        })
        .catch((error) => {
          console.log(error)
          if (error.response) {
            self.msg = error.response.data.msg
          } else {
            self.msg = error.message
          }
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
  .msg {
    margin: 20px;
    padding: 20px;
    background: #FF5252;
    color: #FFF;
    text-align: center;
  }
</style>
