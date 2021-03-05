function supertriangle() {
    let v1 = new Vertex("v1", 500, 990);
    let v2 = new Vertex("v2", 10, 10);
    let v3 = new Vertex("v3", 990, 10);
    return new Triangle(v1, v2, v3);
}

function drawRect(x1, y1, x2, y2) {

    var svg = document.getElementById("canvas");
    let recangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    recangle.setAttribute("x", x1);
    recangle.setAttribute("y", y1);
    recangle.setAttribute("width", (x2-x1));
    recangle.setAttribute("height", (y2-y1));
    recangle.setAttribute("fill", "transparent");
    recangle.setAttribute("stroke", "red");
    recangle.setAttribute("stroke-width", 5);
    svg.appendChild(recangle);

}

// Automatically draw a super triangle around points
function autoSuperTriangle(vertices) {

    let infinity = 9999999;

    let min_x = infinity;
    let min_y = infinity;
    let max_x = 0;
    let max_y = 0;

    for (let i = 0; i < vertices.length; i++) {

        let v = vertices[i];

        if (v.x < min_x) {
            min_x = v.x;
        }
        
        if (v.x > max_x) {
            max_x = v.x;
        }
        
        if (v.y < min_y) {
            min_y = v.y;
        }
        
        if (v.y > max_y) {
            max_y = v.y;
        }
    }

    let v1_x = ((max_x-min_x)/2)+min_x;
    let v1_y = (max_y-min_y)*2+max_y;
    let v2_x = min_x-((max_x-min_x)*2);
    let v2_y = min_y;
    let v3_x = max_x+((max_x-min_x)*2);
    let v3_y = min_y; 

    let v1 = new Vertex("v1", v1_x, v1_y);
    let v2 = new Vertex("v2", v2_x, v2_y);
    let v3 = new Vertex("v3", v3_x, v3_y);

    let superTri = new Triangle(v1, v2, v3);

    return superTri;

    // drawRect(min_x, min_y, max_x, max_y);
}