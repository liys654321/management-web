// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import qs from "qs";
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Element,{
		size: 'small'
});
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

new Vue({
		router,
		render: c => c(App),
		created: function () {
				/*let params = '{"base":{"type":1,"flumeName":"6","flumeGrade":"6","materialType":1,"location":"6"},"param":{"type":1,"normalFlux":"6","flumeBodyType":"6"}}';
				var par = new FormData();
				par.append("params",params);
				let config = {
						headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
						}
				}
				this.$axios.get("/api/structure/save?params=" + this.$qs.stringify(par),config).then((res) => {
						console.log(res);
				})*/
				/*let params = '{"base":{"type":1,"flumeName":"6","flumeGrade":"6","materialType":1,"location":"6"},"param":{"type":1,"normalFlux":"6","flumeBodyType":"6"}}';
				this.$axios({
						url: '/api/structure/save',  //请求路径（接口）
						method: 'POST', //请求方式
						headers: { 'content-type': 'application/x-www-form-urlencoded' }, // 请求头，发送FormData格式的数据，必须是 这种请求头。
						data: qs.stringify({params: params}),
				})*/
		}
		/*method: {
	
			created () {
			console.log('==============' + 'created' + '===================')
			console.log(this.$el)
			console.log(this.$data)
			console.log(this.filter)
			},
	
			Mounted() {
			$axios.get("www.baidu.com").then((res) => {
				console.log(res);
			})
			}
		}*/
}).$mount("#app")
