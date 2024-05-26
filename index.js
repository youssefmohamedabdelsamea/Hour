let Day = document.querySelector("#Day")
let DayNumber = document.querySelector("#DayNumber")
let MonthYear = document.querySelector("#MonthYear")
let date = new Date();

function Make_Year_Month() {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month > 13 ? month = 12 : month
    MonthYear.innerHTML = `${month}&nbsp/&nbsp;${year}`
}

function Make_Day_Number() {
    let dayNumber = date.getDate()
    DayNumber.innerHTML = dayNumber
}

function Make_Day() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayInLetter = {
        "0": days[0],
        "1": days[1],
        "2": days[2],
        "3": days[3],
        "4": days[4],
        "5": days[5],
        "6": days[6]
    }
    let day = date.getDay()
    Day.innerHTML = dayInLetter[day]
}

setInterval(Make_Day_Number,1000)
setInterval(Make_Day,1000)
setInterval(Make_Year_Month,1000)