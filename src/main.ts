import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
//import moment from 'moment'; // 导入模块
//moment.locale('zh-cn'); // 设置语言 或 moment.lang('zh-cn');

const app = createApp(App);

//app.config.globalProperties.$moment = moment;// 赋值使用


app.use(router).mount("#app");
