import {timeToDegrees} from './time';

export default class Clock {
    constructor(clockHTML, arrows) {
        this.clockHTML = clockHTML;
        this.clockArrows = arrows;
    }

    init() {
        this.clockArrows
            .forEach(arrow => this.clockHTML.appendChild(arrow.template))

        this.update();
    }

    
    update() {
        const date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            timeInDegrees = timeToDegrees(hours, minutes, seconds);

        Object.values(timeInDegrees)
            .forEach((time, index) => this.clockArrows[index].move(time));
    }
}