function supertriangle() {
    let v1 = new Vertex("v1", 500, 990);
    let v2 = new Vertex("v2", 10, 10);
    let v3 = new Vertex("v3", 990, 10);
    return new Triangle(v1, v2, v3);
}

function isBadTriangle(vertex, triangle) {
    let v1 = triangle.v1;
    let v2 = triangle.v2;
    let v3 = triangle.v3;

    if (withinCircumscribedCircle(vertex, v1, v2, v3)) {
        return true;
    } else {
        return false;
    }
}

function addNewPoint(vertex, vertices, triangles) {
    let badTriangles = [];

    for (let i = 0; i < triangles.length; i++) {
        let triangle = triangles[i];
        if (isBadTriangle(vertex, triangle)) {
            badTriangles.push(triangle);
        }
    }

    console.log(badTriangles);

}

function triangulation(vertices) {

    let supertri = supertriangle();
    let triangles = [supertri];

    addNewPoint(vertices[0], vertices, triangles);

    supertri.undraw();

}