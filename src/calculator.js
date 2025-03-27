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

  if (numbersString.includes(delimiter)) {
    const nums = numbersString.split(delimiter).map((num) => parseInt(num, 10));
    return nums.reduce((sum, num) => sum + num, 0);
  }

  return parseInt(numbersString, 10);
}
