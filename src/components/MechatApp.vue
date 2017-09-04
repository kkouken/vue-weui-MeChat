<template>
  <div class="myApp">
    <div class="myApp-Side">
      
    </div>
    <div class="myApp-Header">
      <img id="iconimg" src="../assets/img/icon.png" alt="" v-on:click="ToggleEvent">
      <div class="title">MeChat</div>
    </div>
    <div class="myApp-Container">
      <transition-group name="Toggle">
        <div class="weui-panel weui-panel_access" v-show="this.blockstatus == 'list'" v-bind:key="this.blockstatus">
          <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                      <img class="weui-media-box__thumb" src="../assets/img/gz_flower01.jpg" alt="">
                  </div>
                  <div class="weui-media-box__bd">
                      <h4 class="weui-media-box__title">(有图)佛山里水</h4>
                      <p class="weui-media-box__desc">带上相机，去佛山走一下</p>
                  </div>
              </a>
          </div>
        </div>
        <div class="weui-panel" v-show="this.blockstatus == 'list'" v-bind:key="this.blockstatus">
          <div class="weui-panel__bd">
              <div class="weui-media-box weui-media-box_text">
                  <h4 class="weui-media-box__title">(无图)佛山里水</h4>
                  <p class="weui-media-box__desc">带上相机，去佛山走一下</p>
                  <ul class="weui-media-box__info">
                      <li class="weui-media-box__info__meta">MeChat</li>
                      <li class="weui-media-box__info__meta">2017年08月29日00:01</li>
                      <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
                  </ul>
              </div>
          </div>
        </div>
        <div class="Card" v-show="this.blockstatus == 'card'" v-bind:key="this.blockstatus">
          <div class="Card-Top">
            <div class="TopImg">
              <img src="../assets/img/gz_flower01.jpg" alt="">
            </div>
            <div class="Cover">
              佛山里水
            </div>
          </div>
          <div class="Card-Sketch">
            带上相机，去佛山走一下
          </div>
          <!-- <hr class="Card-Hr" size=1> -->
          <!-- hr标签画直线 -->
          <div class="Card-Footer">
            <span>详情</span>
            <span> > </span>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="myApp-Tabar">
      <div>逛广州</div>
      <div>逛周边</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blockstatus:'list',
      deg: 0
    }
  },
  mounted (){
    $('#iconimg').click(function(){
      if($(this).hasClass('iconrotate')){
        $(this).removeClass('iconrotate')
      }else{
        $(this).addClass('iconrotate')
      }
    });
  },
  methods:{
    ToggleEvent() {
      if(this.blockstatus == "list"){
        this.blockstatus = "card"
      }else{
        this.blockstatus = "list"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import './MeChatApp.less';
@import '../../weui/dist/style/weui.min.css';
</style>
