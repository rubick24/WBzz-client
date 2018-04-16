<template>
  <main>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="用户uid"
        type="number"
        v-model.number="query"
        @keyup.enter.native="request"
      />
      <div style="text-align:center;padding-top:20px">
        <check-box
          id='cb'
          label='查询地区（耗时较长）'
          v-model="withAddr"
        />
      </div>
    </card>

    <section v-if="tuser && tuser.screen_name" class="target-user">
      <h3>目标用户</h3>
      <media :user="tuser" :isTarget="true"/>
    </section>

    <card v-if="!isLoading && msg.length>0" class="msg">
      Error: {{ msg }}
    </card>

    <section v-if="!isLoading && circle && circle.length > 0">
      <h3>他的好友圈 共{{ circle.length }}人 </h3>
      <div class="container" >
        <media v-for="user in circle" :key="user.uid" :user="user"/>
      </div>
    </section>

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
import CheckBox from './common/CheckBox'

export default {
  name: 'UidCircle',
  components: {
    Card, TextInput, Loading, Media, CheckBox
  },
  data () {
    return {
      query: '',
      isLoading: false,
      withAddr: false,
      msg: ''
    }
  },
  computed: {
    tuser () {
      return this.$store.state.target
    },
    circle () {
      return this.$store.state.circle
    }
  },
  methods: {
    request (e) {
      if (e) {
        e.target.blur()
      }
      let target = this.$store.state.searchResult.find(user => user.uid === this.query)
      if (target) {
        this.$store.commit('setTarget', target)
      } else {
        this.$store.commit('setTarget', {uid: this.query})
      }
      this.isLoading = true
      let self = this
      this.$store.dispatch('getCircle', this.withAddr)
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
    let uid = this.$route.params.uid
    if (uid) {
      this.query = uid
      this.request()
    }
  },
  watch: {
    '$route.params.uid' (newVal, oldVal) {
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
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  .target-user {
    width: 320px;
    margin: 0 auto;
    padding: 20px 0;
  }
  h3 {
    text-align: center;
    margin: 0;
  }
  .msg {
    margin: 20px;
    padding: 20px;
    background: #FF5252;
    color: #FFF;
    text-align: center;
  }
</style>
