<template>
    <section>
        <header>
            <div class="l">
                <img :src="imgArr[item.name]">
                <h3>{{ item.name }}</h3>
            </div>
            <div class="r"><span>{{ item.subtitle }}</span></div>
        </header>
        <main>
            <div class="main-item" v-for="i in item.data" :key="i.index">
                <a :href="i.url" target="_blank"><i>{{ i.index }}</i>{{ i.title }}</a>
                <span>{{ i.hot }}</span>
            </div>
        </main>
        <i class="refresh" @click="refreshFn()"></i>
        <div v-show="item.data.length < 1" class="refdom"></div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    item: any
}>();
const item = ref<any>(props.item);
const tempData = ref<any>({});
const refreshFn = () => {
    tempData.value = item.value.data;
    item.value.data = [];
    setTimeout(() => item.value.data = tempData.value, 1066);
}

const imgArr = ref<any>({});
["虎扑", "虎嗅", "今日头条", "微博", "知乎热榜", "知乎日报", "36氪", "IT之家", "woShiPm", "百度热点", "哔哩哔哩", "抖音", "豆瓣小组",].map(async i => {
    const _ = await import(`../assets/images/${i}.webp`);
    imgArr.value[i] = _.default
})


// 预加载所有图片

</script>

<style scoped lang="less">
@import url('ListItem.less');
</style>