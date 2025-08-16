class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        stroke(0);
        circle(this.x, this.y, 1);
    }

    step() {
        const xStep = random(-1, 1);
        const yStep = random(-1, 1);

        this.x += xStep;
        this.y += yStep;
    }
}