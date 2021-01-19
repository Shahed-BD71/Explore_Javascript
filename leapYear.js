// to find out leap year or not
function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }
  console.log(leapYear(2020));
  console.log(leapYear(2000));
  console.log(leapYear(1700));
  console.log(leapYear(1600));
  console.log(leapYear(100));

 
  