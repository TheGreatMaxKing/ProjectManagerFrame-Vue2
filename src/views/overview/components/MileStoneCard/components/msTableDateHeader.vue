<template>
  <div style="margin-left:-10px;margin-right:-10px">
    <div
      v-for="(yearvalue, yearindex) of yearlist"
      :key="'mstHY' + yearindex"
      style="display: inline-block;"
    >
      <div style="border: 1px solid rgb(63,63,63,0.2);text-align:center;">{{ yearvalue }}</div>
      <div
        v-for="(monthvalue, monthindex) of initmonthlist(yearvalue)"
        :key="'mstHM' + yearvalue + monthindex"
        style="display: inline-block;"
      >
        <div style="border: 1px solid rgb(63,63,63,0.2);text-align:center;">
          {{ monthvalue }}
        </div>
        <div
          v-for="day of initdaylist(yearvalue, monthvalue)"
          :key="'mstHM' + yearvalue + monthvalue + day"
          style="display: inline-block; border: 1px solid rgb(63,63,63,0.2);width:20px;text-align:center;font-size:12px;"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearlist: [],
    };
  },
  props: ["startYear", "endYear", "startMonth", "endMonth"],
  methods: {
    inityearlist() {
      for (let i = this.startYear; i <= this.endYear; i++) {
        this.yearlist.push(i);
      }
    },
    initmonthlist(Year) {
      let monthlist = [];
      let startmonth = 1;
      let endmonth = 12;

      if (Year == this.startYear) {
        startmonth = this.startMonth;
      }
      if (Year == this.endYear) {
        endmonth = this.endMonth;
      }
      for (let i = startmonth; i <= endmonth; i++) {
        monthlist.push(i);
      }
      return monthlist;
    },
    initdaylist(Year, Month) {
      const currentMonthDays = new Date(Year, Month, 0).getDate();
      let monthDayList = [];
      for (let i = 1; i <= currentMonthDays; i++) {
        monthDayList.push(i);
      }
      return monthDayList;
    },
  },
  mounted() {
    this.inityearlist();
  },
};
</script>

<style scoped>
  div{
    box-sizing: border-box;
    font-weight: normal;
    font-size: 10px;
  }
</style>