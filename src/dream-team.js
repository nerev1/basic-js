module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let result = [];
  for (let member of members) {
    if (!(typeof member == 'string')) continue;
    
    member = member.replace(/^[ ]+/, '');
    if (/^[a-z]/i.test(member)) result.push(member[0].toUpperCase());
  }
  return result.sort().join('');
};