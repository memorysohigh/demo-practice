/**
 * 只有模块化才能使用import
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
var routes = [{
        path: '/',
        name: '/',
        component: {
            template: '<h1>首页</h1>'
        }
    },
    {
        path: '/about',
        name: '/about',
        component: {
            template: '<h1>关于</h1>'
        }
    },
    {
        path: '/user/:name',
        name: '/user',
        component: {
            template: `
            <div>
            <h1>我叫{{$route.params.name}}</h1>
                <router-link to='more' append>更多信息</router-link>
                <router-view></router-view>
            </div>
            `,
        },
        children: [{
            path: 'more',
            component: {
                template: '<div>用户信息：456666666666212348797987897</div>'
            },
        }]
    }
]

var router = new VueRouter({
    routes: routes
})

new Vue({
    el: '#app',
    router: router
})