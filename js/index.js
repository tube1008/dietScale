// const bank_input = document.querySelector('#bank_input'); // 입금 input
// const bank_total = document.querySelector('#bank_total'); // 총잔액 input
// const bank_btn = document.querySelector('#bank_btn'); // 입금버튼
// let total = 10000 //number
// console.log(bank_input, bank_total, bank_btn);
// bank_total.value = total

// bank_btn.addEventListener('click',function(){
//     console.log(Number(bank_input.value) + 100) // 더하기 결과 확인
//     console.log(total + Number(bank_input.value)) // 총 잔액 더하기 결과 확인
//     let input_total = Number(bank_input.value) + 100 // 입금액 + 이자
//     total += input_total; //total = total + input_total;
//     bank_total.value = total;
//     //입금액 입력값 초기화
//     bank_input.value = ''; // 중요 //
// })

/* 계산식) **적정체중 = (본인신장-100)*0.9**

변수명 예) **userHeight, userWeight, goals, result, normal_w**

- +CSS 디자인은 심미적으로 자유롭게 표현하세요.
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기

최종목표 **결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.** */

const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
console.log(height, weight, goals, result)

result.addEventListener('click',function(){
    let normal_w = (Number(height.value - 100)*0.9);
    goals.value = `적정체중은 ${normal_w}kg이며 ${normal_w - Number(weight.value)}kg 초과되셨습니다.`
})  