import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-06
 * **/

/** 문제 설명
문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
 **/

function solution(my_string, indices) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      answer += my_string[i];
    }
  }
  return answer;
}

/**
 * function solution(my_string, indices) {
    return [...my_string].filter((v, i) => !indices.includes(i)).join("");
}
 */

/**
 * function solution(my_string, indices) {
 * const set = new Set(indices);
 * return [...my_string].filter((_,i) => !set.has(i)).join("");
 * }
 */

function main() {
  const my_string = "apporoograpemmemprs";
  const indices = [1, 16, 6, 15, 0, 10, 11, 3];
  const result = "programmers";

  checkAnswer(solution(my_string, indices) === result);
}

main();
