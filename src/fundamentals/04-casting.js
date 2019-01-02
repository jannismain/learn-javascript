// What is the result of the following expressions:

[
    "" + 1 + 0, // "10"
    "" - 1 + 0, // -1
    true + false, // 1 ??
    6 / "3", // 2
    "2" * "3", // 6
    4 + 5 + "px", // "9px"
    "$" + 4 + 5, // "$45"
    "4" - 2, // 2
    "4px" - 2, // NaN
    7 / 0, // Infinity
    "  -9\n" + 5, // "  -9\n5" --> string concatenation, due to "+"
    "  -9\n" - 5, // -14 --> implicit number conversion, due to "-"
    null + 1, // 1
    undefined + 1, // NaN
].forEach(alert)
