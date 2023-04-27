import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-27
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.**/

function solution(my_string) {
  let sum = 0;
  const num = my_string.match(/[0-9]/g);
  if (num !== null) {
    for (let i = 0; i < num.length; i++) {
      sum += Number(num[i]);
    }
    return sum;
  }
}

/**
 * 한자리 숫자를 추출할 때는 /\d/g 대신 /[0-9]/g 정규표현식 사용해야한다.
 * 숫자가 없는 경우'null'을 반환하기 때문에 오류방지를 위해 if문으로 확인해준다.
 */

function main() {
  const my_string = "aAb1B2cC34oOp";
  const result = 10;

  checkAnswer(solution(my_string) === result);
}

main();
