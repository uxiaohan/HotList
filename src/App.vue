<template>
  <header>
    <div class="main">
      <a class="logo" href="https://hot.vvhan.com/">
        <img src="https://q1.qlogo.cn/g?b=qq&amp;nk=1655466387&amp;s=640">
        <h1>今日热榜</h1>
      </a>
      <h2>提供各站热榜热搜聚合</h2>
    </div>
  </header>
  <main>
    <header>
      <h2>今日热榜</h2>
    </header>
    <section class="list">
      <ListItem v-for="(i, index) in hotListArr" :key="index" :item="i" />
    </section>
    <footer>
      <p>接口来源： <a href="https://api.vvhan.com/article/hotlist.html"
          target="_blank">https://api.vvhan.com/article/hotlist.html</a></p>
      <p>声明:本站部分资源来自互联网收集,仅供用于学习和交流,请遵循相关法律法规,本站一切资源不代表本站立场,如有侵权、不妥请联系本站站长删除</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ListItem from "@/components/ListItem.vue"
import vh from 'vh-plugin'
const hotListArr = ref<Array<any>>([])
const init = async () => {
  vh.showLoading();
  const res = await fetch('https://api.vvhan.com/api/hotlist/all');
  vh.hideLoading();
  const data = await res.json();
  if (!data.success) return vh.Toast('获取数据失败');
  hotListArr.value = data.data
}

init()

</script>

<style scoped lang="less">
@import url('@/assets/less/main.less');
</style>