<template>
  <card class="media" :class="isTarget?'target':'common'">
      <img v-if="user.profile_image_url" class="avatar" :src="user.profile_image_url">
      <p class="name">
        {{ user.screen_name }}
        <span>{{ user.gender==='m'?'♂':'♀' }}</span>
      </p>
      <p v-if="user.addr">{{ user.addr }}</p>
      <p v-if="user.description">{{ user.description }}</p>
      <p v-if="user.follow_count">关注：{{ user.follow_count }} 粉丝：{{ user.fans_count }} </p>
      <p v-if="isTarget">
        <a :href="userUrl(user.uid)" target="_blank">
          {{ user.gender==='m'?'他':'她' }}的主页
        </a>
      </p>
      <p v-else>
        <a :href="userUrl(user.uid)" target="_blank">{{ user.gender==='m'?'他':'她' }}的主页</a>
        |
        <router-link :to="{ name: 'UidCircle',  params: { uid: user.uid } }">{{ user.gender==='m'?'他':'她' }}的好友圈</router-link>
      </p>
  </card>
</template>
<script>
import Card from './Card'
export default {
  name: 'Media',
  components: {
    Card
  },
  props: {
    user: {
      type: Object
    },
    isTarget: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    userUrl (uid) {
      return 'https://weibo.com/u/' + uid
    }
  }
}
</script>
<style scoped>
  .target {
    width: 320px;
    margin: 20px 0;
    padding: 15px 20px;
  }
  .common {
    width: 240px;
    margin: 10px;
    padding: 15px 10px;
  }
  .media {
    color: #666;
    min-height: 140px;
    text-align: center;
    transition: all 0.5s;
  }
  .media:hover {
    background: #eee;
  }
  .media a {
    text-decoration: none;
  }
  .media a:link, .media a:visited {
    color: #666;
  }
  .media a:hover, .media a:active {
    color: #1abc9c;
  }
  .media > p {
    padding: 5px;
    margin: 0;
  }
  .media .name {
    color: #000;
  }
  .avatar {
    display: block;
    width: 50px;
    height: 50px;
    margin: 5px auto;

    border-radius: 25px;
  }
</style>
