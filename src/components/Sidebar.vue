<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index+item.title">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
<!--                        2级标题-->
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index+subItem.title"
                            >
<!--                                3级标题-->
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem, i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index+threeItem.title"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
// import bus from "../common/bus";
export default {
    data() {
        return {
            // 菜单属性
            items: [
                // {
                //     icon: "el-icon-lx-home",
                //     index: "/dashboard",
                //     title: "系统首页"
                // },

                {
                    icon: "el-icon-lx-copy",
                    index: "/tabs",
                    title: "tab选项卡"
                },
                {
                    icon: "el-icon-lx-calendar",
                    index: "/upload",
                    title: "文件上传"
                }
            ],
            items_teacher:[

                // 自定义部分
                {
                    icon: "el-icon-menu",
                    index: "/teacher/self_info",
                    title: "个人信息"
                },
                // 学生信息
                {
                    icon: "el-icon-menu",
                    title: "学生信息",
                    index:'/teacher/students_details',
                    subs: [
                        {
                            index: "/teacher/students_details",
                            title: "学生信息查询"
                        },
                        {
                            index: "/teacher/students_grades",
                            title: "学生成绩查询"
                        },
                        {
                            index: "/teacher/students_abnormity",
                            title: "异常信息管理"
                        },
                    ]
                },
                // 体测数据
                {
                    icon: "el-icon-menu",
                    title: "体测数据",
                    index: '/teacher/pe_details',
                    subs: [
                        {
                            index: "/teacher/pe_details",
                            title: "体测数据管理"
                        },
                        {
                            index: "/teacher/pe_history",
                            title: "历年数据查询"
                        },
                        {
                            index: "/teacher/pe_abnormity",
                            title: "异常信息管理"
                        },
                    ]
                },
                // 诊断与健康干预
                {
                    icon: "el-icon-menu",
                    index: "/teacher/prescribe",
                    title: "诊断与健康干预",
                    subs: [
                        {
                            index: "/teacher/health_prescribe",
                            title: "健康状况预判"
                        },
                        {
                            index: "/teacher/health_advice",
                            title: "运动建议"
                        },
                    ]
                },
                // 统计健康查询
                {
                    icon: "el-icon-menu",
                    index: "/teacher/statistic",
                    title: "统计查询",
                    subs: [
                        {
                            index: "/teacher/statistic_global",
                            title: "整体统计分析"
                        },
                        {
                            index: "/teacher/statistic_person",
                            title: "个人统计分析"
                        },
                    ]
                },
            ],
            items_student:[
                {
                    icon: "el-icon-menu",
                    index: "/student/pe_details",
                    title: "体测信息"
                },
                {
                    icon: "el-icon-menu",
                    index: "/student/health_feedback",
                    title: "健康反馈信息"
                },
                {
                    icon: "el-icon-menu",
                    index: "/student/self_info",
                    title: "个人信息修改"
                },
            ]
        };
    },
    computed: {
        onRoutes() {
            // 当前激活菜单
            return this.$route.path.replace("/", "");
        },
        collapse(){
            return this.$store.state.collapse
        }
    },
    mounted() {
        // 更改侧边菜单栏目显示内容
        let role=this.$auth.user.role;

        if(role=='teacher'){
           this.items=this.items.concat(this.items_teacher);
        }
        else if(role=='student'){
            this.items=this.items.concat(this.items_student);
        }
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
