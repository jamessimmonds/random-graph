function triangleMidpoint(v1, v2, v3) {
    const grad_1 = (v2.y-v1.y)/(v2.x-v1.x);
    const x_1 = v1.x + (v2.x-v1.x)/2;
    const y_1 = v1.y + (v2.y-v1.y)/2;

    const grad_2 = (v3.y-v1.y)/(v3.x-v1.x);
    const x_2 = v1.x + (v3.x-v1.x)/2;
    const y_2 = v1.y + (v3.y-v1.y)/2;

    // Calculate equations of perpendicular bisectors:
    const perp1 = (1/grad_1)*-1;
    const perp2 = (1/grad_2)*-1

    const c1 = y_1 - (perp1*x_1);
    const c2 = y_2 - (perp2*x_2);

    // Solve equations
    const multiplier = perp2/perp1;
    const y_coef = ((c1*multiplier)-c2)/(multiplier-1);
    const x_coef = (y_coef-c2)/perp2;

    return [x_coef, y_coef];

}

function distanceByCoordinates(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(Math.abs(x1-x2),2)+Math.pow(Math.abs(y1-y2),2));
}

function withinCircumscribedCircle(v, v1, v2, v3) {
    const midpoint = triangleMidpoint(v1, v2, v3);
    const distanceFromMidpoint = distanceByCoordinates(midpoint[0], midpoint[1], v.x, v.y);
    const radius = distanceByCoordinates(midpoint[0], midpoint[1], v1.x, v1.y);

    if (distanceFromMidpoint < radius) {
        return true;
    } else {
        return false;
    }
}

function drawTriangle(v1, v2, v3) {
    new Edge(v1, v2);
    new Edge(v1, v3);
    new Edge(v2, v3);
}

function triangulation(vertices) {
    unvisited = vertices.slice();
}