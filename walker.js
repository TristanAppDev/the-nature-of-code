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
        const choice = floor(random(4));

        switch (choice) {
            case 0:
                this.x++;
                break;
            case 1:
                this.x--;
                break;
            case 2:
                this.y++;
                break;        
            default:
                this.y--;
                break;
        }
    }
}