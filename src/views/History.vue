<template>
  <div class="home">
    <!-- 头部信息 -->
    <HeadInformation></HeadInformation>
    <!--    用户信息-->
    <div class="center">
      <div class="bg">
      </div>
      <div class="container">
        <div class="information">
          <div class="basic">
            <div class="avatar">
              <img v-lazy="'https://sonshop.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_avatar.png'" alt="">
            </div>
            <div class="nickname">
              <h2>我爱喝可乐</h2>
            </div>
            <div class="detail">
              <span>男</span>
              <span>浙江</span>
              <span>杭州市</span>
              <span>杭州电子科技大学</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--    列表-->
    <div class="item">
      <div class="container">
        <NavBar selected="1"></NavBar>
        <div class="right">
          <div class="title active">
            <h3>历史记录</h3>
          </div>
          <div class="list">
            <div v-for="item in 15" class="nav">
              <div class="name">
                <p>2020年春季数学试卷一.pdf</p>
              </div>
              <div class="tool">
                <div class="view">
                  <button>在线查看</button>
                </div>
                <div class="collect">
                  <button>取消收藏</button>
                </div>
              </div>
            </div>
          </div>
          <div class="page">
            <el-pagination
              :page-size="20"
              :pager-count="11"
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadInformation from "@/components/HeadInformation";
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    HeadInformation,
    NavBar
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.center {
  width: 100%;
  margin-top: 60px;
  position: relative;
  height: 140px;

  .bg {
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url('https://lz-forum.oss-cn-hangzhou.aliyuncs.com/image/temp1.png') no-repeat center top #000;
    background-size: cover;
  }

  .container {
    position: relative;
    z-index: 10;
    width: 1000px;
    margin: auto;
    height: 100%;

    .information {
      width: 100%;
      height: 100%;

      .basic {
        float: left;
        height: 100%;

        .avatar {
          width: 140px;
          height: 140px;
          box-sizing: border-box;
          border-radius: 50%;
          padding: 6px;
          background: #ffffff;
          position: absolute;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
          top: 24px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .nickname {
          margin-left: 180px;

          h2 {
            margin-top: 50px;
            font-size: 24px;
            color: #ffffff;
          }
        }

        .detail {
          margin-left: 180px;
          margin-top: 8px;

          span {
            font-size: 12px;
            color: #ffffff;
            margin-right: 10px;
          }
        }
      }
    }
  }
}

.item {
  margin-top: 20px;

  .container {
    width: 1000px;
    margin: auto;
    overflow: hidden;

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

    .right {
      margin-left: 220px;
      height: 100%;

      .title {
        font-size: 16px;
        color: #545c63;
        height: 52px;
        line-height: 52px;
        border-bottom: 1px solid #d9dde1;
        cursor: pointer;

        h3 {
          margin-right: 64px;
          display: inline-block;
          color: #545c63;
        }

        &:hover {
          h3 {
            color: #3457a5;
            border-bottom: 2px solid #3457a5;
          }
        }
      }

      .active {
        h3 {
          color: #3457a5;
          border-bottom: 2px solid #3457a5;
        }
      }

      .list {
        width: 100%;
        margin-top: 10px;
        overflow: hidden;

        .nav {
          padding: 10px 0;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          cursor: pointer;

          .name {
            float: left;

            p {
              font-size: 16px;
              color: #555555;
            }
          }

          .tool {
            float: right;
            overflow: hidden;

            .view {
              float: left;

              button {
                background: transparent;
                border: 0;
                font-size: 14px;
                color: #545c63;
                cursor: pointer;
              }
            }

            .collect {
              margin-left: 30px;
              float: left;

              button {
                background: transparent;
                border: 0;
                font-size: 14px;
                color: #545c63;
                cursor: pointer;
              }
            }

          }
        }
      }

      .page {
        margin-top: 10px;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;

        li {
          font-size: 16px;
        }
      }
    }
  }
}
</style>