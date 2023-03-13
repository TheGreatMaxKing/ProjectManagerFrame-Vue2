<template>
  <div style="">

    <el-row :gutter="10" style="height: 500px">
      <el-col :span="12"><ProjectInformation></ProjectInformation></el-col>
      <el-col :span="12">
        <div class="testBox" style="height: 240px; margin-bottom: 20px">
          <Members></Members>
        </div>
        <div class="testBox" style="height: 240px">
          <BudgeCard></BudgeCard>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="10" style="height: 250px">
      <el-col :span="24"><MileStoneCard></MileStoneCard></el-col>
    </el-row>

    <el-row :gutter="10" style="height: 250px; margin-bottom: 60px">
      <el-col :span="24" style=""><RollOutCard></RollOutCard></el-col>
    </el-row>
  </div>
</template>

<script>
import ProjectInformation from "./components/ProjectInformation";
import Members from "./components/Members";
import BudgeCard from "./components/BudgetCard";
import RollOutCard from "./components/RollOutCard";
import MileStoneCard from "./components/MileStoneCard";

export default {
  components: {
    ProjectInformation,
    Members,
    BudgeCard,
    RollOutCard,
    MileStoneCard,
  },
};
</script>
<style>
.returformSelect .el-select-dropdown{
  position: absolute !important;
   left: 0 !important;
   top: 40px !important;
}
</style>

<style scoped>
.returformSelect {
   height:300px!important;

 }

.testBox {
  height: 100%;
  width: 100%;
  background-color: rgb(16, 146, 211);
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  height: 100%;
  /* padding-bottom: 40px; */
}
</style>