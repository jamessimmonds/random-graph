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

function triangulation(vertices) {
    unvisited = vertices.slice();
}