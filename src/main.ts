import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vueRouter from './router'

import { Tabbar, TabbarItem, Tabs, Tab } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Tabbar)
app.use(TabbarItem)
app.use(Tabs)
app.use(Tab)

app.use(vueRouter)

app.mount('#app')
