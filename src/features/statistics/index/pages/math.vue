<template>
  <div>
    <selectBook :list="textList" @on-change="_currentTextbook" :value='textbookId'></selectBook>
    <div class='table vux-1px-t vux-1px-b' v-if='!loading && !error'>
      <flexbox :gutter='0' align='center' style='padding:0 0 10px'>
        <flexbox-item :span="2/9"></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_font'>记题数</div></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_font'>错题数</div></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_font'>正确率</div></flexbox-item>
      </flexbox>
      <flexbox :gutter='0' align='center' v-for='row in StatisticsMath' :key='row.chapterId'
        @click.native="_toStatistics(row)" style='padding:.25rem 0'>
        <flexbox-item :span="2/9"><div class='table_font'>{{row.chapterName}}</div></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_number'>{{row.remCount}}</div></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_number'>{{row.errorCount}}</div></flexbox-item>
        <flexbox-item :span="2/9"><div class='table_number'>{{row.correctPercent}}</div></flexbox-item>
        <flexbox-item><b class='table_into'></b></flexbox-item>
      </flexbox>
    </div>
    <div style="text-align:center;">
      <spinner v-if="loading" type="ripple"></spinner>
      <p v-if="error" @click='_getData' style='color:#4cc0be;font-size:.7rem;padding:.5rem 0'>点我重新加载</p>
    </div>
  </div>
</template>

<script>
import {XHeader, Spinner, Flexbox, FlexboxItem} from 'vux'
import {mapActions, mapGetters} from 'vuex'
import selectBook from '@/components/gnb_selectbook'

export default {
  name: 'math',
  components: {
    XHeader, Spinner, selectBook, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['StatisticsMath']),
    textList () {
      return this.$store.getters.User.textbook.math
    }
  },
  data () {
    return {
      error: false,
      loading: true,
      textbookId: ''
    }
  },
  methods: {
    ...mapActions(['getStatistics', 'clearStatistics', 'clearStatisticsAssemble']),
    _toStatistics (row) {
      this.clearStatisticsAssemble({type: 'remember'})
      this.clearStatisticsAssemble({type: 'camera'})
      this.clearStatisticsAssemble({type: 'good'})
      this.$router.push({name: 'statisticsRemember', params: {subject: 'math', chapterId: row.chapterId, name: row.chapterName, textbookId: this.textbookId || this.textList[0].id}})
    },
    _getData () {
      this.loading = true
      this.error = false
      this.getStatistics({
        textbookId: this.textbookId || this.textList[0].id
      }).then(() => {
        this.loading = false
      }).catch(() => {
        this.loading = false
        this.error = true
      })
    },
    _currentTextbook (val) {
      this.textbookId = val
      this.clearStatistics()
      this._getData()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm._getData()
    })
  }
}
</script>
<style lang="less" scoped>
.table{
  padding: 10px 0;
  background: white;
}
.table_font{
  font-size:.8rem;
  text-align: center;
}
.table_number{
  font-size:.8rem;
  text-align: center;
  color:#ff9800;
}
.table_into{
  display: inline-block;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #ccc;
  border-style: solid;
  margin-left: 5px;
  transition-duration: .2s;
}
</style>
