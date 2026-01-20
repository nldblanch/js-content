const getSleepHours = day => {
    switch (day) {
        case 'monday': return 8;
        case 'tuesday': return 7;
        case 'wednesday': return 6;
        case 'thursday': return 7;
        case 'friday': return 5;
        case 'saturday': return 9;
        case 'sunday': return 8;
        default: return new Error('Invalid day');
    }
};

const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('Sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = (idealHours = 8) => {
    const actual = getActualSleepHours();
    const ideal = getIdealSleepHours(idealHours);

    if (actual === ideal) {
        return 'Perfect amount of sleep.';
    } else if (actual > ideal) {
        return `You got ${actual - ideal} hour(s) more sleep than needed.`;
    } else {
        return `You got ${ideal - actual} hour(s) less sleep than needed. Get some rest.`;
    }
};

module.exports = {
    getSleepHours,
    getActualSleepHours,
    getIdealSleepHours,
    calculateSleepDebt
};
