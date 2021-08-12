import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";


// const Loginnn = () => import('../views/Loginnn')

const routes = [
    {
        path: '',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            title: '新闻页'
        },
        component: () => import (/* webpackChunkName: "403" */
            '../views/News.vue')
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [

            // {
            //     path: "/dashboard",
            //     name: "dashboard",
            //     meta: {
            //         title: '系统首页'
            //     },
            //     component: () => import (
            //         /* webpackChunkName: "dashboard" */
            //         "../views/Dashboard.vue")
            // },
            {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import (
                    /* webpackChunkName: "tabs" */
                    "../views/Tabs.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import (
                    /* webpackChunkName: "permission" */
                    "../views/Permission.vue")
            }, {
                path: "/upload",
                name: "Upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import (
                    /* webpackChunkName: "upload" */
                    "../views/Upload.vue")
            },

            // 教师端
            {
                path: 'teacher/',
                component: () => import (/* webpackChunkName: "403" */
                    '../views/PEMain'),
                meta: {
                    require_role: 'teacher',
                },
                children: [
                    {
                        path: '',
                        component: () => import (/* webpackChunkName: "403" */
                            '../views/teacher/Welcome.vue'),
                        meta: {
                            title: '欢迎',
                        },
                    },
                    {
                        path: 'self_info/',
                        meta: {
                            title: '个人信息',
                        },
                        component: () => import (/* webpackChunkName: "403" */
                            '../views/teacher/SelfInfo.vue')
                    },

                    // 学生信息
                    {
                        path: 'students_details/',
                        component: () => import('../views/teacher/StudentsDetail'),
                        meta: {
                            title: '学生信息查询',
                            cname: 'students-detail' // 组件名 ，被渲染的组件名，当需要缓存时就写上 不需要就不写
                        }
                    },
                    {
                        path: 'students_grades/',
                        component: () => import('../views/teacher/StudentsGrades'),
                        meta: {
                            title: '学生成绩查询',
                        }
                    },
                    {
                        path: 'students_abnormity/',
                        component: () => import('../views/teacher/StudentsAbnormity'),
                        meta: {
                            title: '学生异常信息管理',
                        }
                    },

                    // 体测信息
                    {
                        path: 'pe_details',
                        component: () => import('../views/teacher/PEDetails'),
                        meta: {
                            title: '体测数据查询',
                        }
                    },


                    {
                        path: 'pe_history/',
                        component: () => import('../views/teacher/PEHistory'),
                        meta: {
                            title: '历史数据查询',
                        }
                    },
                    {
                        path: 'pe_abnormity/',
                        component: () => import('../views/teacher/PEAbnormity'),
                        meta: {
                            title: '体测异常信息管理',
                        }
                    },
                    // 诊断与健康干预
                    {
                        path: 'health_prescribe/',
                        component: () => import('../views/teacher/HelathPrescribe'),
                        meta: {
                            title: '健康状况预判',
                        }
                    },
                    {
                        path: 'health_advice/',
                        component: () => import('../views/teacher/HelathAdvice'),
                        meta: {
                            title: '运动健康建议',
                        }
                    },

                    // 统计查询
                    {
                        path: 'statistic_global/',
                        component: () => import('../views/teacher/StatisticGlobal'),
                        meta: {
                            title: '整体统计分析',
                        }
                    },
                    {
                        path: 'statistic_person/',
                        component: () => import('../views/teacher/StatisticPerson'),
                        meta: {
                            title: '个人统计分析',
                        }
                    },


                ]
            },

            // 学生端
            {
                path: 'student/',
                component: () => import('../views/PEMain'),
                meta: {
                    title: '欢迎',
                    require_role: 'student',
                },
                children: [


                    // 个人信息
                    {
                        path:'personal_info/',
                        component: () => import('../views/student/Personal'),
                        meta: {
                            title: '个人信息'
                        }

                    },
                    // 体测信息
                    {
                        path: 'pe_details/',
                        component: () => import('../views/student/PEDetails'),
                        meta: {
                            title: '体测信息',
                        }
                    },

                    // 健康反馈信息
                    {
                        path: 'health_feedback/',
                        component: () => import('../views/student/HealthFeedback'),
                        meta: {
                            title: '健康反馈信息',
                        }
                    },
                    // 个人信息修改
                    {
                        path: 'self_info/',
                        component: () => import('../views/student/SelfInfo'),
                        meta: {
                            title: '个人信息修改',
                        }
                    },
                ]

            },


        ]
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限'
        },
        component: () => import (/* webpackChunkName: "403" */
            '../views/403.vue')
    },
    {
        path: '/404',
        name: '404',
        meta: {
            title: '找不到页面'
        },
        component: () => import (/* webpackChunkName: "404" */
            '../views/404.vue')
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import (
            /* webpackChunkName: "login" */
            "../views/Login.vue")
    },

    /*当页面匹配不到上面的路径时 就丢给404*/
    {
        path: '/:nomatched*',
        redirect: '/404',
        meta: {
            title: '找不到页面'
        },
        component: () => import (/* webpackChunkName: "404" */
            '../views/404.vue')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

import auth from "../utils/auth";
// import Loginnn from "../views/Loginnn";

function hasPermisson(to, from, next) {
    var user = auth.user;
    var require_role = to.meta ? to.meta.require_role : '';

    if (require_role) { // 访问页面需要登录
        if (!user) { // 未登录
            next('/login');
        }

        if (require_role !== user.role) {
            // 教师只能访问教师页面  同理 学生只能访问 学生页面*
            next('/403');
        } else {
            next();
        }

    } else {
        next();
    }

}


// beforeEach
router.beforeEach((to, from, next) => {

    document.title = `${to.meta.title} | vue-manage-system`;
    hasPermisson(to,from,next); // 权限判断

});

export default router;
