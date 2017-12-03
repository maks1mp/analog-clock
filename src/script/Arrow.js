class Arrow {
    static get classList() {
        return {
            main: 'clock__arrow'
        }
    }

    constructor(type) {
        this.type = type;
    }

    get template() {
        const arrow = document.createElement('div');

        arrow.setAttribute('class', `${Arrow.classList.main} ${Arrow.classList.main}--${this.type}`);
        this.arrowHTML = arrow;

        return arrow;
    }

    move(time) {
        this.arrowHTML.style.transform = this.createTransformProp(time);
    }

    createTransformProp(degs) {
        return `translate(-50%, -50%) rotate(${degs}deg)`;
    }
}

export default Arrow;