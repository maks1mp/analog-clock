import './style/index.sass';
import Arrow from './script/Arrow.js';
import Clock from './script/Clock.js';

const clockArrowsTypes = ['hour', 'minute', 'second'],
    clockHTML = document.getElementById('clock'),
    clockArrows = clockArrowsTypes.map(arrowType => new Arrow(arrowType));

const clock = new Clock(clockHTML, clockArrows);

clock.init();

setInterval(clock.update.bind(clock), 1000)