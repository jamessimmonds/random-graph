function drawBadTriangles(badTriangles) {

    for (let i = 0; i < badTriangles.length; i++) {
        let badTriangle = badTriangles[i];

        let edges = [[badTriangle.v1, badTriangle.v2], [badTriangle.v2, badTriangle.v3], [badTriangle.v3, badTriangle.v1]];

        for (let j = 0; j < edges.length; j++) {
            let v1 = edges[j][0];
            let v2 = edges[j][1];

            const moveto = "M " + v1.x + "," + v1.y + " ";
            const lineto = "L " + v2.x + "," + v2.y;

            const definition = moveto + lineto;

            console.log(definition);

            var svg = document.getElementById("canvas");
            p = document.createElementNS("http://www.w3.org/2000/svg", "path");
            p.setAttribute("d", definition);
            p.setAttribute("stroke", "red");
            p.setAttribute("stroke-width", 5);
            svg.appendChild(p);

        }

    }
}

function drawPolygon(polygon) {

    for (let j = 0; j < polygon.length; j++) {
        let v1 = polygon[j].v1;
        let v2 = polygon[j].v2;

        const moveto = "M " + v1.x + "," + v1.y + " ";
        const lineto = "L " + v2.x + "," + v2.y;

        const definition = moveto + lineto;

        console.log(definition);

        var svg = document.getElementById("canvas");
        p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", definition);
        p.setAttribute("stroke", "red");
        p.setAttribute("stroke-width", 10);
        svg.appendChild(p);

    }

}