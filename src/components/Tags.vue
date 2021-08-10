<template>
    <div class="tags" v-if="showTags">
<!--        浏览器标签-->
        <ul>
            <li
                class="tags-li"
                v-for="(item,index) in tagsList"
                :class="{'active': isActive(item.path)}"
                :key="index"
            >
                <router-link :to="item.path" class="tags-li-title">{{item.title}}</router-link>
                <span class="tags-li-icon" @click="closeTags(index)">
                    <i class="el-icon-close"></i>
                </span>
            </li>
        </ul>
<!--        标签选项-->
        <div class="tags-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="mini" type="primary">
                    标签选项
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu size="small">
                        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tagsList() {
            return this.$store.state.tagsList;
        },
        showTags() {
            return this.tagsList.length > 0;
        }
    },
    methods: {
        isActive(path) {
            // fullPath 路径一致 即为当前激活标签
            return path === this.$route.fullPath;
        },
        // 关闭单个标签
        closeTags(index) {
            const delItem = this.tagsList[index];
            this.$store.commit("delTagsItem", { index });
            const item = this.tagsList[index]
                ? this.tagsList[index]
                : this.tagsList[index - 1];
            if (item) {
                delItem.path === this.$route.fullPath &&
                    this.$router.push(item.path);
            } else {
                this.$router.push("/");
            }
        },
        // 关闭全部标签
        closeAll() {
            this.$store.commit("clearTags");
            this.$router.push("/");
        },
        // 关闭其他标签
        closeOther() {
            const curItem = this.tagsList.filter(item => {
                return item.path === this.$route.fullPath;
            });
            this.$store.commit("closeTagsOther", curItem);
        },
        // 设置标签 新的路由
        setTags(route) {
            // route 是当前路由对象
            // 决定是否添加新标签的要素是 url路径
            const isExist = this.tagsList.some(item => {
                return item.path === route.fullPath;
            });

            if (!isExist) { // 标签不存在
                // 大于8个标签 关闭第一个标签页
                if (this.tagsList.length >= 8) {
                    this.$store.commit("delTagsItem", { index: 0 });
                }
                //创建标签
                this.$store.commit("setTagsItem", {
                    name: route.meta.cname?route.meta.cname:'', // 该路由渲染的组件名
                    title: route.meta.title,
                    path: route.fullPath  // 从根路径开始的url 标签的唯一标识
                });
            }
        },
        handleTags(command) {
            command === "other" ? this.closeOther() : this.closeAll();
        }
    },
    watch: {
        $route(newValue) {
            // 监听当前页面是否添加tag
            this.setTags(newValue);
        }
    },
    created() {
        this.setTags(this.$route);
        // 关闭当前页面的标签页
        // this.$store.commit("closeCurrentTag", {
        //     $router: this.$router,
        //     $route: this.$route
        // });
    }
};
</script>


<style>
.tags {
    position: relative;
    height: 30px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;
}

.tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
    background: #f8f8f8;
}

.tags-li.active {
    color: #fff;
}

.tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
}

.tags-li.active .tags-li-title {
    color: #fff;
}

.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
</style>
