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
            <div v-if="list.length>0">
              <div v-for="item in list" class="nav">
                <div class="name">
                  <p v-text="item.paper.paper_name"></p>
                </div>
                <div class="tool">
                  <div class="view">
                    <button @click="paperView(item.paper)">在线查看</button>
                  </div>
                  <div class="collect" v-if="item.collect == null">
                    <button @click="collect(item.paper)">收藏</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="table-note">
              <p>该分类下暂无试卷信息，请重新 <a href="/">查找你要的试卷</a> !</p>
            </div>
          </div>
          <div class="page">
            <el-pagination
              background
              :hide-on-single-page="true"
              layout="prev, pager, next"
              :total="total">
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
              <el-select @change="categoryChange" filterable clearable v-model="searchFrom.categoryId"
                         placeholder="请选择">
                <el-option
                  v-for="item in categoryFirst"
                  :key="item.category_id"
                  :label="item.category_name"
                  :value="item.category_id">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="searchFrom.secondId" filterable clearable @change="secondChange" placeholder="请选择">
                <el-option
                  v-for="item in categorySecond"
                  :key="item.second_id"
                  :label="item.second_name"
                  :value="item.second_id">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="searchFrom.threeId" filterable clearable @change="threeChange" placeholder="请选择">
                <el-option
                  v-for="item in categoryThree"
                  :key="item.three_id"
                  :label="item.three_name"
                  :value="item.three_id">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select v-model="searchFrom.fourId" filterable clearable placeholder="请选择">
                <el-option
                  v-for="item in categoryFour"
                  :key="item.four_id"
                  :label="item.four_name"
                  :value="item.four_id">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1"></el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-button type="primary" @click="search">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import HeadInformation from "@/components/HeadInformation";
import { categoryFirst, categoryFour, categorySecond, categoryThree } from "@/assets/js/table/category";
import { getPaperPage, paperCollect, paperView } from "@/assets/js/table/Paper";

export default {
  name: "Home",
  components: {
    HeadInformation
  },
  data() {
    return {
      categoryFirst: [],
      categorySecond: [],
      categoryThree: [],
      categoryFour: [],
      searchFrom: {
        categoryId: "",
        secondId: "",
        threeId: "",
        fourId: ""
      },
      list: [],
      total: 0,
      pagePagination: {
        page: 1,
        limit: 10
      }
    };
  },
  created() {
    let searchItem = sessionStorage.getItem("searchItem");
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (searchItem) {
      this.searchFrom = JSON.parse(searchItem);
    }
    this.init();
  },
  mounted() {
  },
  methods: {
    init() {
      this.getPaper();
      this.getCategory();
      this.getCategorySecond();
      this.getCategoryThree();
      this.getCategoryFour();
    },
    getPaper() {
      let pagePagination = {
        page: this.pagePagination.page,
        limit: this.pagePagination.limit,
        categoryId: this.searchFrom.categoryId,
        secondId: this.searchFrom.secondId,
        threeId: this.searchFrom.threeId,
        fourId: this.searchFrom.fourId,
        userId: this.userInfo.user_id
      };
      getPaperPage(pagePagination).then(res => {
        if (res.code === 200) {
          this.list = res.data.list;
          this.total = res.data.total;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getCategory() {
      categoryFirst({}).then(res => {
        if (res.code === 200) {
          this.categoryFirst = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getCategorySecond() {
      categorySecond(this.form).then(res => {
        if (res.code === 200) {
          this.categorySecond = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getCategoryThree() {
      categoryThree(this.form).then(res => {
        if (res.code === 200) {
          this.categoryThree = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getCategoryFour() {
      categoryFour(this.form).then(res => {
        if (res.code === 200) {
          this.categoryFour = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    categoryChange(e) {
      this.getCategorySecond();
      this.getCategoryThree();
      this.getCategoryFour();
    },
    secondChange(e) {
      this.getCategoryThree();
      this.getCategoryFour();
    },
    threeChange(e) {
      this.getCategoryFour();
    },
    search() {
      sessionStorage.setItem("searchItem", JSON.stringify(this.searchFrom));
      this.getPaper();
    },
    paperView(event) {
      let data = new FormData();
      data.append("paperId", event.paper_id);
      data.append("userId", this.userInfo.user_id);
      paperView(data).then(res => {
        window.open("/pdf/web/viewer.html?file=" + encodeURIComponent(event.paper_url));
      });
    },
    load() {
      this.$router.push("/");
    },
    collect(event) {
      let data = new FormData();
      data.append("paperId", event.paper_id);
      data.append("userId", this.userInfo.user_id);
      paperCollect(data).then(res => {
        if (res.code === 200) {
          this.$message.success("收藏成功");
        } else {
          this.$message.error(res.message);
        }
      });
    }
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
          padding: 20px 0 15px;
        }
      }

      .list {
        width: 100%;
        margin-top: 10px;
        overflow: hidden;
        padding: 0 30px 20px;
        box-sizing: border-box;

        .table-note {
          margin-top: 30px;
          text-align: center;

          p {
            color: #f1f1f1;
            font-size: 20px;

            a {
              color: #ffffff;
            }
          }
        }

        .nav {
          padding: 10px 0;
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
                border: 0;
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
                border: 0;
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