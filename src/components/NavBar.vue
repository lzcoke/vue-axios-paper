<template>
  <div class="left">
    <div :class="selected == 0 ? 'nav collect active' : 'nav collect' ">
      <a href="/User">
        <img
          :src="selected == 0 ? 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_collect_selected.png' : 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_collect.png' "
          alt="">
        <span>我的收藏</span>
      </a>
    </div>
    <div :class="selected == 1 ? 'nav history active' : 'nav collect' ">
      <a href="/History">
        <img
          :src="selected == 1 ? 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_history_select.png' : 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_history.png' "
          alt="">
        <span>历史记录</span>
      </a>
    </div>
    <div :class="selected == 2 ? 'nav setting active' : 'nav collect' ">
      <a href="/User">
        <img
          :src="selected == 2 ? 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_csetting_selected.png' : 'https://lz-forum.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_csetting.png' "
          alt="">
        <span>系统设置</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
    selected: String
  }
};
</script>

<style scoped lang="scss">
.left {
  width: 170px;
  float: left;

  .nav {
    width: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:first-child {
      margin-top: 40px;
    }

    span {
      position: relative;
      height: 48px;
      font-size: 16px;
      line-height: 48px;
      color: #787d82;
      padding-left: 54px;
      text-align: left;
    }

    &:after {
      display: block;
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 24px solid #ffffff;
      border-bottom: 24px solid #ffffff;
      border-left: 15px solid transparent;
    }

    &:hover {
      span {
        color: #000000;
      }
    }
  }

  .active {
    background: #3457a5;

    &:hover {
      span {
        color: #ffffff;
      }
    }

    span {
      color: #ffffff;
    }
  }

  img {
    width: 20px;
    position: absolute;
  }

  .collect {
    img {
      width: 16px;
      left: 20px;
      top: 14px;
    }
  }

  .history {
    img {
      width: 19px;
      left: 18px;
      top: 14px;
    }
  }

  .setting {
    img {
      width: 16px;
      left: 20px;
      top: 15px;
    }
  }
}
</style>