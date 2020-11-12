import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/main.css"
import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar"
import Greeting from "@/components/Greeting"
import Cards from "@/components/Cards"
import Bottombar from "@/components/Bottombar"
import Playbar from "@/components/Playbar/Playbar"

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component("navbar", Navbar)
Vue.component("sidebar", Sidebar)
Vue.component("greeting", Greeting)
Vue.component("cards", Cards)
Vue.component("bottombar", Bottombar)
Vue.component("playbar", Playbar)

Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

Vue.config.productionTip = false

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
