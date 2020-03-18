const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string') return false;

  if (/\./.test(sampleActivity)) {
    sampleActivity = sampleActivity.match(/[0-9]+\.[0-9]+/).join('');
  }

  sampleActivity = +sampleActivity;
  
  if (isNaN(sampleActivity) || 
  sampleActivity <= 0 || 
  sampleActivity > MODERN_ACTIVITY) return false;


  let activitiesRatio = MODERN_ACTIVITY / sampleActivity;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(activitiesRatio) / k);
  return result;
};
