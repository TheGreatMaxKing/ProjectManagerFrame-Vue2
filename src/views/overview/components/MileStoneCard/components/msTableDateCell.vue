<template>
  <div class="dateCell">
    <div class="dateLine" v-for="(value, index) of dates"
      :key="'MSBar'+'rowIndex'+ index" :style="{left:`${(countDaysBetweenTwoDates(beginDate,value.startDate)-1)*20}px`}">
      <div class="dateBar" v-if="value.rowindex>=rowIndex"></div>
      <div class="dateSquare" v-if="value.startDate===rowDate"></div>
    </div>
  </div>
</template>

<script>
import {countDaysBetweenTwoDatestool} from '@/utils/Date'
export default {
    data(){
        return{}
    },
    props:['dates','rowDate','rowIndex','beginDate',"startYear", "endYear", "startMonth", "endMonth"],
    methods:{
        // countDaysBetweenTwoDates(beginDate,endDate){
        //     let beginDateList=beginDate.split("/");
        //     let endDateList=endDate.split("/")
        //     let beginYear=parseInt(beginDateList[0])
        //     let endYear=parseInt(endDateList[0])
        //     let beginMonth=parseInt(beginDateList[1])
        //     let endMonth=parseInt(endDateList[1])
        //     let endDay=parseInt(endDateList[2])

        //     let days=0;

        //     for(let year=beginYear;year<=endYear;year++){
        //         let startmonth=1;
        //         let finalmonth=12;
        //         if(year==beginYear){
        //             startmonth=beginMonth
        //         }
        //         if(year==endYear){
        //             finalmonth=endMonth
        //         }
        //         for(let month=startmonth;month<finalmonth;month++){
        //             days=days+new Date(year, month, 0).getDate();
        //         }
        //     }
        //     days=days+endDay
        //     return days
        // },
        
        countDaysBetweenTwoDates(beginDate,endDate){
          return countDaysBetweenTwoDatestool(beginDate,endDate);
        },
        
        setMonthBarList(beginDate,endDate){
            let beginDateList=beginDate.split("/");
            let endDateList=endDate.split("/")
            let beginYear=parseInt(beginDateList[0])
            let endYear=parseInt(endDateList[0])
            let beginMonth=parseInt(beginDateList[1])
            let endMonth=parseInt(endDateList[1])
        }
    }
};
</script>

<style scoped>
.dateCell {
  position: relative;
  /* top:0;
    left: 0; */
  width: 100%;
  height: 40px;
  /* border: 2px solid red; */
}

.dateLine {
  position: absolute;
  top: 0;
  /* left: 20px; */
}

.dateBar {
  width: 1px;
  height: 40px;
  border: 1px dashed rgb(0, 0, 0, 0.3);
  /* margin-left: 20px; */

  position: absolute;
  top: 0;
  left: 0;
}

.dateSquare {
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: darkgreen;
  position: absolute;
  top: 14px;
  left: -4.5px;
}
</style>