<template>
  <div class="headerdiv">
    <div class="headerleft">
      <button
        class="flod-menu-button"
        @click="foldMenu"
        v-if="showSideByRoute()"
      >
        <i :class="iconClass" />
      </button>
      <projects-menu></projects-menu>
    </div>
    <div class="headermiddle">
      <img
        src="../../../assets/images/logo_openproject_white_big.png"
        style="height: 55%"
      />
    </div>
    <div class="headerright" id="headermenu">
      <el-dropdown trigger="click" style="color: white; font-size: 18px">
        <span class="el-dropdown-link">
          <button class="circle" style="">{{ firstnameletter }}</button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的账号</el-dropdown-item>
          <el-dropdown-item @click.native="logout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ProjectsMenu from "./components/ProjectsMenu/index.vue";

export default {
  components: { ProjectsMenu },
  data() {
    return {
      isfold: false,
      username: this.$store.state.user.username,
    };
  },

  // props: ["ismenufold"],

  computed: {
    ...mapState(["user"]),
    iconClass() {
      if (this.isfold) {
        return "el-icon-s-unfold";
      } else {
        return "el-icon-s-fold";
      }
    },
    firstnameletter() {
      return this.user.username.slice(0, 1).toUpperCase();
    },
  },

  methods: {
    foldMenu() {
      this.isfold = !this.isfold;
      this.$bus.$emit("foldmenufromheader", this.isfold);
    },

    logout() {
      this.$router.push({
        name: "login",
      });
      this.$store.commit("user/setName", "");
      this.$store.commit("permission/setPermittedRoutes", []);
      this.$store.commit("project/setProjectInform", {
        projectName: "",
        projectType: "",
      });
      Cookie.remove("Project");
      Cookie.remove("ProjectType");
      Cookie.remove("token");
    },

    showSideByRoute() {
      // console.log("RRRR",this.$route)
      if (this.$route.name == "exhibition") {
        return false;
      } else {
        return true;
      }
    },
  },

  mounted() {
    // console.log("USERINFO",this.$store,this.$store.state.user.username)
    // this.username=this.$store.state.user.username
  },
};
</script>

<style lang="scss" scoped>
.headerdiv {
  /* 父元素设置为浮动布局 */
  display: flex;
  /* 父元素下的子元素位于主轴上的位置为：center */
  justify-content: center;
  /* 父元素下的子元素位于交叉轴上的位置为：center */
  align-items: center;

  height: 100%;
  width: 100%;

  box-sizing: border-box;
  border-bottom: 1px solid $main-theme-color;
  /* border: 1px solid red; */

  > div {
    display: inline-block;
    display: flex;
    /* 父元素下的子元素位于主轴上的位置为：center */
    /* justify-content: center; */
    /* align-items: center; */
    width: 33%;
    overflow: hidden;
    // border:1px solid yellow;
  }
}

// .headerdiv > div {
//   display: inline-block;
//   display: flex;
//   /* 父元素下的子元素位于主轴上的位置为：center */
//   /* justify-content: center; */
//   /* align-items: center; */
//   width: 33%;
//   /* border:1px solid yellow; */
// }

.headerleft {
  height: 100%;
  padding-left: 1px;
  // padding-top: 8px;
  align-items: center;
  font-size: 17px;
  // border: 30px solid red;
}

.headermiddle {
  height: 100%;
  justify-content: center;
  align-items: center;
}

.headerright {
  height: 80%;
  display: flex;
  /* 父元素下的子元素位于主轴上的位置为：center */
  justify-content: right;
  /* 父元素下的子元素位于交叉轴上的位置为：center */
  padding-right: 20px;
  align-items: center;
  font-size: 17px;
  color: white;
  padding-top: 2px;
  /* border:1px solid red; */
}

.flod-menu-button {
  background-color: $main-theme-color-active;
  border: 0 solid blue !important;
  color: $text-color-white;
  padding: 0px !important;
  // margin-right: 25px ;
  margin-right: 1px;
  font-size: 20px;
  height: 100%;
  width: 60px;
  &:hover {
    background-color: $main-theme-color-hover;
    // color: white;
  }
  // @include testborder;
}

.circle {
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: white;
  line-height: 38px;
  background-color: rgb(177, 66, 207, 0.9);
  border: 0 solid red;
  font-size: 19px;
  /* 宽度和高度需要相等 */
}

.circle:hover {
  background-color: rgb(177, 66, 207, 1);
}
</style>

<style scoped>
.el-dropdown-menu {
  border-radius: 2px !important;
  top: 40px !important;
  padding: 0px 0 !important;
}
</style>