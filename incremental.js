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

function addNewPoint(vertex, triangles) {
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

        let tri = badTriangles[i];

        // Only add an edge to the polygon if not shared with other bad triangles
        if (edgeNotShared(tri.e1, tri, badTriangles)) {
            polygon.push(badTriangles[i].e1);
        }

        if (edgeNotShared(tri.e2, tri, badTriangles)) {
            polygon.push(badTriangles[i].e2);
        }

        if (edgeNotShared(tri.e3, tri, badTriangles)) {
            polygon.push(badTriangles[i].e3);
        }

        badTriangles[i].undraw();
        remove(triangles, badTriangles[i]);
    }

    // For each of the edges in the polygon, make triangles
    for (let i = 0; i < polygon.length; i++) {
        triangles.push(new Triangle(vertex, polygon[i].v1, polygon[i].v2));
    }

    return triangles.slice();

}

function vertexEquals(v1, v2) {
    if (v1.x == v2.x && v1.y == v2.y) {
        return true;
    } else {
        return false;
    }
}

function cleanUp(triangles, supertri) {
    let sv1 = supertri.v1;
    let sv2 = supertri.v2;
    let sv3 = supertri.v3;

    for (let i = 0; i < triangles.length; i++) {
        let containsVertexFromSuper = false;
        let triangle = triangles[i];

        let tv1 = triangle.v1;
        let tv2 = triangle.v2;
        let tv3 = triangle.v3;

        if (vertexEquals(sv1, tv1) || vertexEquals(sv1, tv2) || vertexEquals(sv1, tv3)) {
            console.log("Contains V1");
            containsVertexFromSuper = true;
        } else if (vertexEquals(sv2, tv1) || vertexEquals(sv2, tv2) || vertexEquals(sv2, tv3)) {
            console.log("Contains V2");
            containsVertexFromSuper = true;
        } else if (vertexEquals(sv3, tv1) || vertexEquals(sv3, tv2) || vertexEquals(sv3, tv3)) {
            console.log("Contains V3");
            containsVertexFromSuper = true;
        }

        if (containsVertexFromSuper) {
            triangle.undraw();
            remove(triangles, triangle);
        }
    }

    console.log(triangles);
}

// My code above isn't working! Desperate attempt to get rid
// of triangles with vertices of the supertriangle
function filterTriangles(triangles) {
    for (let i = 0; i < triangles.length; i++) {
        let triangle = triangles[i];

        let sharesVertexWithSuper = false;

        if (triangle.v1.name == "v1" || triangle.v2.name == "v1" || triangle.v3.name == "v1" ) {
            triangle.undraw()
        } else if (triangle.v1.name == "v2" || triangle.v2.name == "v2" || triangle.v3.name == "v2" ) {
            triangle.undraw()
        } else if (triangle.v1.name == "v3" || triangle.v2.name == "v3" || triangle.v3.name == "v3" ) {
            triangle.undraw()
        }
    }
}

function drawState(state) {
    for (let i = 0; i < state.length; i++) {
        let triangle = state[i];
        triangle.draw();
    }
}

function drawVertices(vertices) {
    for (let i = 0; i < vertices.length; i++) {
        let vertex = vertices[i];
        vertex.draw();
    }
}

function triangulation(vertices) {

    let supertri = autoSuperTriangle(vertices);
    let triangles = [supertri];

    let states = [];

    for (let i = 0; i < vertices.length; i++) {
        states.push(addNewPoint(vertices[i], triangles));
    }

    console.log(states);

    filterTriangles(triangles);
    clear();

    var counter = 0;
    var i = setInterval(function () {
        clear();
        drawVertices(vertices);
        drawState(states[counter]);
        counter = counter + 1;
        if (counter >= vertices.length) {
            filterTriangles(triangles);
            clearInterval(i);
        }
    }, 150);

}