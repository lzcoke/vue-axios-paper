import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyLoad from "vue-lazyload";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/reset.css";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {
  error: "https://wxpaper.oss-cn-hangzhou.aliyuncs.com/image/image_404.png", //加载失败的图
  loading: "https://wxpaper.oss-cn-hangzhou.aliyuncs.com/image/image_loading.png" //加载中的默认图
});
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
