const input_2_1 = document.querySelector('#input_2_1');
const answer_2_1 = document.querySelector('#answer_2_1');
const point_2_1 = document.querySelector('#point_2_1');

const input_2_2 = document.querySelector('#input_2_2');
const answer_2_2 = document.querySelector('#answer_2_2');
const point_2_2 = document.querySelector('#point_2_2');

const input_2_3 = document.querySelector('#input_2_3');
const answer_2_3 = document.querySelector('#answer_2_3');
const point_2_3 = document.querySelector('#point_2_3');

const input_2_4 = document.querySelector('#input_2_4');
const answer_2_4 = document.querySelector('#answer_2_4');
const point_2_4 = document.querySelector('#point_2_4');

const input_2_5 = document.querySelector('#input_2_5');
const answer_2_5 = document.querySelector('#answer_2_5');
const point_2_5 = document.querySelector('#point_2_5');

const input_2_6 = document.querySelector('#input_2_6');
const answer_2_6 = document.querySelector('#answer_2_6');
const point_2_6 = document.querySelector('#point_2_6');

const input_2_7 = document.querySelector('#input_2_7');
const answer_2_7 = document.querySelector('#answer_2_7');
const point_2_7 = document.querySelector('#point_2_7');

const input_2_8 = document.querySelector('#input_2_8');
const answer_2_8 = document.querySelector('#answer_2_8');
const point_2_8 = document.querySelector('#point_2_8');

const input_2_9 = document.querySelector('#input_2_9');
const answer_2_9 = document.querySelector('#answer_2_9');
const point_2_9 = document.querySelector('#point_2_9');
const total_point = document.querySelector('#total_point');
const result_btn = document.querySelector('#result_btn');
const reset_btn = document.querySelector('#reset_btn');
let dan = 2;
console.log(input_2_1, answer_2_1, point_2_1, total_point, result_btn, reset_btn);
result_btn.addEventListener('click',function(){
    if(input_2_1,input_2_2,input_2_3,input_2_4,input_2_5,input_2_6,input_2_7,input_2_8,input_2_9.value==''){window.alert('정답을 입력하세요')}
    
    answer_2_1.value = `${dan*1}`
    if(input_2_1.value==answer_2_1.value){point_2_1.value = '정답'}
    else {point_2_1.value = '오답'}
    answer_2_2.value = `${dan*2}`
    if(input_2_2.value==answer_2_2.value){point_2_2.value = '정답'}
    else {point_2_2.value = '오답'}

    answer_2_3.value = `${dan*3}`
    if(input_2_3.value==answer_2_3.value){point_2_3.value = '정답'}
    else {point_2_3.value = '오답'}
    
    answer_2_4.value = `${dan*4}`
    if(input_2_4.value==answer_2_4.value){point_2_4.value = '정답'}
    else {point_2_4.value = '오답'}

    answer_2_5.value = `${dan*5}`
    if(input_2_5.value==answer_2_5.value){point_2_5.value = '정답'}
    else {point_2_5.value = '오답'}

    answer_2_6.value = `${dan*6}`
    if(input_2_6.value==answer_2_6.value){point_2_6.value = '정답'}
    else {point_2_6.value = '오답'}

    answer_2_7.value = `${dan*7}`
    if(input_2_7.value==answer_2_7.value){point_2_7.value = '정답'}
    else {point_2_7.value = '오답'}

    answer_2_8.value = `${dan*8}`
    if(input_2_8.value==answer_2_2.value){point_2_8.value = '정답'}
    else {point_2_8.value = '오답'}

    answer_2_9.value = `${dan*9}`
    if(input_2_9.value==answer_2_9.value){point_2_9.value = '정답'}
    else {point_2_9.value = '오답'}
}) 



