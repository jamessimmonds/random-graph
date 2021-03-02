window.addEventListener("load", mainFunction);

function clear () {

    var svg = document.getElementById("canvas");
    svg.innerHTML = "";

}

function randbetween(low, high) {
    return Math.floor(Math.random()*(high-low)+low);
}

function mainFunction() {

    // API:
    // var v1 = new Vertex(100, 100);
    // var v2 = new Vertex(200, 200);
    // var e1 = new Edge(v1, v2);
    // clear();

    let vertices = [];

    const MAX_X = 1000;
    const MAX_Y = 700;
    const N = 15;

    for (let i = 0; i < N; i++) {
        let x = randbetween(15,(MAX_X-15));
        let y = randbetween(15, MAX_Y-15);
        let name = "Node " + i;
        vertices.push(new Vertex(name, x, y));
    }

    polyline(vertices, N);

    let v1 = new Vertex("v1", 50, 50);
    let v2 = new Vertex("v2", 100, 150);
    let v3 = new Vertex("v3", 150, 100);

    triangleMidpoint(v1, v2, v3);
}