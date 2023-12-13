function getRandomStrings(inputStrings) {
    var shuffledStrings = inputStrings.sort(function () { return Math.random() - 0.5; });
    return shuffledStrings.slice(0, 3);
}

/*with this function you can input 5-6-7 strings and the function returns 3 strings randomly.*/

// Example for usuage
/*Please write this into your web browser developer tools to use the function
getRandomStrings(inputStrings = ["Janka", "Zorka", "Abigel", "Luca", "Soma", "Kolos", "Benedek"])*/