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

function createTimeInEvent(obj, date) {
    let timeIn = date
    obj.timeInEvents = {
        'type': timeIn,
        'hour': timeIn.getHour(),
        'date': timeIn.getDate()
    }
}