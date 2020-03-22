module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnCount = Math.pow(2, disksNumber) - 1;
    return {
        turns: turnCount,
        seconds: turnCount / (turnsSpeed / 3600),
    }
}