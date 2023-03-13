<template>
  <el-menu
    class="menu"
    background-color="#000000"
    :text-color="scssVariables['text-color-white']"
    :default-active="$route.name"
    router
  >
    <el-menu-item
      id="MenuItemoverview"
      index="overview"
      :route="`${fullURLS}/overview`"
      @click.native="clickMenuItem('MenuItemoverview')"
      ><i id="MenuItemoverviewI" class="el-icon-info icon"></i
      >概述</el-menu-item
    >

    <el-submenu index="1" id="subMenuTest">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>工作包</span>
      </template>
      <el-menu-item
        index="projectplan"
        :route="`${fullURLS}/workpackage/projectplan`"
        ><i class="el-icon-office-building icon"></i>项目计划</el-menu-item
      >
      <el-menu-item index="cost" :route="`${fullURLS}/workpackage/cost`"
        ><i class="el-icon-office-building icon"></i>预算</el-menu-item
      >
    </el-submenu>

    <el-menu-item
      id="MenuItemactivity"
      index="activity"
      :route="`${fullURLS}/activity`"
      ref="activityMenuItem"
      @click.native="clickMenuItem('MenuItemactivity')"
      ><i class="el-icon-check icon"></i>活动</el-menu-item
    >
    <el-menu-item
      id="MenuItemroadmap"
      index="roadmap"
      :route="`${fullURLS}/roadmap`"
      @click.native="clickMenuItem('MenuItemroadmap')"
      ><i class="el-icon-s-grid icon"></i>版本蓝图</el-menu-item
    >
    <el-menu-item
      id="MenuItemboards"
      index="boards"
      :route="`${fullURLS}/boards`"
      @click.native="clickMenuItem('MenuItemboards')"
      ><i class="el-icon-office-building icon"></i>工作台</el-menu-item
    >
    <el-menu-item
      id="MenuItemwaterfallTestPage"
      index="waterfallTestPage"
      :route="`${fullURLS}/waterfallTestPage`"
      v-show="showMeunByProjectType('waterfall')"
      @click.native="clickMenuItem('MenuItemwaterfallTestPage')"
      ><i class="el-icon-office-building icon"></i>waterfall</el-menu-item
    >
    <el-menu-item
      id="MenuItemscrumTestPage"
      index="scrumTestPage"
      :route="`${fullURLS}/scrumTestPage`"
      v-show="showMeunByProjectType('scrum')"
      @click.native="clickMenuItem('MenuItemscrumTestPage')"
      ><i class="el-icon-office-building icon"></i>scrum</el-menu-item
    >
    <el-menu-item
      id="MenuItemadmin"
      index="admin"
      :route="`${fullURLS}/admin`"
      @click.native="clickMenuItem('MenuItemadmin')"
      ><i class="el-icon-user-solid icon"></i>用户管理</el-menu-item
    >
  </el-menu>
</template>

<script>
import Cookie from "js-cookie";
import scssVariables from '@/styles/variables.module.scss'
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      tdata: 0,
      scssVariables,
    };
  },
  methods: {
    // showMenu(){
    //   routename=""
    // }
    showMeunByProjectType(type) {
      if (this.project.projectType == type) {
        return true;
      } else {
        return false;
      }
    },

    clickMenuItem(ID) {
      // let HTMLID = [
      //   "MenuItemoverview",
      //   "MenuItemactivity",
      //   "MenuItemroadmap",
      //   "MenuItemboards",
      //   "MenuItemwaterfallTestPage",
      //   "MenuItemscrumTestPage",
      //   "MenuItemadmin",
      // ];
      // for (let id of HTMLID) {
      //   let ht = document.getElementById(id);
      //   console.log("HHHHHHHHTT", id);
      //   ht.setAttribute("class", "el-menu-item");
      // }
      // let ht = document.getElementById(ID);
      // ht.setAttribute("class", "el-menu-item is-active");
    },

    setActiveStyle(indexUrl) {
      if (indexUrl == this.$route.fullPath) {
        return {
          backgroundColor: "rgb(23,90,142)!important",
        };
      } else {
        return {};
      }
    },
  },
  props: ["fUrls"],
  computed: {
    ...mapState(["project"]),
    fullURLS() {
      let projectName = this.project.projectName;
      let projectID = this.project.projectID;
      let projectType = this.project.projectType;

      let urls = `/home2/projectspage/${projectID}/${projectName}/${projectType}`;
      // let urls="/home2/projectspage/:projectID/:projectName/:projectType"
      return urls;
    },
  },
  mounted() {
    console.log("SCSSV",scssVariables)
    // debugger;
  },
  beforeUpdate() {
    // debugger;
  },
  updated() {
    // debugger;
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  width: 200px !important;
  border: 0 solid black;
}
.el-menu-item,
::v-deep .el-submenu__title {
  height: 40px !important;
  line-height: 40px !important;
  font-size: 14px;
  &:hover {
    outline: 0 !important;
    background-color: $main-theme-color-hover !important;
  }
  .icon,
  .el-icon-location {
    margin: 8px 20px 0 0px !important;
    /* vertical-align:super; */
    height: 30px !important;
  }
}

.is-active {
  outline: 0 !important;
  background-color: $main-theme-color-active !important;
  color: white !important;
}

// .icon {
//   margin: 8px 20px 0 0px !important;
//   /* vertical-align:super; */
//   height: 30px !important;
// }
</style>