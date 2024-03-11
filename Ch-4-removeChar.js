function removeChar(str) {
  return str.substring(1, str.length - 1);
}

// const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
