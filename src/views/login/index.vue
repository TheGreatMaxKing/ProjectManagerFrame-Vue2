<template>
  <div class="LoginPage">
    <h1>PMIS</h1>
    <div class="LoginBox">
      <div class="logintitle">登录</div>
      <el-divider></el-divider>
      <div>
        <span class="logintext">用户名</span>
        <el-input
          class="loginInput"
          v-model="userinfo.username"
          placeholder="请输入用户名"
        ></el-input>
      </div>
      <div>
        <span class="logintext">密码</span>
        <el-input
          class="loginInput"
          placeholder="请输入密码"
          v-model="userinfo.password"
          show-password
        ></el-input>
      </div>
      <div class="">
        <el-button type="primary" class="loginButton" @click="login(userinfo.username,userinfo.password)"
          >Login</el-button
        >
        <div class="forgetandcreate">
          <div>
            <router-link class=".loginlink" to="/home">忘记密码</router-link>
          </div>
          <div>
            <router-link class=".loginlink" to="/home">创建新账户</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";
import { loginApi } from "../../api/user.js";

export default {
  data() {
    return {
      userinfo: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    gettoken(user, password) {
      return axios({
        method: "post",
        url: "http://localhost:3000/users/login",
        data: {
          email: user,
          password: password,
        },
      });
    },

    login(username,password) {

      // 发起登录认证，若成功则后端返回一个token（也可以同时返回其他用户信息）
      loginApi(username,password).then(
        (response) => {
          let token = response?.data?.data?.token;
          console.log("TTTKKK",token,response)
          // this.members = response.data;
          Cookie.set("token", token);
          this.$store.commit("user/settoken", token);

          // localStorage.setItem("username", JSON.stringify(this.userinfo.username));
          this.$router.push({
            name: "exhibition",
          });
        },
        (error) => {
          console.log("error", error);
          // this.members = [];
          Cookie.remove("token");
          // alert("用户名或密码错误");
        }
      );
    },
  },
  watch: {
    userinfo: {
      deep: true,
      handler(value) {
        // localStorage.setItem("userinfo", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
.LoginBox {
  width: 500px;
  height: 300px;
  margin: auto;
  margin-top: 60px;
  background-color: rgb(50, 160, 204, 0.1);
  /* padding: 20px; */
  padding: 20px 15px 0px 30px;
  position: relative;
}
.loginInput {
  width: 400px;
  /* position: absolute; */
  /* top:20px;
        left:180px; */
  /* margin-right: 0px; */

  margin: 5px 0 20px;
}

.logintitle {
  height: 40px;
  font-size: 35px;
  font-family: "微软雅黑";
  line-height: 40px;
}

.logintext {
  width: 80px;
  display: inline-block;
}

.forgetandcreate {
  display: inline-block;
}

.loginButton {
  vertical-align: bottom;
  margin-right: 300px!important;
  /* height: 40px; */
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>