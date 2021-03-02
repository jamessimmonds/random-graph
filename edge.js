class Edge {

    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
    }

    draw() {

        const moveto = "M " + this.v1.x + "," + this.v1.y + " "
        const lineto = "L " + this.v2.x + "," + this.v2.y

        const definition = moveto + lineto;

        console.log(definition);

        var svg = document.getElementById("canvas");
        var path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", definition);
        svg.appendChild(path);
    }

}