const timeConstants = {
    oneHourInDegrees: 30,
    oneSecondInDegrees: 6,
    oneMinuteInDegrees: 6
};

export function timeToDegrees(hours = 0, minutes = 0, seconds = 0) {
    const {oneHourInDegrees, oneSecondInDegrees, oneMinuteInDegrees} = timeConstants,
        hoursDegrees = (hours % 12 || 12) * oneHourInDegrees,
        minutesDegrees = minutes * oneMinuteInDegrees,
        secondsDegrees = seconds * oneSecondInDegrees;

    return {
        hoursDegrees: hoursDegrees + (minutes / 2),
        minutesDegrees: Math.floor(minutesDegrees + (secondsDegrees / (60 * 100))),
        secondsDegrees
    }
}
