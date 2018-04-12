<template>
  <main>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="新浪微博用户名"
        type="text"
        v-model.trim="name"
        @keyup.enter.native="toName"
      />
    </card>
    <p style="text-align:center"> 或者<br></p>
    <card class="input-card">
      <text-input
        name="query"
        placeholder="用户uid(微博链接'/u/'后的数字)"
        type="number"
        v-model.number="uid"
        @keyup.enter.native="toUid"
      />
    </card>

  </main>
</template>
<script>
import TextInput from './common/TextInput'
import Card from './common/Card'

export default {
  name: 'Home',
  components: {
    TextInput, Card
  },
  data () {
    return {
      name: '',
      uid: ''
    }
  },
  methods: {
    toName (e) {
      this.$router.push({ name: 'SearchUser', params: { name: this.name } })
    },
    toUid (e) {
      this.$router.push({ name: 'UidCircle', params: { uid: this.uid } })
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
</style>
