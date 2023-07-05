export default class TimeUtils{

    static incrementDate(date){
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();

        day++;

        if(day > 28 && month === 1){
            day = 1;
            month++;
        }

        if(day > 30 && (month === 3 || month === 5 || month === 8 || month === 10)){
            day = 1;
            month++;
        }

        if(day > 31 && month === 11){
            day = 1;
            month = 1;
            year++;
        }

        return new Date(year, month, day);
    }

    static equalsDate(date1, date2){
        let day1 = date1.getDate();
        let month1 = date1.getMonth();
        let year1 = date1.getFullYear();

        let day2 = date2.getDate();
        let month2 = date2.getMonth();
        let year2 = date2.getFullYear();

        return day1 === day2 && month1 === month2 && year1 === year2;
    }

}