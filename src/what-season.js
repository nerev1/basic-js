const WINTER = [11, 0, 1];
const SPRING = [2, 3, 4];
const SUMMER = [5, 6, 7];
const FALL = [8, 9, 10];

module.exports = function getSeason(date) {

  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (!(Object.prototype.toString.call(date) === '[object Date]')) throw new Error;
  if (!(date instanceof Date)) throw new Error;


  let month = date.getMonth();
 
  if (WINTER.includes(month)) return 'winter';
  if (SPRING.includes(month)) return 'spring';
  if (SUMMER.includes(month)) return 'summer';
  if (FALL.includes(month)) return 'fall';
};
