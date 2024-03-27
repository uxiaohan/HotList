<template>
    <section>
        <header>
            <div class="l">
                <img :src="imgUrl(item.name)">
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
const imgUrl = (name: string) => new URL(`../assets/images/${name}.webp`, import.meta.url).href
</script>

<style scoped lang="less">
@import url('ListItem.less');
</style>