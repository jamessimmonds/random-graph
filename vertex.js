class Vertex {

    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.draw();
    }

    draw() {
        var svg = document.getElementById("canvas");
        
        this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttribute("cx", this.x);
        this.circle.setAttribute("cy", this.y);
        this.circle.setAttribute("r", 5);
        svg.appendChild(this.circle);

        this.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        this.text.setAttribute("x", this.x+15);
        this.text.setAttribute("y", this.y+15);
        this.text.innerHTML = this.name;
        svg.appendChild(this.text);
    }

}