<template>
<!--        <router-view></router-view>-->

    <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
            <!--                        keep-alive标签用于保存组件状态 当组件切换时保留历史信息-->
<!--                :include="tagsList"-->
            <keep-alive :max="8" >
                <component :is="Component"/>
            </keep-alive>
        </transition>
    </router-view>

</template>

<script>
    export default {
        name: "pe-main",
        computed: {
            tagsList() {
                    // item.name 是当前路由的名字 在index.js中设置
                    // 如果和当前渲染组件名是一致的话 就可以触发keep-alive缓存机制
                    // 换言之 不一致的话 就不会缓存 进入标签页会重新加载
                    // 但是 这会引发另外一个问题 路由重名
                    // 嗯 是个bug 待解决
                let tags = this.$store.state.tagsList.map(item => item.name);
                    console.log(tags);
                return tags;
            },
        }
    }
</script>

<style scoped>

</style>
