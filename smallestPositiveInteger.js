
/*
Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function solution(A) {
  // Filter for number greater than 0 and sort in ascending order
  let positiveNumbers = A.filter(x => x > 0).sort((a,b) => a -b);
  // set initial to 1
  let smallestNumber = 1;

  for (let num of positiveNumbers) {
    // if it equals smallest number then increment since that number is already in array
    if (num == smallestNumber) {
      smallestNumber++;
    } else if (num > smallestNumber) {
      // if the number in the array is greater than the smallest number then break loop
      // since the smallest number is missing in array otherwise it would equal if it was
      // present in array, which we would then increment like above.
      break;
    }
  }

  return smallestNumber;
}
