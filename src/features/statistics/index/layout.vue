<template>
  <view-box ref="statistics" body-padding-top="100px">
    <div slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;">
      <x-header :left-options="{backText: '错题本'}"></x-header>
      <tab>
        <tab-item v-if="User.subjectType.indexOf('math') >= 0" :selected="Route.name === 'statistics_math'" @click.native="$router.replace('math')">数学</tab-item>
        <tab-item v-if="User.subjectType.indexOf('physics') >= 0" :selected="Route.name === 'statistics_physics'" @click.native="$router.replace('physics')">物理</tab-item>
        <!-- <tab-item v-if="User.subjectType.indexOf('chemistry') >= 0" :selected="Route.name === 'statistics_chemistry'" @click.native="$router.replace('chemistry')">化学</tab-item> -->
      </tab>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </view-box>
</template>

<script>
import {XHeader, ViewBox, Tab, TabItem} from 'vux'
import {mapGetters} from 'vuex'
import statistics from './modules/store'
import assemble from '../assemble/modules/store'
import store from '@/store'

export default {
  name: 'index',
  components: {
    XHeader, ViewBox, Tab, TabItem
  },
  computed: {
    ...mapGetters(['Route', 'User'])
  },
  beforeCreate () {
    store.registerModule('statistics', {
      ...statistics
    })
    store.registerModule('assemble', {
      ...assemble
    })
  }
}
</script>
