<template>
  <div class="myApp">
    <div class="myApp-Side">
      
    </div>
    <div class="myApp-Header">
      <img src="../assets/img/icon.png" alt="">
      <div class="title">MeChat</div>
    </div>
    <div class="myApp-Container">
        <div class="weui-panel weui-panel_access">
          <div class="weui-panel__bd">
              <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd">
                      <img class="weui-media-box__thumb" src="../assets/img/img01.jpg" alt="">
                  </div>
                  <div class="weui-media-box__bd">
                      <h4 class="weui-media-box__title">Life Is Short,Use HTML5.</h4>
                      <p class="weui-media-box__desc">生命短暂，请用HTML5。</p>
                  </div>
              </a>
          </div>
        </div>
        <div class="weui-panel">
          <div class="weui-panel__bd">
              <div class="weui-media-box weui-media-box_text">
                  <h4 class="weui-media-box__title">Life Is Short,Use Webpack.</h4>
                  <p class="weui-media-box__desc">生命短暂，请用Webpack。</p>
                  <ul class="weui-media-box__info">
                      <li class="weui-media-box__info__meta">MeChat</li>
                      <li class="weui-media-box__info__meta">2017年08月29日00:01</li>
                      <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
                  </ul>
              </div>
          </div>
        </div>
        <div class="Card">
          <div class="Card-Top">
            <div class="TopImg">
              <img src="../assets/img/img01.jpg" alt="">
            </div>
            <div class="Cover">
              Life Is Short,Use HTML5.
            </div>
          </div>
          <div class="Card-Sketch">
            生命短暂，请用HTML5。
          </div>
          <!-- <hr class="Card-Hr" size=1> -->
          <!-- hr标签画直线 -->
          <div class="Card-Footer">
            <span>详情</span>
            <span> > </span>
          </div>
        </div>
    </div>
    <div class="myApp-Tabar">
      <div>昨天</div>
      <div>七夕？</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:'aa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import './MeChatApp.less';
@import '../../weui/dist/style/weui.min.css';
</style>
