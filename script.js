// n: an integer, the number of developers
// m: an integer, the number of sweets
// s: an integer, the chair number to begin passing out sweets from

// Kindly refer to index.html file for full question
// warnTheDeveoper = warnTheDeveloper;

function warnTheDeveoper(n, m, s) {
    const a = (((m + n) % n) + (s % n) - 1) % n
    return a == 0 ? n : ((a+n) % n)
}