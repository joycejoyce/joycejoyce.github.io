function TimeFormatter(date) {
    this.year = getYear();
    this.month = getMonth();
    this.day = getDay();
    
    function getYear() {
        return date.substr(0, 4);
    }
    
    function getMonth() {
        return date.substr(4, 2);
    }
    
    function getDay() {
        return date.substr(6, 2);
    }
}
TimeFormatter.prototype = {
    constructor: TimeFormatter,
    getDateOfDailyLINE: function() {
        return TimeFormatter.getShortMonthName(this.month) + " " + this.day + ", " + this.year;
    },
    getDateOfAllNumber: function() {
        return this.year + this.month + this.day;
    }
};
TimeFormatter.getMonthName = function(month) {
    const MONTH_NAME = 
          ["January", "February", "March",
           "April", "May", "June",
           "July", "August", "September",
           "October", "November", "December"
          ];
    let index = parseInt(month, 10) - 1;
    return MONTH_NAME[index];
};
TimeFormatter.getShortMonthName = function(month) {
    return this.getMonthName(month).substr(0, 3);
};

export {
    TimeFormatter
};