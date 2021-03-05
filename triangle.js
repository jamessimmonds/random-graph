class Triangle {
    constructor(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;

        this.e1 = new Edge(this.v1, this.v2);
        this.e2 = new Edge(this.v2, this.v3);
        this.e3 = new Edge(this.v3, this.v1);
    }

    draw () {
        this.e1 = new Edge(this.v1, this.v2);
        this.e2 = new Edge(this.v2, this.v3);
        this.e3 = new Edge(this.v3, this.v1);
    }

    undraw() {
        this.e1.undraw();
        this.e2.undraw();
        this.e3.undraw();
    }
}