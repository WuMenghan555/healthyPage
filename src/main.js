import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import {Tab, Tabs, Grid, GridItem, Swipe, SwipeItem, Icon, Cell, CellGroup, Image as VanImage, SwipeCell, Card, Button, Uploader, ShareSheet, ActionSheet, Search, DropdownMenu, DropdownItem, Tag, Field, NoticeBar, Toast} from 'vant'
import 'vant/lib/index.css'

Vue.use(Tab).use(Tabs).use(Grid).use(GridItem).use(Swipe).use(SwipeItem).use(Icon).use(Cell).use(CellGroup).use(VanImage).use(SwipeCell).use(Card).use(Button).use(Uploader).use(ShareSheet).use(ActionSheet).use(Search).use(DropdownMenu).use(DropdownItem).use(Tag).use(Field).use(NoticeBar).use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
