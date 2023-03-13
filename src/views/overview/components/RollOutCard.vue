<template>
  <common-card title="Roll Out">
    <div style="">
      <el-table
        id="rollOutTable"
        :data="tableData"
        style="width: 100%; margin-top: -14px"
        max-height="180"
        :border="false"
        size="mini"
        :cell-class-name="addClass"
        :header-cell-class-name="addClass"
        header-align="center"
        header-row-class-name="header"
      >
        <el-table-column label="Project Name" width="110">
          <template slot-scope="scope">
            {{ scope.row.projectname }}
          </template>
        </el-table-column>
        <el-table-column prop="Category" label="Category" width="100">
        </el-table-column>
        <el-table-column prop="RollOutArea" label="Roll Out Area" width="110">
        </el-table-column>
        <el-table-column
          prop="StartDate"
          label="Start Date"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="ClosedDate"
          label="Closed Date"
          width="100"
        ></el-table-column>
        <el-table-column label="Status" width="100"
          ><template slot-scope="scope">
            <el-tag :type="setLableType(scope.row.Status)" size="medium">
              {{ scope.row.Status }}</el-tag
            >
          </template></el-table-column
        >
        <el-table-column label="Date" row-class-name="DateBar" width="380px">
          <template slot="header">
            <div>
              <span
                v-for="(month, index) in monthlist"
                :key="index"
                style="width: 40px; display: inline-block"
                >{{ month }}</span
              >
            </div>
          </template>
          <template slot-scope="scope">
            <div
              class="dateBar"
              :style="
                setMonthBarStyle(
                  5,
                  scope.row.StartDate,
                  scope.row.ClosedDate,
                  scope.row.Status,
                  40
                )
              "
            ></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </common-card>
</template>

<script>
import commonCard from "@/components/CommonCard";

export default {
  components: {
    commonCard,
  },
  data() {
    return {
      tableData: [
        {
          projectname: "PMIS",
          Category: "Site",
          RollOutArea: "WCD",
          StartDate: "2022/07/01",
          ClosedDate: "2022/12/01",
          Status: "Ongoing",
        },
        {
          projectname: "PMIS",
          Category: "Plant",
          RollOutArea: "F721",
          StartDate: "2022/07/01",
          ClosedDate: "2022/09/01",
          Status: "Not Start",
        },
        {
          projectname: "PMIS",
          Category: "Plant",
          RollOutArea: "F721",
          StartDate: "2022/09/15",
          ClosedDate: "2022/12/01",
          Status: "Not Start",
        },
      ],
      monthlist: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "De"],
    };
  },
  methods: {
    addClass({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 6) {
        //此判断为第六列
        return "addBorder";
      } else {
        return "textcenter";
      }
    },
    addHeaderClass({ row, rowIndex }) {
      if (rowIndex == 2) {
        return "addBorder";
      }
    },

    setLableType(Status) {
      let type = "";

      if (Status == "Ongoing") {
        type = "";
      } else if (Status == "Not Start") {
        type = "info";
      }
      return type;
    },

    spliteDate(DateStr) {
      var datelist = DateStr.split("/");
      var monthStr = datelist[1];
      if (monthStr.slice(0, 1) == "0") {
        monthStr = monthStr.slice(1, 2);
      }

      let monInt = parseInt(monthStr);
      // console.log("TTTT",typeof monInt,monInt)
      if (
        typeof monInt !== "number" ||
        monInt > 12 ||
        monInt < 1 ||
        isNaN(monInt)
      ) {
        console.log("月份转换错误");
        monInt = 0;
      }
      return monInt;
    },
    setMonthBarStyle(beginMonthInt, startMonth, endMonth, Status, monthlenth) {
      let startMonthInt = this.spliteDate(startMonth);
      let endMonthInt = this.spliteDate(endMonth);
      let marginleft = (startMonthInt - beginMonthInt) * monthlenth + "px";
      let width = (endMonthInt - startMonthInt + 1) * monthlenth + "px";

      let color = "grey";

      if (Status == "Ongoing") {
        color = "rgb(193,223,255)";
      } else if (Status == "Not Start") {
        color = "rgb(159,161,167)";
      }

      let style = {
        width,
        "margin-left": marginleft,
        background: color,
      };

      return style;
    },
  },
};
</script>

<style >
#rollOutTable .addBorder {
  border-left: 1px solid rgba(112, 104, 104, 0.2);
  width: 800px !important;
}

#rollOutTable .header {
  color: black;
}

#rollOutTable .textcenter {
  text-align: center;
}

/* .el-table  .el-table__body-wrapper {
    overflow-x: scroll !important;
  } */
</style>

<style scoped>
.dateBar {
  /* background: rgb(193, 224, 100); */
  height: 15px;
  border-radius: 3px;
}
</style>