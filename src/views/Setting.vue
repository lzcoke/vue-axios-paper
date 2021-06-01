<template>
  <div class="home">
    <!-- 头部信息 -->
    <HeadInformation></HeadInformation>
    <!--    用户信息-->
    <div class="center">
      <div class="bg"></div>
      <div class="container">
        <div class="information">
          <div class="basic">
            <div class="avatar">
              <img
                v-lazy="
                  'https://sonshop.oss-cn-hangzhou.aliyuncs.com/icon/icon_user_avatar.png'
                "
                alt=""
              />
            </div>
            <div class="nickname">
              <h2 v-text="userInfo.nickname"></h2>
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
        <NavBar selected="2"></NavBar>
        <div class="right">
          <div class="title active">
            <h3>系统设置</h3>
          </div>
          <div class="list">
            <div v-if="list.length > 0">
              <div v-for="item in list" class="nav">
                <div class="name">
                  <p v-text="item.paper.paper_name"></p>
                </div>
                <div class="tool">
                  <div class="view">
                    <button @click="paperView(item.paper)">在线查看</button>
                  </div>
                  <div class="collect">
                    <button @click="cancelCollect(item.paper)">取消收藏</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="table-note">
              <p>
                你暂未收藏任何试卷信息，请前往
                <a href="/search">查找你要的试卷</a> !
              </p>
            </div>
          </div>
          <div class="page">
            <el-pagination
              :hide-on-single-page="true"
              background
              layout="prev, pager, next"
              :total="total"
            >
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
import { paperCancelCollect, paperCollectPage } from "@/assets/js/table/Paper";

export default {
  name: "Home",
  components: {
    HeadInformation,
    NavBar,
  },
  data() {
    return {
      list: [],
      total: 0,
      pagePagination: {
        page: 1,
        limit: 10,
      },
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    console.log(this.userInfo);
    this.init();
  },
  methods: {
    init() {
      this.getPaperCollectPage();
    },
    load() {
      this.$router.push("/");
    },
    paperView(event) {
      window.open(
        "/pdf/web/viewer.html?file=" + encodeURIComponent(event.paper_url)
      );
    },
    getPaperCollectPage() {
      const params = {
        page: this.pagePagination.page,
        limit: this.pagePagination.limit,
        userId: this.userInfo.user_id,
      };
      paperCollectPage(params).then((res) => {
        if (res.code === 200) {
          this.list = res.data.list;
          this.total = res.data.total;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    cancelCollect(event) {
      const params = {
        userId: this.userInfo.user_id,
        paperId: event.paper_id,
      };
      paperCancelCollect(params).then((res) => {
        if (res.code === 200) {
          this.$message.success("已取消");
          this.init();
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
  },
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
    background: url("https://lz-forum.oss-cn-hangzhou.aliyuncs.com/image/temp1.png")
      no-repeat center top #000;
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

      .table-note {
        margin-top: 50px;
        text-align: center;

        p {
          color: #777777;
          font-size: 20px;

          a {
            color: #3457a5;
          }
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
