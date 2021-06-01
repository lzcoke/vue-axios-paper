<template>
  <div class="home">
    <!-- 头部信息 -->
    <HeadInformation @func="getMsgFormSon"></HeadInformation>
    <!-- 搜索内容 -->
    <div class="search">
      <div class="container">
        <div class="title">
          <h3>快速查询您想要的试卷！</h3>
        </div>
        <el-row class="list">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <div class="nav">
              <el-select @change="categoryChange" v-model="searchFrom.categoryId" placeholder="请选择">
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
              <el-select v-model="searchFrom.secondId" @change="secondChange" placeholder="请选择">
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
              <el-select v-model="searchFrom.threeId" @change="threeChange" placeholder="请选择">
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
              <el-select v-model="searchFrom.fourId" placeholder="请选择">
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
              <el-button type="primary" v-on:click="search">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--    欢迎进入为学试卷系统-->
    <div class="box">
      <div class="welcome">
        <p>欢迎进入为学试卷存储系统！</p>
      </div>
      <div class="num">
        <p>目前在服务器中一共有 19402 张试卷缓存。</p>
      </div>
      <div class="user">
        <p>一共有 19402 用户使用。</p>
      </div>
      <div class="visit">
        <p>过去的七天里，平均每天有 2711 次访问， 10052 次下载。</p>
      </div>
    </div>
    <!--    备案号-->
    <div class="note">
      <a href="https://beian.miit.gov.cn/" target="_blank">
        <p>欢迎进入为学试卷存储系统！</p>
      </a>
    </div>
  </div>
</template>

<script>
import HeadInformation from "@/components/HeadInformation";
import { categoryFirst, categoryFour, categorySecond, categoryThree } from "@/assets/js/table/category";

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
      }
    };
  },
  created() {
    let userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = userInfo;
    }
    this.init();
  },
  mounted() {
  },
  methods: {
    init() {
      this.getCategory();
      this.getCategorySecond();
      this.getCategoryThree();
      this.getCategoryFour();
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
      categorySecond(this.searchFrom).then(res => {
        if (res.code === 200) {
          this.categorySecond = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getCategoryThree() {
      categoryThree(this.searchFrom).then(res => {
        if (res.code === 200) {
          this.categoryThree = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    load() {
      location.reload();
    },
    getCategoryFour() {
      categoryFour(this.searchFrom).then(res => {
        if (res.code === 200) {
          this.categoryFour = res.data.list;
        } else {
          this.$message.warning("网络错误");
        }
      });
    },
    getMsgFormSon(data) {
      this.userInfo = data;
      console.log(this.userInfo);
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
      if (this.userInfo) {
        console.log(this.userInfo);
        this.$router.push("/Search");
      } else {
        this.$message.error("请先登录");
      }
    }
  }
};
</script>
<style lang="scss">
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
}

.search {
  margin-top: 150px;
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 10px;
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
      margin-top: 50px;
      width: 100%;
      display: flex;
      margin-bottom: 40px;

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

.box {
  margin: 80px auto auto;
  width: 600px;
  border-radius: 10px;
  background: #999999;
  padding: 35px 20px;
  box-sizing: border-box;

  .welcome {
    width: 100%;
    display: flex;
    justify-content: center;

    p {
      font-size: 16px;
      color: #ffffff;
    }
  }

  .num {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    p {
      font-size: 16px;
      color: #ffffff;
    }
  }

  .user {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    p {
      font-size: 16px;
      color: #ffffff;
    }
  }

  .visit {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    p {
      font-size: 16px;
      color: #ffffff;
    }
  }
}

.note {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    font-size: 14px;
    color: #999999;
  }
}
</style>