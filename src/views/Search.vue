<template>
  <div class="home">
    <!-- 头部信息 -->
    <HeadInformation></HeadInformation>
    <!--    搜索内容-->
    <div class="search-box">
      <div class="container">
        <div class="right">
          <div class="title active">
            <h3>查询结果</h3>
          </div>
          <div class="list">
            <div v-for="item in 10" class="nav">
              <div class="name">
                <p>2020年春季数学试卷一.pdf</p>
              </div>
              <div class="tool">
                <div class="view">
                  <button>在线查看</button>
                </div>
                <div class="collect">
                  <button>收藏</button>
                </div>
              </div>
            </div>
          </div>
          <div class="page">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!-- 搜索内容 -->
    <div class="search-from">
      <div class="container">
        <div class="title">
          <h3>快速查询您想要的试卷！</h3>
        </div>
        <el-row class="list">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-button type="primary">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import HeadInformation from "@/components/HeadInformation";

export default {
  name: "Home",
  components: {
    HeadInformation
  },
  data() {
    return {
      options: [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }],
      value: ""
    };
  }
};
</script>
<style lang="scss">
.search-box {
  margin-top: 80px;


  .container {
    width: 1000px;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    background: #999999;
    box-sizing: border-box;

    .right {
      height: 100%;


      .title {
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        text-align: center;
        border-bottom: 1px solid #ffffff;

        h3 {
          display: inline-block;
          color: #ffffff;
          font-size: 21px;
          padding: 20px 0px 15px;

        }
      }

      .list {
        width: 100%;
        margin-top: 10px;
        overflow: hidden;
        padding: 0px 30px 20px;
        box-sizing: border-box;

        .nav {
          padding: 10px 0px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          cursor: pointer;
          border-bottom: 1px solid #ffffff;

          .name {
            float: left;

            p {
              font-size: 16px;
              color: #ffffff;
            }
          }

          .tool {
            float: right;
            overflow: hidden;

            .view {
              float: left;

              button {
                background: transparent;
                border: 0px;
                font-size: 14px;
                color: #ffffff;
                cursor: pointer;
              }
            }

            .collect {
              margin-left: 30px;
              float: left;

              button {
                background: transparent;
                border: 0px;
                font-size: 14px;
                color: #ffffff;
                cursor: pointer;
              }
            }

          }
        }
      }

      .page {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;

        li {
          font-size: 14px;
        }
      }
    }
  }
}

.search-from {
  width: 1000px;
  border-radius: 10px;
  margin: 20px auto auto;
  background: #999999;
  padding: 20px 80px;
  box-sizing: border-box;

  .container {
    width: 100%;

    .title {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;

      h3 {
        font-size: 20px;
        color: #ffffff;
      }
    }

    .list {
      margin-top: 40px;
      width: 100%;
      display: flex;
      margin-bottom: 30px;

      .nav {
        display: inline-block;
        width: 100%;
        box-sizing: border-box;

        .el-select {
          width: 100%;
        }

        button {
          width: 100%;
        }
      }
    }
  }
}
</style>