<template>
  <common-card title="Budget">
    <div style="height: 100%">
      <el-table
        id="budget_table"
        :data="tableData"
        :border="false"
        max-height="180"
        size="small"
        :summary-method="getSummaries"
        show-summary
        cell-class-name="budgettable"
        style="width: 100%; margin-top: -14px;"
        header-row-class-name="budgetheader"
      >
        <el-table-column prop="Subjectid" label="Subject" width="100">
        </el-table-column>
        <el-table-column prop="Planned" label="Planned"> </el-table-column>
        <el-table-column prop="Spent" label="Spent"> </el-table-column>
        <el-table-column prop="Available" label="Available"> </el-table-column>
        <el-table-column prop="SpentRatio" label="Spent(Ratio)" width="100">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.SpentRatio"></el-progress>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </common-card>
</template>

<script>
import CommonCard from "@/components/CommonCard";

export default {
  components: {
    CommonCard,
  },
  data() {
    return {
      tableData: [
        {
          Subjectid: "ManPower",
          Planned: 1000500,
          Spent: 300350,
          Available: 700150,
          SpentRatio: 30,
        },
        {
          Subjectid: "Facility",
          Planned: 22001,
          Spent: 2204,
          Available: 19797,
          SpentRatio: 10,
        },
        // {
        //   Subjectid:'ManPower',
        //   Planned:1000500 ,
        //   Spent:300350 ,
        //   Available:700150 ,
        //   SpentRatio:30
        // },
        // {
        //   Subjectid:'Facility',
        //   Planned:22001 ,
        //   Spent:2204 ,
        //   Available:19797 ,
        //   SpentRatio:10
        // }
        // {
        //   Subjectid:,
        //   Planned:,
        //   Spent:,
        //   Available:,
        //   SpentRatio:,
        // }
        // {
        //   id: "12987124",
        //   name: "王小虎",
        //   amount1: "324",
        //   amount2: "1.9",
        //   amount3: 9,
        // },
        // {
        //   id: "12987125",
        //   name: "王小虎",
        //   amount1: "621",
        //   amount2: "2.2",
        //   amount3: 17,
        // },
        // {
        //   id: "12987126",
        //   name: "王小虎",
        //   amount1: "539",
        //   amount2: "4.1",
        //   amount3: 15,
        // },
      ],
    };
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " ";
          if(index==4){
            sums[index] +="%"
          }
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    },
  },
};
</script>
  
<style >
thead,
tr,
td,
th {
  height: 20px;
}
table {
  width: 30px;
}

#budget_table .el-progress__text{
  font-size:12px!important;
}

#buget_table td{
  color: black !important;
}

.budgettable{
  color: black ;
}

.budgetheader{
  color: black;
}
</style>