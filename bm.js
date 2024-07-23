let weight =document.querySelector('.weight');
let height =document.querySelector('.height');
let button =document.querySelector('.button');
let result =document.querySelector('.result');


function btnclick(){
    let hvalue = height.value;
    let wvalue = weight.value;
    let BMI = wvalue/(hvalue*hvalue);
    result.textContent= `result: ${BMI}`

}


