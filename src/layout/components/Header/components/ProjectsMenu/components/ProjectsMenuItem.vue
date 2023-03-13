<template>
  <div>
    <div
      class="el-project-item"
      v-for="(value, index) in projectlist"
      :key="value.name + index"
    >
      <div
        class="el-projectname"
        :style="setGreyStyle(value.searchIndex)"
        @click="jump(value.name, value.type, value.id)"
      >
        <projects-menu-item-words
          :projectname="value.name"
          :searchname="searchname"
          :searchIndex="value.searchIndex"
        ></projects-menu-item-words>
      </div>
      <projectMenuItem :projectlist="value.children" :searchname="searchname" />
    </div>
  </div>
</template>

<script>
import ProjectsMenuItemWords from "./ProjectsMenuItemWords.vue";
import { getUrlsByProject } from "@/api/user";
import Cookie from "js-cookie";

export default {
  name: "projectMenuItem",
  data() {
    return {};
  },
  components: {
    ProjectsMenuItemWords,
  },
  props: ["projectlist", "searchname"],

  methods: {
    showOrNotShowItem(searchIndex, hasChild, value) {
      if (searchIndex < 0 && hasChild == false) {
        return false;
      } else {
        return true;
      }
    },
    setGreyStyle(searchindex) {
      if (this.searchname == "") {
        return {
          color: "black",
        };
      }
      if (searchindex < 0) {
        return {
          color: "grey",
        };
      } else {
        return {
          // color:"rgb(26, 103, 163)"
        };
      }
    },
    jump(projectname, projecttype, projectid) {
      console.log("Pinform",projectname, projecttype, projectid)
      // let ht = document.getElementById('MenuItemoverview');
      // ht?.setAttribute("class", "el-menu-item is-active");
      // console.log("HHHHTTTT",ht)

      // Cookie.set("Project", projectname);
      // Cookie.set("ProjectType", projecttype);
      this.$store.commit("project/setProjectInform", {
        projectName: projectname,
        projectType: projecttype,
        projectId: projectid,
      });

      ////////路由跳转方案1
      this.$store.commit("permission/setPermittedRoutes",[])
      this.$router.push({
            name: "overview",
            params: {
              projectID: projectid,
              projectName: projectname,
              projectType: projecttype,
            },
          });
      ///////


      ///////路由跳转方案2
      // getUrlsByProject(projecttype).then(
      //   (res) => {
      //     console.log("getUrlsByProject", res);
      //     // let permittedurls = this.$store.state.permission.permittedRoutes;
      //     this.$store.commit(
      //       "permission/setPermittedRoutes",
      //       res?.data?.Urlsname
      //     );
      //     this.$router.push({
      //       name: "overview",
      //       params: {
      //         projectID: projectid,
      //         projectName: projectname,
      //         projectType: projecttype,
      //       },
      //     });
      //     // location.reload();
      //     console.log("PPPPUUUU", this.$store.state.permission.permittedRoutes);
      //   },
      //   (error) => {
      //     alert("获取项目路由失败", error);
      //   }
      // );
      //////
      let divMenu = document.getElementById("ProjectsMenuSpan");

      divMenu.click();

      // let overviewMeunItem = document.getElementById("MenuItemoverviewI");
      // console.log("DIV", overviewMeunItem);
      // overviewMeunItem.click();
    },
  },
};
</script>

<style  lang="scss" scoped>
.el-project-item {
  //   overflow: hidden;

  margin-left: 20px;
  margin-top: 10px;
  // border:1px solid red;
  // width: 100px;

  // width: 100px;
  .el-projectname {
    /////////文字长度超出边界则显示省略号
    // overflow: hidden;
    white-space: nowrap;
    // text-overflow: ellipsis;
    ////////
    font-size: 15px;
    height: 20px;
    line-height: 20px;
    &:hover {
      text-decoration: underline;
      color: $main-theme-color-hover;
    }
  }
}
</style>