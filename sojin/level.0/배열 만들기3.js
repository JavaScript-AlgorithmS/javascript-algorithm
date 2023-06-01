import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-31
 * **/

/** 문제 설명
정수 배열 arr와 2개의 구간이 담긴 배열 intervals가 주어집니다.

intervals는 항상 [[a1, b1], [a2, b2]]의 꼴로 주어지며 각 구간은 닫힌 구간입니다. 닫힌 구간은 양 끝값과 그 사이의 값을 모두 포함하는 구간을 의미합니다.

이때 배열 arr의 첫 번째 구간에 해당하는 배열과 두 번째 구간에 해당하는 배열을 앞뒤로 붙여 새로운 배열을 만들어 return 하는 solution 함수를 완성해 주세요.
**/

function solution(arr, intervals) {
  const [interval1, interval2] = intervals;
  const [start1, end1] = interval1;
  const [start2, end2] = interval2;

  return arr.slice(start1, end1 + 1).concat(arr.slice(start2, end2 + 1));
}

/**
 * function solution(arr, intervals) {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}
 */

function main() {
  const arr = [1, 2, 3, 4, 5];
  const intervals = [
    [1, 3],
    [0, 4],
  ];
  const result = [2, 3, 4, 1, 2, 3, 4, 5];

  checkAnswer(
    JSON.stringify(solution(arr, intervals)) === JSON.stringify(result)
  );
}

main();
