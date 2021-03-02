class Vertex {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.draw();
    }

    draw() {
        var svg = document.getElementById("canvas");
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        this.circle.setAttribute("cx", this.x);
        this.circle.setAttribute("cy", this.y);
        this.circle.setAttribute("r", 15);
        svg.appendChild(this.circle);
    }

}