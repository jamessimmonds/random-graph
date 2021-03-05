// window.addEventListener("load", test_edgeCompare);

function test_edgeCompare () {

    let v1 = new Vertex("v1", 50, 50);
    let v2 = new Vertex("v2", 100, 100);
    let v3 = new Vertex("v3", 150, 50);

    let e1 = new Edge(v1, v2);
    let e2 = new Edge(v2, v1);
    let e3 = new Edge(v1, v3);

    let a = [v1, v2];
    let b = [v1, v2];

    console.log(edgesAreEqual(e1, e2)); // True
    console.log(edgesAreEqual(e2, e2)); // True
    console.log(edgesAreEqual(e3, e2)); // False
    console.log(edgesAreEqual(e1, e3)); // False

}