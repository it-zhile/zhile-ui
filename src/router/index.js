import Vue from 'vue'
import Router from 'vue-router'
import navconfig from './nav.config.json'

Vue.use(Router)

let routes = [];
// 获取路由列表数据
Object.keys(navconfig).forEach((header) => {
    routes = routes.concat(navconfig[header])
})
// 根据路由列表数据添加路由组件
let addComponent = (router) => {
    router.forEach((route) => {
        if (route.items) {
            addComponent(route.items)
            routes = routes.concat(route.items)
        } else {
            if (route.type === 'pages') {
                // route.component = () => import(`@/pages/${route.name}.vue`)
                route.component = r => require.ensure([], () => r(require(`@/pages/${route.name}.vue`)))
            } else {
                // route.component = () => import(`@/docs/${route.name}.md`)
                route.component = r => require.ensure([], () => r(require(`@/docs/${route.name}.md`)))
            }
        }
    })
}
addComponent(routes)

export default new Router({
    routes: routes
})