# Unexpected Null Handling in JavaScript Function

This repository demonstrates a common JavaScript error involving unexpected behavior when null values are passed as arguments to a function.

The `foo` function in `bug.js` lacks proper null handling. When either `a` or `b` is null, the function silently returns without performing the intended operations. This can lead to subtle and hard-to-debug errors in the calling code.

The solution in `bugSolution.js` demonstrates how to handle null values gracefully by adding explicit checks and handling them appropriately.  The solution provides a better user experience by returning a more informative response or throwing an error for invalid input.