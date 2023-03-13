<template>
  <div id="home">
    <el-container class="mainPage">
      <el-header class="my-el-header">
        <HomeHeader></HomeHeader>
      </el-header>

      <el-container id="menucontainer" style="">
        <el-aside
          class="asidepart"
          width="200px"
          style=""
          v-show="!ismenufold"
          v-if="showSideByRoute()"
        >
          <Menu :fUrls="fullURLS"></Menu>
        </el-aside>
        <el-container>
          <el-main>
            <div
              style="
                height: 35px;
                font-size: 23px;
                font-weight: bold;
                margin: -5px 0 10px -10px;
              "
              v-if="showTitle()"
            >
              {{this.$route.meta.title}}
            </div>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "./components/Header/HomeHeader.vue";
import Menu from "./components/Menu/Menu.vue";

export default {
  components: {
    HomeHeader,
    Menu,
  },

  data() {
    return {
      ismenufold: false,
    };
  },
  methods: {
    testSelect(index, indexPath) {
    },
    showSideByRoute() {
      if (this.$route.name == "exhibition") {
        return false;
      } else {
        return true;
      }
    },
    showTitle(){
      if(this.$route.meta.title){
        return true
      }
      return false
    }
  },
  computed: {
    fullURLS() {
      let projectName = this.$route.params.projectName;
      let projectID = this.$route.params.projectID;
      let projectType = this.$route.params.projectType;
      let urls = `/home2/projectspage/${projectID}/${projectName}/${projectType}`;
      // let urls="/home2/projectspage/:projectID/:projectName/:projectType"
      return urls;
    },
  },
  mounted() {
    //通过全局事件总线直接挂载自定义事件实现任意组件间通信
    //设定事件时若采用直写匿名函数的方式需要使用箭头函数
    this.$bus.$on("foldmenufromheader", (data) => {
      this.ismenufold = data;
    });
  },
  beforeDestroy() {
    //组件销毁时解绑其上定义的自定义事件
    this.$bus.$off("foldmenufromheader");
  },
};
</script>

<style lang="scss" scoped>
.mainPage {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 0px solid #eee;
  background-color: rgb(238, 241, 246);
}

.my-el-header {
  text-align: left;
  font-size: 30px;
  font-style: bold;
  color: white;
  padding: 0 !important;
}

.el-container {
  height: 100%;
}

.asidepart {
  background-color: black;
  height: 100%;
  overflow: auto;
  position: relative;
  // padding-bottom: 30px;

  ::v-deep > ul {
    // border: 5px solid red;
    padding-bottom: 60px;
  }
}
/* 
.el-menu {
  width: 200px !important;
  border: 0 solid black;
} */

.el-header {
  // background-color: #1a67a3;
  background-color: $main-theme-color;
  color: #333;
  line-height: 45px;
  height: 55px !important;
}

.el-aside {
  color: #333;
}

.el-main {
  height: 100% !important;
}

#menucontainer {
  height: 100%;
}

/* 滚动条样式 */
#menucontainer > ::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  margin-left: -5px;
  border: 1px solid black;
  /* visibility: hidden; */
}
#menucontainer > ::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  /* border-radius: 10px; */
  /* box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1); */
  background: #919696;
  border: 1px solid grey;
  /* height: 50%; */
  width: 100px;
  /* height: 50% !important; */
}
#menucontainer > ::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1); */
  /* border-radius: 10px; */
  background: #333334;
  border: 1.5px solid rgb(105, 104, 104);
}
</style>