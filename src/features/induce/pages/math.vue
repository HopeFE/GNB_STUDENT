<template>
  <div>
    <selectBook :list="textList" @on-change="_currentTextbook"></selectBook>
    <group gutter="0" class="gnb_collapse" v-if="!loading">
      <template v-for="(list, index) in induceMath.list.chaper">
        <cell @click.native="list.checked = !list.checked" :key='index'
          :title="list.name" is-link
          :border-intent="false"
          :arrow-direction="list.checked ? 'up' : 'down'">
        </cell>
        <div class="slide" :class="list.checked ? 'animate':''" :key='index'>
          <template v-for="(chapter, pindex) in list.sub_chapter_list">
            <cell-box :style="chapter.used ? 'color:#FEAA85':''" :key='pindex'
            @click.native="$router.push({name: 'induce_exercise', params: {subject: 'math', chapterId: chapter.chapter_id, chapterName: chapter.name}})">
              <div slot="default" style="width:100%;">
                <flexbox>
                  <flexbox-item :span="9">{{chapter.name}}</flexbox-item>
                  <flexbox-item :span="3" style="text-align:right">{{chapter.handleCount}}/{{chapter.total}}</flexbox-item>
                </flexbox>
              </div>
            </cell-box>
          </template>
        </div>
      </template>
    </group>
    <div style="text-align:center">
      <spinner v-if="loading" type="ripple"></spinner>
    </div>
  </div>
</template>

<script>
import {XHeader, Cell, CellBox, Group, Spinner, Flexbox, FlexboxItem} from 'vux'
import selectBook from '@/components/gnb_selectbook'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'math',
  components: {
    XHeader, Cell, Group, CellBox, Spinner, selectBook, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['induceMath', 'User']),
    textList () {
      return this.User.textbook.math
    }
  },
  data () {
    return {
      textbook_id: '',
      loading: true
    }
  },
  methods: {
    ...mapActions(['getInduce', 'setInduceScroll', 'clearInduce']),
    _getData () {
      this.loading = true
      this.getInduce({
        subject: 'math',
        textbook_id: this.textbook_id || this.User.textbook.math[0].id
      }).then(() => {
        this.loading = false
      })
    },
    _currentTextbook (val) {
      this.textbook_id = val
      this.clearInduce({subject: 'math'})
      this._getData()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name.indexOf('induce_exercise') !== -1) {
        vm.clearInduce({subject: 'math'})
        vm._getData()
      } else {
        vm.$parent.$refs.viewBoxBody.scrollTop = vm.induceMath.scroll
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setInduceScroll({subject: 'math', height: this.$parent.$refs.viewBoxBody.scrollTop})
    this.$parent.$refs.viewBoxBody.scrollTop = 0
    next()
  },
  mounted () {
    this._getData()
  }
}
</script>
