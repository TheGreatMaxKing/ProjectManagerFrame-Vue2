<template>
  <el-card class="box-card" style="height: 100%; width: 100%">
    <div slot="header" class="clearfix" style="height:15px;line-height:15px">
      <span style="font-size: 17px; font-weight: bold">
        {{title}}
      </span>
    </div>
    <slot style="">defaultSlot</slot>
  </el-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* .box-card {
  width: 480px;
} */

.box-card .el-card__body,
.el-main {
  padding: 12px 20px;
  overflow: auto;
  height: 82.5%;
  /* border:1px solid red; */
}
</style>