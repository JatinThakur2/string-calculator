export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  let numbersString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEnd);
    numbersString = numbers.substring(delimiterEnd + 1);
  }

  // Replace newlines with the delimiter
  numbersString = numbersString.replace(/\n/g, delimiter);

  const nums = numbersString.split(delimiter).map((num) => parseInt(num, 10));

  // Check for negative numbers
  const negativeNumbers = nums.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
