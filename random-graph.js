window.addEventListener("load", mainFunction);

function clear () {

    var svg = document.getElementById("canvas");
    svg.innerHTML = "";

}

function drawAll(elems) {

    for(let i = 0; i < elems.length; i++) {
        elems[i].draw();
    }

}

function mainFunction () {

    var v1 = new Vertex(100, 100);
    var v2 = new Vertex(200, 200);
    var e1 = new Edge(v1, v2);

    var v3 = new Vertex(300, 150);
    var e2 = new Edge(v2, v3);

    let elems = [e1, v1, v2, v3, e2];
    drawAll(elems);

    clear();

    var v4 = new Vertex(350, 350);
    drawAll([v4]);

}