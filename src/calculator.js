export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiters = [","];
  let numbersString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const newLineIndex = numbers.indexOf("\n");
    const delimiterPart = numbers.substring(2, newLineIndex);
    numbersString = numbers.substring(newLineIndex + 1);

    // Handle multiple delimiters with format //[delim1][delim2]...\n
    if (delimiterPart.startsWith("[")) {
      delimiters = [];
      let i = 0;
      while (i < delimiterPart.length) {
        if (delimiterPart[i] === "[") {
          const closeIndex = delimiterPart.indexOf("]", i);
          if (closeIndex !== -1) {
            const delimiter = delimiterPart.substring(i + 1, closeIndex);
            delimiters.push(delimiter);
            i = closeIndex + 1;
          } else {
            i++;
          }
        } else {
          i++;
        }
      }
    } else {
      // Simple single delimiter case //;\n
      delimiters = [delimiterPart];
    }
  }

  // Replace newlines with a comma first
  numbersString = numbersString.replace(/\n/g, ",");

  // Replace all custom delimiters with commas
  delimiters.forEach((delimiter) => {
    // Escape special regex characters
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedDelimiter, "g");
    numbersString = numbersString.replace(regex, ",");
  });

  // Split by comma and convert to numbers
  const nums = numbersString
    .split(",")
    .map((num) => parseInt(num, 10))
    .filter((num) => !isNaN(num)); // Filter out any invalid numbers

  // Check for negative numbers
  const negativeNumbers = nums.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  // Ignore numbers greater than 1000
  const filteredNums = nums.filter((num) => num <= 1000);

  return filteredNums.reduce((sum, num) => sum + num, 0);
}
