<template>
  <el-dropdown trigger="click" id="ProjectsMenu" @click.native="clickMenu">
    <span id="ProjectsMenuButtonSpan">
      <span id="ProjectsMenuSpan"
        >{{ this.project.projectName || "选择一个项目" }}
      </span>
      <span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    </span>
    <el-dropdown-menu id="projectDropDownMeun" slot="dropdown">
      <div style="margin: 10px 10px; font-size: 18px; font-weight: 800">
        项目
      </div>
      <el-input
        placeholder="搜索项目"
        prefix-icon="el-icon-search"
        style="margin: 0 10px; width: 430px"
        v-model="searchname"
      >
      </el-input>
      <div class="drowpDownMenuProjectsSpace">
        <div v-loading="loading">
          <projects-menu-item
            :projectlist="searchedProjectList"
            :searchname="searchname"
          />
          <div
            v-show="searchedProjectList.length == 0 && !error"
            class="unfindproject"
          >
            未找到项目
          </div>
          <!-- <el-alert v-show="error" title="请求错误，请刷新后重试"  type="error" :closable="false">
          </el-alert> -->
          <div v-show="error" style="color: red" class="unfindproject">
            请求错误，请刷新后重试
          </div>
        </div>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import ProjectsMenuItem from "./components/ProjectsMenuItem.vue";
import { postAllProjects } from "@/api/projects";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: { ProjectsMenuItem },

  data() {
    return {
      searchname: "",
      loading: true,
      error: false,
      // projectList: [
      //   {
      //     name: "ScrumP1wwwwwwwwwwww",
      //     type: "scrum",
      //     searchIndex: 0,
      //     childsearched: true,
      //     children: [
      //       {
      //         name: "ScrumP1-1",
      //         type: "scrum",
      //         searchIndex: 0,
      //         childsearched: true,
      //         children: [],
      //       },
      //       {
      //         name: "ScrumP1-2",
      //         type: "scrum",
      //         children: [
      //           {
      //             name: "ScrumP1-2-1",
      //             type: "scrum",
      //             searchIndex: 0,
      //             childsearched: true,
      //             children: [],
      //           },
      //           {
      //             name: "ScrumP1-2-2",
      //             type: "scrum",
      //             searchIndex: 0,
      //             childsearched: true,
      //             children: [],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "WaterfallP1-1",
      //     type: "waterfall",
      //     searchIndex: 0,
      //     childsearched: true,
      //     children: [],
      //   },
      //   {
      //     name: "ScrumP1wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
      //     type: "scrum",
      //     searchIndex: 0,
      //     childsearched: true,
      //     children: [
      //       {
      //         name: "ScrumP1-1",
      //         type: "scrum",
      //         searchIndex: 0,
      //         childsearched: true,
      //         children: [],
      //       },
      //       {
      //         name: "ScrumP1-2",
      //         type: "scrum",
      //         searchIndex: 0,
      //         childsearched: true,
      //         children: [
      //           {
      //             name: "ScrumP1-2-1",
      //             type: "scrum",
      //             searchIndex: 0,
      //             childsearched: true,
      //             children: [],
      //           },
      //           {
      //             name: "ScrumP1-2-2",
      //             type: "scrum",
      //             searchIndex: 0,
      //             childsearched: true,
      //             children: [],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "WaterfallP1-1",
      //     type: "waterfall",
      //     searchIndex: 0,
      //     childsearched: true,
      //     children: [],
      //   },
      // ],
      // projectList:[
      //   {
      //     name:"wow",
      //     type:"ssd",
      //     children:[]
      //   },
      //   {
      //     name:"yoy",
      //     type:"sdf",
      //     children:[]
      //   }
      // ],
      projectList: [],
      searchedProjectList: [],
      openMeun: true,
    };
  },
  computed: {
    ...mapState(["project"]),
  },
  methods: {
    searchString(obj, substring) {
      return obj.toUpperCase().search(substring.toUpperCase());
    },

    searchProjects(projectList) {
      let list = [].concat(projectList);
      list.forEach((e) => {
        e["searchIndex"] = this.searchString(e.name, this.searchname);
        this.searchProjects(e.children);
      });
      return list;
    },

    // 根据搜索内容过滤ProjectList
    // Mock版本
    // searchProjects2(projectList, searchedProjectList) {
    //   if(!Array.isArray(projectList)){
    //     return false;
    //   }

    //   if (projectList.length == 0) {
    //     return false;
    //   }
    //   let findnameOrFindNameInSons = false;
    //   projectList.forEach((e) => {
    //     let index = this.searchString(e.name, this.searchname);
    //     if (index >= 0) {
    //       findnameOrFindNameInSons = true;
    //     }
    //     let listm = [];
    //     let childrenSearched = this.searchProjects2(e.children, listm);
    //     if (childrenSearched) {
    //       findnameOrFindNameInSons = true;
    //     }
    //     if (index > -1 || childrenSearched) {
    //       let obj={...e}
    //       obj["searchIndex"] = index;
    //       obj["childsearched"] = childrenSearched;
    //       obj.children = listm;
    //       searchedProjectList.push(obj);
    //     }
    //   });
    //   return findnameOrFindNameInSons;
    // },

    // 请求yundongAPI版本
    searchProjects2(projectList, searchedProjectList) {
      if (!Array.isArray(projectList)) {
        return false;
      }

      if (projectList.length == 0) {
        return false;
      }
      let findnameOrFindNameInSons = false;
      projectList.forEach((e) => {
        let index = this.searchString(e.projectName, this.searchname);
        if (index >= 0) {
          findnameOrFindNameInSons = true;
        }
        let listm = [];
        let childrenSearched = this.searchProjects2(e.children, listm);
        if (childrenSearched) {
          findnameOrFindNameInSons = true;
        }
        if (index > -1 || childrenSearched) {
          let obj = {};
          obj["name"] = e["projectName"];
          obj["id"] = e["id"];
          let projectType = "";
          if (e.templateId == 1) {
            projectType = "waterfall";
          }
          if (e.templateId == 2) {
            projectType = "scrum";
          }
          obj["type"] = projectType;
          obj["searchIndex"] = index;
          obj["childsearched"] = childrenSearched;
          obj.children = listm;
          searchedProjectList.push(obj);
        }
      });
      return findnameOrFindNameInSons;
    },

    getAllProjectsByAPI() {
      postAllProjects().then(
        (res) => {
          this.searchedProjectList = [];
          this.projectList = [];
          this.projectList = res?.data?.data?.list;
          console.log("AllProject", res, this.projectList);
          let r = this.searchProjects2(
            this.projectList,
            this.searchedProjectList
          );
          this.loading = false;
        },
        (rej) => {
          // alert(rej);
          this.loading = false;
          this.error = true;
        }
      );
    },

    clickMenu() {
      console.log("clickMenu");
      this.loading = true;
      this.error = false;
      this.searchedProjectList = [];
      this.searchname = "";
      if (this.openMeun) {
        this.getAllProjectsByAPI();
      }
      this.openMeun=!this.openMeun
    },
  },
  watch: {
    searchname: {
      // immediate: true,
      handler(newvalue, oldvalue) {
        // this.searchedProjectList=[]
        // this.searchedProjectList=this.searchProjects(this.projectList)
        this.searchedProjectList = [];
        let r = this.searchProjects2(
          this.projectList,
          this.searchedProjectList
        );
      },
    },
  },
  mounted() {
    // this.getAllProjectsByAPI();
  },
};
</script>

<style lang="scss" scoped>
#ProjectsMenu {
  $Pheight: 50px;
  $Pwidth: 200px;
  margin: 0 0 0px 0px;
  height: 100%;
  padding: 0 10px;
  //   width: $Pwidth;
  line-height: $Pheight;
  font-weight: 700;
  z-index: 99;
  color: white;
  text-align: center;
  white-space: nowrap;
  background-color: $main-theme-color-active;
  //   border: 1px solid red;
  &:hover {
    background-color: $main-theme-color-hover;
  }
  > span {
    overflow: hidden;
    display: inline-block;
    // width: $Pwidth;
    margin: auto;
  }
  #ProjectsMenuButtonSpan {
    max-width: 300px;
    display: inline-block;
    span {
      height: $Pheight;
      line-height: $Pheight;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    #ProjectsMenuSpan {
      max-width: 200px;
    }
  }
}

.unfindproject {
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  margin: 10px 0 10px 20px;
}

.popper__arrow ::after {
  border-bottom-color: rgb(233, 230, 0) !important;
}

.el-dropdown-menu {
  width: 450px;
  left: 61px !important;
  top: 53px !important;
  border-radius: 2px;
  margin: 0;
  padding: 0 0 0 0;
}

.drowpDownMenuProjectsSpace {
  max-height: 300px;
  padding-bottom: 10px;
  overflow: auto;
}
</style>

<style >
/* .el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: rgb(255, 0, 0, 0) !important;
}

.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: rgb(255, 0, 0, 0) !important;
} */
</style>