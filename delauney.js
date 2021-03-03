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

function remove(list, item) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
            list.splice(i, 1);
        }
    }
}

function addNewPoint(vertex, vertices, triangles) {
    let badTriangles = [];

    // For each triangle, designate as a "bad" triangle is point within circumscribed circle
    for (let i = 0; i < triangles.length; i++) {
        let triangle = triangles[i];
        if (isBadTriangle(vertex, triangle)) {
            badTriangles.push(triangle);
        }
    }

    // Add each edge of the bad triangles to the polygon
    let polygon = [];
    for (let i = 0; i < badTriangles.length; i++) {
        polygon.push(badTriangles[i].e1);
        polygon.push(badTriangles[i].e2);
        polygon.push(badTriangles[i].e3);
        badTriangles[i].undraw();
        remove(triangles, badTriangles[i]);
    }

    // For each of the edges in the polygon, make triangles
    for (let i = 0; i < polygon.length; i++) {
        triangles.push(new Triangle(vertex, polygon[i].v1, polygon[i].v2));
    }

    console.log(polygon);

}

function triangulation(vertices) {

    let supertri = supertriangle();
    let triangles = [supertri];

    addNewPoint(vertices[0], vertices, triangles);
    addNewPoint(vertices[1], vertices, triangles);

}