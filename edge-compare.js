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

