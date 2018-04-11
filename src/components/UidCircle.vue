<template>
  <main>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="用户uid"
        v-model.trim="query"
        @keyup.enter.native="request"
      />
      <div style="text-align:center;padding-top:20px">
        <check-box
          id='cb'
          label='查询地区（耗时较长）'
          v-model="with_addr"
        />
      </div>
    </card>
    <div v-if="msg.length>0">
      {{ msg }}
    </div>
    <div class="container" v-show="isLoading">
      <loading/>
    </div>
    <div v-if="!isLoading && tuser.uid">
      <section class="target-user">
        <h3>目标用户</h3>
        <media :user="tuser" :isTarget="true"/>
      </section>
      <section>
        <h3>他的好友圈 共{{ result.length }}人 </h3>
        <div class="container" >
          <media v-for="user in result" :key="user.uid" :user="user"/>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import TextInput from './common/TextInput'
import Card from './common/Card'
import Loading from './common/Loading'
import Media from './common/Media'
import CheckBox from './common/CheckBox'
import axios from 'axios'

export default {
  name: 'UidCircle',
  components: {
    Card, TextInput, Loading, Media, CheckBox
  },
  data () {
    return {
      query: '',
      isLoading: false,
      with_addr: false,
      msg: '',
      tuser: {},
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
      let url = '/api/uid/' + this.query
      if (this.with_addr) {
        url = url + '?with_addr=1'
      }
      console.log(url)
      axios.get(url)
        .then((response) => {
          console.log(response.data)
          if (response.data.error === 0) {
            self.tuser = response.data.data.user
            self.result = response.data.data.circle
          } else {
            self.msg = response.data.msg
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
</style>
