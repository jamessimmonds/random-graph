class Edge {

    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
        this.draw();
    }

    draw() {

        const moveto = "M " + this.v1.x + "," + this.v1.y + " "
        const lineto = "L " + this.v2.x + "," + this.v2.y

        const definition = moveto + lineto;

        // console.log(definition);

        var svg = document.getElementById("canvas");
        this.drawing = document.createElementNS("http://www.w3.org/2000/svg", "path")
        this.drawing.setAttribute("d", definition);
        svg.appendChild(this.drawing);

    }

    undraw() {
        var svg = document.getElementById("canvas");
        svg.removeChild(this.drawing);
    }

}