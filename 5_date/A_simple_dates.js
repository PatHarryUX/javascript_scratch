function dayOfWeek() {
  var date = new Date();
  var day = date.getDay();
  switch(day){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return '?';
  }
}

function month() {
  var date = new Date();
  var month = date.getMonth()

  switch(month) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
    default:
      return '?';
  }
}

function date() {
  var date = new Date();
  var num = date.getDate();
  switch(num) {
    case 1 || 21 || 31:
      return num + 'st';
    case 2 || 22:
      return num + 'nd';
    case 3 || 23:
      return num + 'rd';
    default:
      return num + 'th';
  }
}

function year() {
    var date = new Date();
    return date.getFullYear();
}

console.log("Today is " + dayOfWeek() + ", " + month() + " " + date() + ", " + year() + ".");
