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

    // <!-- This is all going to get deleted later? -->

    let vertices = [];

    const MAX_X = 1000;
    const MAX_Y = 700;
    const N = 50;

    const MARGIN = 20;

    for (let i = 0; i < N; i++) {
        let x = randbetween(MARGIN,(MAX_X-MARGIN));
        let y = randbetween(MARGIN, MAX_Y-MARGIN);
        let name = "Node " + i;
        vertices.push(new Vertex(name, x, y));
    }

    // polyline(vertices, N);

    // <!-- Triangulation from this point onwards -->

    // let v1 = new Vertex("v1", 50, 50);
    // let v2 = new Vertex("v2", 100, 150);
    // let v3 = new Vertex("v3", 150, 100);

    // let v4 = new Vertex("v4", 125, 110);
    // let v5 = new Vertex("v5", 200, 250);

    // drawTriangle(v1, v2, v3);

    // console.log(withinCircumscribedCircle(v4, v1, v2, v3));
    // console.log(withinCircumscribedCircle(v5, v1, v2, v3));

    // naiveTriangulation(vertices);

    triangulation(vertices);

}