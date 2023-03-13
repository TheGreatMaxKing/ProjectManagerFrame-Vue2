<template>
  <div style="height: 100%; width: 100%;">
    <common-card title="Project Information">
      <div>
      <div class="aline">
        <span class="attributetext">Background</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="backgroundtext"
          class="inputtext"
        >
        </el-input>
      </div>
      <div class="aline">
        <span class="attributetext">Objective</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="objecttext"
          class="inputtext"
        >
        </el-input>
      </div>
      <div class="aline">
        <span class="attributetext">Delivered Product</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="deliverProducttext"
          class="inputtext"
        >
        </el-input>
      </div>
      <div class="aline">
        <span class="attributetext">Kick-off date</span>
        <el-date-picker
          v-model="kickoffDate"
          type="date"
          placeholder="选择日期"
          class="datepicker"
        >
        </el-date-picker>
      </div>
      <div class="aline">
        <span class="attributetext">Portfolio</span>
        <el-select v-model="portfolioValue" placeholder="请选择" class="portfolioselect rectifySelectDropdown" :popper-append-to-body="false" >
          <el-option
            v-for="item in portfolioOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="aline">
        <span class="attributetext">Program</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="programtext"
          class="inputtext"
        >
        </el-input>
      </div>
      <div class="aline">
        <span class="attributetext">Category</span>
        <el-select v-model="portfolioValue" placeholder="请选择" class="portfolioselect  rectifySelectDropdown" :popper-append-to-body="false">
          <el-option
            v-for="item in portfolioOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="aline">
        <span class="attributetext">Domain</span>
        <el-select v-model="portfolioValue" placeholder="请选择" class="portfolioselect  rectifySelectDropdown" :popper-append-to-body="false">
          <el-option
            v-for="item in portfolioOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="aline">
        <span class="attributetext">Customer</span>
        <el-select v-model="portfolioValue" placeholder="请选择" class="portfolioselect  rectifySelectDropdown" :popper-append-to-body="false">
          <el-option
            v-for="item in portfolioOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="aline">
        <span class="attributetext">Organization</span>
        <el-select v-model="portfolioValue" placeholder="请选择" class="portfolioselect  rectifySelectDropdown" :popper-append-to-body="false">
          <el-option
            v-for="item in portfolioOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      </div>
    </common-card>
  </div>
</template>

<script>
import CommonCard from '@/components/CommonCard';

export default {
  components:{
    CommonCard,
  },

  data() {
    return {
      backgroundtext: "",
      objecttext:"",
      deliverProducttext:"",
      kickoffDate: "",
      programtext:"",
      portfolioOptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
        ],
        portfolioValue: ''
    };
  },
};
</script>

<style >
.rectifySelectDropdown .el-select-dropdown{
  position: absolute !important;
   left: 0 !important;
   top: 30px !important;
   z-index: 99!important;
}
/* .clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.box-card .el-card__body, .el-main{
  padding: 12px 20px;
  overflow: auto;
  height: 82.5%;

} */

.aline {
  margin-bottom: 8px;
}

.attributetext {
  display: inline-block;
  margin-right: 12px;
  margin-top: 6px;
  width: 30%;
  /* border: 1px solid red; */
  font-size: 16px;
  overflow: hidden;
}

.inputtext .el-textarea__inner {
  color: #000000 !important;
  font-size: 15px;
}

.inputtext {
  /* width:350px; */
  vertical-align: top;
  /* float: right; */
  width: 65%;
}

.datepicker {
  vertical-align: top;
  width: 310px;
  /* overflow: hidden; */
  padding-right: 1px;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 65%;
}

.datepicker .el-input__inner {
  width: 100% !important;
  height: 30px;
}

.datepicker .el-input__icon {
  height: 30px;
  line-height: 30px;
}


.portfolioselect{
  vertical-align: top;
  width: 65%;
}

.portfolioselect .el-input--suffix .el-input__inner{
  height: 30px;
}

 .portfolioselect .el-input__suffix {
      top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
    }
  .portfolioselect .el-input__icon {
      line-height: 32px;
    }
</style>