function foo(a, b) {
  if (a === null || b === null) {
    console.error("Error: Null values are not allowed.");
    return null; // or throw an error: throw new Error("Null values are not allowed.");
  }
  // ... rest of the function
}