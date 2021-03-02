window.addEventListener("load", mainFunction);

function clear () {

    var svg = document.getElementById("canvas");
    svg.innerHTML = "";

}

function randbetween(low, high) {
    return Math.floor(Math.random()*(high-low)+low);
}

function mainFunction () {

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

    let unvisited = vertices;
    let next = unvisited[0];

    for (let i = 0; i < N; i++) {
        closest = closestNode(next, unvisited);
        index = getIndex(closest, unvisited);
        new Edge(next, closest);
        next = closest;
        unvisited.splice(index, 1);
    }

}