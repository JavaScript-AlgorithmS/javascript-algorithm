import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-27
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.**/

function solution(my_string) {
  let sum = 0;
  const num = my_string.match(/[0-9]/g); // /\d/g 와 /[0-9]/g은 기능상 동일하게 적용된다.
  if (num !== null) {
    // match 함수가 주어진 문자열에서 정규 표현식에 해당하는 문자를 발견하지 못했을 때 null을 반환하기 때문에 오류방지를 위한 필수적인 부분!
    for (let i of num) {
      sum += Number(i);
    }
    return sum;
  }
}

/** 대괄호 [] 안에서 ^ 기호는 부정(negation)을 의미
 * function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}
 */

function main() {
  const my_string = "aAb1B2cC34oOp";
  const result = 10;

  checkAnswer(solution(my_string) === result);
}

main();
