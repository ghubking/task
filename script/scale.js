const user_height = document.querySelector('#user_height');
const user_strength = document.querySelector('#user_strength');
const calcbtn1 = document.querySelector('#calcbtn1');
const calcbtn2 = document.querySelector('#calcbtn2');
const standard_strength = document.querySelector('#standard_strength');
const normal_strength = document.querySelector('#normal_strength');
const over = document.querySelector('#over');
let normal_result


console.log(user_height, user_strength, calcbtn1, calcbtn2, standard_strength, normal_strength);
calcbtn2.addEventListener('click',function(){
    normal_result = (user_height.value - 100)*0.9
    standard_strength.value = `${normal_result}`
    normal_strength.value = `${user_strength.value - normal_result}`
    if(normal_strength.value>0){over.value = `체중 초과`}
    if(normal_strength.value<0){over.value = `체중 미달`}
})

