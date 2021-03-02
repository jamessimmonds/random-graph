function distance (v1, v2) {
    return Math.sqrt(Math.pow(Math.abs(v1.x-v2.x),2)+Math.pow(Math.abs(v1.y-v2.y),2));
}

function closestNode (v1, vertices) {

    let closest = null;

    for (let i = 0; i < vertices.length; i++) {
        node = vertices[i];

        // console.log("Comparing " + v1.name + " to ", node.name);

        if (closest) {
            let distance_to_node = distance(v1, node);
            let distance_to_closest = distance(v1, closest);

            // console.log("The distance to this node is " + distance_to_node);
            // console.log("The distance to the closest is " + distance_to_closest);

            if (distance_to_node < distance_to_closest) {
                // console.log("This is closer");
                closest = node;
            } else {
                // console.log("This is not closer");
            }
        } else {
            // console.log("Setting as the first attempt");
            closest = node;
            // let distance_to_node = distance(v1, node);
            // console.log("The distance to this node is " + distance_to_node);
        }
    }

    return closest;

}

function getIndex(elem, vertices) {
    let index = null;

    for (let i = 0; i < vertices.length; i++) {
        if (vertices[i] == elem) {
            index = i;
        }
    }

    return index;
}