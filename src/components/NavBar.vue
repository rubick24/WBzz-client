<template>
    <nav class="nav-bar">
      <router-link class="app-bar" to="/">
        <h2>微博好友圈查询</h2>
      </router-link>
      <ul class="nav-links">
        <li><router-link :to="{ name: 'SearchUser' }">搜索用户</router-link></li><!--
     --><li><router-link :to="{ name: 'UidCircle' }">uid查找</router-link></li><!--
     -->
      </ul>
    </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  .nav-bar {
    background: #FFF;
    color: #666;
    height: 60px;
    line-height: 60px;
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .app-bar {
    padding: 0 15px;
    text-decoration: none;
    color: #000;
    transition: color 0.3s;
  }
  h2 {
    display: inline;
    font-size: 1.2em;
  }
  .nav-links {
    display: inline;
    list-style: none;
    padding: 0;
    overflow: auto;
  }
  .nav-links > li {
    display: inline;
    padding: 20px 0;
    transition: all 0.3s;
  }
  .nav-links > li:hover {
    background: #ddd;
    color: #1abc9c;
  }
  .nav-links a {
    display: inline-block;
    text-decoration: none;
    padding: 0 10px;
  }
  .nav-links a:link, .nav-links a:visited {
    color: #666;
  }
  .nav-links a:hover, .nav-links a:active {
    color: #1abc9c;
  }
</style>
