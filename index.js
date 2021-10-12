// Your code here
function createEmployeeRecord(array) {
    let employee = {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
    return employee
}

function createEmployeeRecords(array) {
    let map = array.map(x => createEmployeeRecord(x))
    map.length
    return map
}
// First split the date string into 2 parts
// "2014-02-28 1400" 
// Once splitted take time(change time into integer from a string) and date
function createTimeInEvent(obj, date) {
    let timeIn = date
    let splitDate = timeIn.indexOf(' ')
    let time = parseInt(timeIn.substr(splitDate + 1))
    let day = timeIn.substr(0, splitDate)
    parseInt(day, 10)
    obj.timeInEvents.push({
        'type': "TimeIn",
        'hour': time,
        'date': day
    })
    return obj
}

function createTimeOutEvent(obj, date) {
    let timeOut = date
    let splitDate = timeOut.indexOf(' ')
    let time = parseInt(timeOut.substr(splitDate + 1))
    let day = timeOut.substr(0, splitDate)
    parseInt(day, 10)
    obj.timeOutEvents.push({
        'type': "TimeOut",
        'hour': time,
        'date': day
    })
    return obj
}

function hoursWorkedOnDate(obj, date) {
    let timeIn = obj.timeInEvents
    let inDate = timeIn.find(element => element.date === date)
    let timeOut = obj.timeOutEvents
    let outDate = timeOut.find(element => element.date === date)
    return (outDate.hour - inDate.hour)/ 100
}

function wagesEarnedOnDate(obj, date) {
    return (hoursWorkedOnDate(obj, date) * obj.payPerHour)
}

function allWagesFor(obj) {
    console.log(Object.values(obj.timeInEvents))
    return wagesEarnedOnDate(obj) * obj.timeInEvents[0].date
}