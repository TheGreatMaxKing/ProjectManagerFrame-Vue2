<template>
  <common-card title="Milestone">
    <el-table
      id="mileStoneCardTable"
      :data="milestonedata"
      style="width: 100%; margin-top: -5px"
      size="small"
      header-align="center"
      :border="true"
      max-height="180px"
      cell-class-name="mileStoneRowStyle"
      header-cell-class-name="mileStoneHeaderRowStyle"
      header-row-class-name="mileStoneHeaderRowStyle"
      row-class-name="mileStoneRowStyle"
    >
      <el-table-column prop="type" label="类型" width="100" fixed>
      </el-table-column>
      <el-table-column prop="theme" label="主题" width="140" fixed>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100"
        fixed
      ></el-table-column>
      <el-table-column
        prop="startDate"
        label="开始日期"
        width="100"
        fixed
      ></el-table-column>
      <el-table-column
        prop="endDate"
        label="结束日期"
        width="100"
        fixed
      ></el-table-column>
      <el-table-column label="日期" :width="countDays(dateInform.startYear,dateInform.endYear,dateInform.startMonth,dateInform.endMonth)*20+1">
        <template slot="header">
          <mile-stone-table-date-header
            :startYear="dateInform.startYear"
            :endYear="dateInform.endYear"
            :startMonth="dateInform.startMonth"
            :endMonth="dateInform.endMonth"
          ></mile-stone-table-date-header>
        </template>
        <template slot-scope="scope">
          <ms-table-date-cell :dates="milestonedata" :rowIndex="scope.$index" :rowDate="scope.row.startDate" :beginDate='dateInform.beginDate'></ms-table-date-cell>
        </template>
      </el-table-column>
    </el-table>
  </common-card>
</template>

<script>
import CommonCard from "@/components/CommonCard";
import mileStoneTableDateHeader from "./components/msTableDateHeader";
import msTableDateCell from "./components/msTableDateCell";

export default {
  data() {
    return {
      milestonedata: [
        {
          type: "MILESTONE",
          theme: "Start of project",
          status: "Closed",
          startDate: "2022/08/07",
          endDate: "2022/08/07",
          rowindex:0,
          // DateForShow:{"2022/08/07":0,"2022/08/23":1,"2022/09/09":2},
        },
        {
          type: "MILESTONE",
          theme: "Conference",
          status: "Scheduled",
          startDate: "2022/08/23",
          endDate: "2022/08/23",
          rowindex:1,
          // DateForShow:{"2022/08/07":0,"2022/08/23":1,"2022/09/09":2},
        },
        {
          type: "MILESTONE",
          theme: "End of project",
          status: "New",
          startDate: "2022/09/09",
          endDate: "2022/09/09",
          rowindex:2,
          // DateForShow:{"2022/08/07":0,"2022/08/23":1,"2022/09/09":2},
        },
      ],
      dateInform: {
        startYear: 2022,
        endYear: 2022,
        startMonth: 8,
        endMonth: 9,
        beginDate:'2022/08/07'
      },
    };
  },
  components: {
    CommonCard,
    mileStoneTableDateHeader,
    msTableDateCell,
  },
  methods: {
    addClass({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 2) {
        //此判断为第六列
        return "addBorder";
      } else {
        return "textcenter";
      }
    },
    countDays(startYear,endYear,startMonth,endMonth){
      let daysnum=0;
      for(let year=startYear;year<=endYear;year++){
        let firstmonth=1;
        let lastmonth=12;
        if(year==startYear){
          firstmonth=startMonth
        }
        if(year==endYear){
          lastmonth=endMonth
        }
        for(let month=firstmonth;month<=lastmonth;month++){
          daysnum=daysnum+new Date(year, month, 0).getDate()
        }
      }
      return daysnum
    }
  },
};
</script>

<style lang='scss'>
.mileStoneRowStyle {
  border: 0px solid black;
  /* padding: 0px!important; */
  color: rgb(0, 0, 0, 0.8);
  text-align: center;
  padding: 0px !important;
  height: 40px;
  line-height: 40px;
}

.mileStoneHeaderRowStyle {
  border: 0px solid black;
  /* padding: 0px!important; */
  color: rgb(0, 0, 0, 0.8);
  text-align: center;
  font-weight: normal;
  padding: 0px !important;
  // border:2px solid red;
}

// #mileStoneCardTable{
//   // border:10px solid red;
//   ::v-deep *{
//     padding: 0!important;
//   }
// }

// .el-table--border .el-table__cell:first-child .cell {
//   padding-left: 0px !important;
//   padding-right: 0 !important;
// }

// .el-table--small .el-table__cell {
//   padding: 0 !important;
// }

// .el-table th.el-table__cell > .cell {
//   padding-left: 0px;
//   padding-right: 0px;
// }
</style>