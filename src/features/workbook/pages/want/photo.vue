<template>
  <view-box body-padding-top="46px">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;" :left-options="{backText: '剪裁'}">
      <p slot="right" v-on:click="_finish">确定</p>
    </x-header>
    <div>
      <img ref="result" :src="workbookWant.camera" style="width:100%;"/>
      <!-- <img ref="result" src="http://img.guinaben.com/workbookPic/429answer5810/1/Untitled.FR12%20-%200001.png?imageMogr2/auto-orient/thumbnail/!50p/format/jpg/interlace/1/quality/30|imageslim" style="width:100%;"/> -->
      <div class='rotate' @click="cropper.rotate(-90)"><img src="../../assets/rotate-right.png"></div>
    </div>
  </view-box>
</template>
<script>
import {XHeader, ViewBox} from 'vux'
import {mapActions, mapGetters} from 'vuex'
import Cropper from 'Cropperjs'
import 'Cropperjs/dist/cropper.min.css'

export default {
  name: 'photo',
  components: {
    XHeader, ViewBox
  },
  computed: {
    ...mapGetters(['workbookWant'])
  },
  data () {
    return {
      cropper: ''
    }
  },
  methods: {
    ...mapActions(['workbookWantAdd']),
    _finish () {
      this.workbookWantAdd({data: this.cropper.getCroppedCanvas({width: 640}).toDataURL('image/jpeg', 0.9), type: this.$route.query.type})
      history.back()
    }
  },
  activated () {
    if (this.cropper) {
      this.cropper.destroy()
    }
    this.cropper = new Cropper(this.$refs.result, {
      aspectRatio: '3/4',
      minContainerHeight: document.documentElement.clientHeight - 46,
      minCropBoxWidth: document.documentElement.clientWidth / 2,
      minCropBoxHeight: 80
    })
  }
}
</script>
<style lang="less" scoped>
.rotate{
  position: fixed;
  bottom: 5%;
  left:5%;
  width:2.5rem;
  height:2.5rem;
}
</style>
