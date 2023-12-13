function calculateAreaWithHeightAndSide(height, side) {
    var result;
    result = height * side;
    return result;
}

function calculateAreaWithAngleAndSides(angle, side1, side2) {
    var radians = (angle * Math.PI) / 180; // Convert angle to radians
    var result2;
    result2 = side1 * side2 * Math.sin(radians);
    return result2;
}

/* These two functions calculate the area of a parallelogram in two ways: 
   with height and side, and angle and two sides. */

/* Example usage:
   Use the following commands in your web browser developer tools to call the function:
   For height and side: calculateAreaWithHeightAndSide(10, 30)
   For angle and sides: calculateAreaWithAngleAndSides(10, 30, 30) */
