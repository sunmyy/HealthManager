import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as echarts from 'echarts'; // 画图
import './assets/css/icon.css'
import auth from "./utils/auth";


const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$auth=auth; // vue3的全局变量语法
app.config.globalProperties.$echarts=echarts; // vue3的全局变量语法
app
    .use(store)
    .use(router)
    .mount('#app')
