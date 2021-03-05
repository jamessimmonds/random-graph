function edgesAreEqual(edge1, edge2) {
    let v1 = edge1.v1;
    let v2 = edge1.v2;
    let v3 = edge2.v1;
    let v4 = edge2.v2;

    if ((v1 == v3 && v2 == v4) || (v1 == v4 && v2 == v3)) {
        return true;
    } else {
        return false;
    }
}

// We only want to add edges that aren't shared by other triangles in the set
function edgeNotShared(edge, thisTriangle, triangles) {
    let result = true;

    for (let i = 0; i < triangles.length; i++) {
        let triangle = triangles[i];

        if (triangle != thisTriangle) {

            let triEdge1 = triangle.e1;
            let triEdge2 = triangle.e2;
            let triEdge3 = triangle.e3;

            let sharedWithE1 = edgesAreEqual(edge, triEdge1);
            let sharedWithE2 = edgesAreEqual(edge, triEdge2);
            let sharedWithE3 = edgesAreEqual(edge, triEdge3);

            if (sharedWithE1 || sharedWithE2 || sharedWithE3) {
                result = false;
            }
        }
    }

    return result;
}