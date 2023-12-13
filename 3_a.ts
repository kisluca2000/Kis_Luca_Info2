function calculateAreaWithHeightAndSide(height, side) {
    return height * side;
}

function calculateAreaWithAngleAndSides(angle, side1, side2) {
    const radians = (angle * Math.PI) / 180; // Convert angle to radians
    return side1 * side2 * Math.sin(radians);
}


