import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-25
 * **/

/** 문제 설명
1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.
**/

function solution(a, b, c) {
  if (a !== b && b !== c && c !== a) {
    return a + b + c;
  } else if (a === b && b === c) {
    return (
      (a + b + c) *
      (a * a + b * b + c * c) *
      (a * a * a + b * b * b + c * c * c)
    );
  } else {
    return (a + b + c) * (a * a + b * b + c * c);
  }
}

/**
 *  변수를 사용해서 중간 결과를 저장하면 코드의 가독성과 유지보수성을 향상시킬 수 있다.
function solution(a, b, c) {
    let sum1 = a + b + c;
    let sum2 = a * a + b * b + c * c;
    let sum3 = a ** 3 + b**3 + c**3;

    if (a === b && b === c) 
        return sum1*sum2*sum3;
     else if (a === b || a === c || b === c) 
        return sum1*sum2;
     else 
        return sum1;
}
 */

function main() {
  const a = 4;
  const b = 4;
  const c = 4;
  const result = 110592;

  checkAnswer(solution(a, b, c) === result);
}

main();
