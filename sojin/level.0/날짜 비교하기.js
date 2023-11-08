import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-02
 * **/

/** 문제 설명
정수 배열 date1과 date2가 주어집니다. 두 배열은 각각 날짜를 나타내며 [year, month, day] 꼴로 주어집니다. 각 배열에서 year는 연도를, month는 월을, day는 날짜를 나타냅니다.
만약 date1이 date2보다 앞서는 날짜라면 1을, 아니면 0을 return 하는 solution 함수를 완성해 주세요. **/

function solution(date1, date2) {
  for (let i = 0; i < 3; i++) {
    if (date1[i] < date2[i]) {
      return 1;
    } else if (date1[i] > date2[i]) {
      return 0;
    }
  }
  return 0; // 모든 조건문을 통과했다는 것은 두 날짜가 같은 뜻이므로, 0을 반환한다.
}

/**
 * const solution = (date1, date2) => new Date(date1) < new Date(date2) ? 1 : 0
 */

/**
 * function solution(date1, date2) {
    return date1.join('') - date2.join('') < 0 ? 1 : 0;
}
 */

function main() {
  const date1 = [2021, 12, 28];
  const date2 = [2021, 12, 29];
  const result = 1;

  checkAnswer(solution(date1, date2) === result);
}

main();
