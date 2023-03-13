export const countDaysBetweenTwoDatestool=(beginDate,endDate)=>{
    let beginDateList=beginDate.split("/");
    let endDateList=endDate.split("/")
    let beginYear=parseInt(beginDateList[0])
    let endYear=parseInt(endDateList[0])
    let beginMonth=parseInt(beginDateList[1])
    let endMonth=parseInt(endDateList[1])
    let endDay=parseInt(endDateList[2])

    let days=0;

    for(let year=beginYear;year<=endYear;year++){
        let startmonth=1;
        let finalmonth=12;
        if(year==beginYear){
            startmonth=beginMonth
        }
        if(year==endYear){
            finalmonth=endMonth
        }
        for(let month=startmonth;month<finalmonth;month++){
            days=days+new Date(year, month, 0).getDate();
        }
    }
    days=days+endDay
    return days
}