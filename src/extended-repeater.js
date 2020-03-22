module.exports = function repeater(str, options) {
    let result = '';
    let separator;
    let additionSeparator;
    let repeatTimes;
    let additionRepeatTimes;

    if (typeof options['repeatTimes'] == 'number') {
        repeatTimes = options.repeatTimes;
    } else {
        repeatTimes = 1;
    }

    if (typeof options['additionRepeatTimes'] == 'number') {
        additionRepeatTimes = options.additionRepeatTimes;
    } else if ('addition' in options) {
        additionRepeatTimes = 1;
    } else {
        additionRepeatTimes = 0;
    }

    if (('separator' in options)) {
        separator = options.separator;
    } else {
        separator = '+';
    }
    
    if (('additionSeparator' in options)) {
        additionSeparator = options.additionSeparator;
    } else {
        additionSeparator = '+';
    }

    for (let i = 0; i < repeatTimes; i++) {
        result += str;
        for (let j = 0; j < additionRepeatTimes; j++) {
            result += options.addition;
            if (j < additionRepeatTimes - 1) {
                result += additionSeparator;
            }
        }
        if (i < repeatTimes - 1) {
            result += separator;
        }
    }
    return result;
};
  