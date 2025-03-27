export function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  if (numbers.includes(",")) {
    const nums = numbers.split(",").map((num) => parseInt(num, 10));
    return nums[0] + nums[1];
  }

  return parseInt(numbers, 10);
}
