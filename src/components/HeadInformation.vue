<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        <img src="https://weixuewebchat.oss-cn-hangzhou.aliyuncs.com/banner/logo.png" alt="">
      </a>
    </div>
    <div class="menu">
      <div class="user" v-if="userInfo">
        <a href="/user">
          <img :src="userInfo.avatar">
        </a>
      </div>
      <div class="list">
        <div class="nav" v-if="userInfo == null">
          <a @click="onLogin">
            <p>登录</p>
          </a>
        </div>
        <div class="nav">
          <a href="/">
            <p>查询</p>
          </a>
        </div>
        <div class="nav">
          <a href="/History">
            <p>记录</p>
          </a>
        </div>
        <div class="nav" v-if="userInfo">
          <a @click="LogOut">
            <p>注销</p>
          </a>
        </div>

      </div>

    </div>
    <!--登录弹窗-->
    <div class="template" v-show="login" @touchmove.prevent>
      <div class="bg" @click="loginClose"></div>
      <div class="box">
        <div class="login">
          <h3>在这里登录</h3>
          <el-form ref="form" :model="form" label-width="0px">
            <el-form-item>
              <el-input v-model="form.email" placeholder="请输入邮箱" class="login-email">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" show-password placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-form-item>
            <div class="login-text">
              <a href=""><span>忘记密码？</span></a>
            </div>
            <el-form-item class="login-btn">
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>

</template>
<script>

import { login } from "@/assets/js/api";
import md5 from "js-md5";

export default {
  name: "HeadInformation",
  props: {
    msg: String
  },
  data() {
    return {
      login: false,
      form: {
        name: "",
        email: "",
        password: ""
      },
      userInfo: null
    };
  },
  created() {
    let userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }
  },
  methods: {
    LogOut() {
      sessionStorage.clear();
      this.$parent.load();
    },
    onSubmit() {
      const form = {
        email: this.form.email,
        password: md5(this.form.password)
      };
      login(form).then(res => {
        if (res.code === 200) {
          this.$message.success("登录成功");
          this.login = false;
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("userInfo", JSON.stringify(res.data.user));
          this.userInfo = res.data.user;
          this.$emit("func", this.userInfo);
        } else {
          this.$message.error(res.message);
        }
      });
    },

    onLogin() {
      this.login = true;
    },
    loginClose() {
      this.login = false;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #3457a5;
  z-index: 100;
  padding: 0 20px;
  box-sizing: border-box;

  .logo {
    width: 200px;
    float: left;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1000;
    height: 100%;

    img {
      height: 25px;
    }
  }

  .menu {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;

    .list {
      float: left;
      margin-left: 30px;

      .nav {
        float: left;
        margin-right: 30px;
        cursor: pointer;

        a {
          list-style: none;
          text-decoration: none;
        }

        p {
          margin: 0;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }

    .user {
      float: left;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }

      a {
        list-style: none;
        text-decoration: none;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #ffffff;
      }
    }
  }

  .template {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10001;
      background: rgba(0, 0, 0, 0.6);
      bottom: 0;
    }

    .box {
      position: absolute;
      border-radius: 5px;

      left: 0;
      right: 0;
      width: 500px;
      height: 300px;
      bottom: 0;
      z-index: 10002;
      top: 50%; /*偏移*/
      margin: -250px auto 0;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px 50px;
      box-sizing: border-box;

      .login {
        h3 {
          font-size: 28px;
          text-align: center;
          font-weight: normal;
          color: #ffffff;
        }

        .el-form-item {
          &:nth-child(2) {
            margin-bottom: 10px;
          }
        }

        .login-email {
          .el-input__inner {
            background-color: rgba(0, 0, 0, 0);
            border: 1px solid #3457a5;
          }
        }

        .login-btn {
          text-align: center;
          margin-bottom: 0;

          .el-button {
            padding: 12px 60px;
            //background: #3457a5;
            //border: 1px solid #3457a5;
          }
        }

        .login-text {
          margin-bottom: 20px;
          text-align: right;

          span {
            font-size: 12px;
            color: #ffffff;
          }
        }

      }
    }
  }
}
</style>
