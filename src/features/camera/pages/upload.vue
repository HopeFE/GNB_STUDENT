<template>
  <view-box body-padding-top="46px">
    <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:1;" :left-options="{backText: '照片'}">
      <i slot="right" @click="_upload" class="icon iconfont icon-upload" style="font-size:22px"></i>
    </x-header>
    <div>
      <div style="padding:10px 15px">
        <flexbox wrap="wrap" align="baseline" :gutter="0">
          <flexbox-item :span="3" v-for="(img, index) in CameraUploader.list" :key="index">
            <div class="photo">
              <div style="text-align:center;height:90px;width:65px;background-size:100% 100%" :style="'background-image:url('+img+')'"></div>
              <i class="icon iconfont icon-error" style="font-size:30px;position:absolute;left:58px;top:-25px" @click="_del(index)"></i>
            </div>
          </flexbox-item>
          <flexbox-item :span="3" v-if="!(CameraUploader.list.length === 1)" @click.native="_add">
            <div class="photo">
              <div class="plus">
                <b>+</b>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <group title="选择错误原因：">
        <checker style="padding:.25rem .75rem 1rem;"
          v-model="comment"
          type="radio"
          default-item-class="select-item"
          selected-item-class="select-item-selected"
          >
            <checker-item value="概念模糊">概念模糊</checker-item>
            <checker-item value="粗心大意">粗心大意</checker-item>
            <checker-item value="能力不够">能力不够</checker-item>
        </checker>
      </group>
    </div>
  </view-box>
</template>

<script>
import {Flexbox, FlexboxItem, GroupTitle, Group, XHeader, ViewBox, Checker, CheckerItem} from 'vux'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'uploader',
  components: {
    XHeader, ViewBox, Flexbox, FlexboxItem, Group, GroupTitle, Checker, CheckerItem
  },
  computed: {
    ...mapGetters(['CameraUploader'])
  },
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    ...mapActions(['cameraErrorUpload', 'cameraErrorDel', 'cameraErrorCamera']),
    _add () {
      // this.$router.push({'name': 'camera_photo'})
      let cmr = plus.camera.getCamera()
      cmr.captureImage((p) => {
        plus.io.resolveLocalFileSystemURL(p, (entry) => {
          this.cameraErrorCamera(entry.toLocalURL())
          this.$router.push({'name': 'camera_photo'})
        })
      })
    },
    _del (index) {
      this.cameraErrorDel(index)
    },
    _upload () {
      if (!this.CameraUploader.list.length) {
        this.$vux.toast.show({text: '您还未拍照', type: 'text', time: 1500, position: 'bottom'})
      } else {
        this.cameraErrorUpload({errorComment: this.comment}).then(() => {
          history.go(-1)
        })
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm._del(0)
      vm.comment = ''
    })
  }
}
</script>

<style lang="less" scoped>
.photo{
  position:relative;
  margin-top:10px;
  padding-left:10px;
  .plus{
    text-align:center;
    height:90px;
    width:65px;
    border:1px solid #ccc;
    font-size:48px;
    color:#ccc;
    border-radius:3px;
    float:left;
  }
}
.select-item {
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 3px;
  color: #4cc0be;
  border: 1px solid #4cc0be;
  background-color: #fff;
  margin-right: .3rem;
  margin-top: .75rem;
}
.select-item-selected {
  background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTZDOEJBQ0E3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTZDOEJBQ0I3NkIxMTFFNEE3MzJFOUJCMEU5QUM0QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNkM4QkFDODc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNkM4QkFDOTc2QjExMUU0QTczMkU5QkIwRTlBQzRCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMGp3kAAAAJUExURf9KAP///////4Jqdw0AAAADdFJOU///ANfKDUEAAAAuSURBVHjaTMpBDgAABAPB5f+PlhLUpZMWuQcYMWLEyDN4ymqa5KS4+3G+KAEGACQmAGlKzr56AAAAAElFTkSuQmCC) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>
