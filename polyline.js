function polyline(vertices, N) {
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